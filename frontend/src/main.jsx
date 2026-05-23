import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
class Mainpage extends React.Component{
  constructor(props){
    super(props);
    this.state = {image: props.image, imageprev: props.imageprev, answer: props.answer}
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event) =>{
    const sendfile = event.target.files[0]
    const previewUrl = URL.createObjectURL(sendfile);
    const reader = new FileReader()
    reader.onloadend = () =>{
      this.setState({image:reader.result})
    }
    reader.readAsDataURL(sendfile)
    this.setState({imageprev: previewUrl})
  }
  async handleClick(event){
    
    const response = await fetch('http://localhost:3000/check', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({image:this.state.image})
    });
    let backendanswer = await response.text()
    this.setState({answer: backendanswer})
  }
  render(){
    return <div>
    <h1> Put image below to find out if on the image is cat or dog </h1>
    <input type="file" id="imgplace" onChange={this.handleChange}/>
    <button id="submit" onClick={this.handleClick}><p> SUBMIT </p></button>
    <p id="answer" >{this.state.answer}</p>
    <img id="imshow" src={this.state.imageprev}/>
    <script src="/static/CVDR app.js"></script>
    </div>
  }
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Mainpage/>
  </StrictMode>,
)
