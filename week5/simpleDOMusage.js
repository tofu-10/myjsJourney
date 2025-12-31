let helloClass= document.querySelector('.helloClass');
let mySelf=document.getElementById("mySelf")



//overwritting what is on html file.
helloClass.innerHTML="<br>Hello world";
mySelf.innerText='how are you class?';


//changing styles
helloClass.style.border="1px solid red";
helloClass.style.color="red";

//events
let btn=document.getElementById("btn");


let count=document.getElementById("count");
let RealCounter=1;
btn.addEventListener("click",()=>{
    count.innerText=RealCounter++;
})


//input things!!
let inputName=document.getElementById('inputName');

let displayName=document.getElementById('displayName');



displayName.addEventListener("click",()=>{
    alert(inputName.value);

})