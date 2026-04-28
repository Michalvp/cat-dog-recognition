const btnsub = document.querySelector("#submit")
const imgsource = document.querySelector("#imgplace")
const answerspace = document.getElementById("answer")
const imageshow = document.getElementById("imshow")
async function passimage(){
    let data = new FormData()
    data.append("Image", imgsource.files[0])
    if(imgsource.files[0] && imgsource.files[0].type.split("/")[0] == "image"){   
        
        const response = await fetch("/check", {
            "method": "POST",
            "body": data,
        });
        let answer = await response.text()
        answerspace.textContent = "The answer is: "+answer
    }
    else{
        answerspace.textContent = "ERROR: no image selected or incorrect type of file"
    }
}
function showimage(){
    console.log("uruchamia sie")
    if(imgsource.files[0] && imgsource.files[0].type.split("/")[0] == "image"){  
        imageshow.src=URL.createObjectURL(imgsource.files[0])
    }
}
imgsource.addEventListener("input", showimage)
btnsub.addEventListener("click", passimage)