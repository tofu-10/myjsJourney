let manyElements = document.getElementById('manyElements');
let outputDisplayForBtn=document.getElementById('outputDisplayForBtn')
let outputDisplayForInput=document.getElementById('outputDisplayForInput')


manyElements.addEventListener('click', (event)=> {
if(event.target.tagName==="BUTTON"){
    outputDisplayForBtn.innerText="hello i am clicked!"
}

});

//to create elements
let p=document.createElement('p');

p.innerHTML='<br> hello i am newly created paragraph text';

document.body.append(p);



let btn=document.createElement('button');
btn.classList.add('btnToCreateNewElements'); //adding class name
btn.id="createnewelement";//adding id to the btn


btn.innerText='click me to add new element';
document.body.append(btn);


let createBtn=document.getElementById('createnewelement');

createBtn.addEventListener('click',()=>{
    let createdDiv=document.createElement('div');
    createdDiv.innerHTML="<br>hello i am newly created div";
    document.body.append(createdDiv);
})


