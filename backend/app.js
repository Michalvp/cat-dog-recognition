const express = require('express');
const {PythonShell} = require('python-shell')
const app = express();
const fs = require('fs')
const port = 3000;
const router = express.Router();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS");
  next();
})
app.use(express.json({ limit: '100mb'}))
router.get('/', (req, res) => {
  res.send('Hello World!');
});
router.post('/check', (req,res) => {
  let image = req.body.image
  if (!image)
    return res.status(400).send("no file");
  image = image.split(';base64,').pop();
  const imagepath = "image.jpg";
  fs.writeFileSync(imagepath, image, {encoding: 'base64'})
  let options ={
    mode: 'text',
    pythonPath: 'python',
    args: [imagepath]
  };
PythonShell.run("CVDRmodel.py", options).then((result) => {
  res.send(result.toString())
  
})
})
app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});