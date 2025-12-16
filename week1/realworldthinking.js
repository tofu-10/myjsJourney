let students = [
  { name: "A", marks: 70 },
  { name: "B", marks: 40 },
  { name: "C", marks: 85 },
];


function passed(students){
    for(i=0;i<students.length;i++){
    if(students[i].marks>=50){
        console.log(students[i]);
    }
    }
    let topper=0;
    let topperInfo=[];
    for(i=0;i<students.length;i++){
        if(topper<students[i].marks)
        {
            topperInfo=students[i];
            topper=students[i].marks;
        }
    }
    console.log(topperInfo);
    console.log("The topper of the class is: ", topperInfo);

}
// console.log(passed(students))
passed(students);

let operator="/",a=9,b=3;

function calculator(operator,a,b){

    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
        
      case "/":
        if(b!=0)
        return a / b;
    
    else
        console.log("cant");
    break
    default:
        console.log("youve done the wrong operation");
        break;
    }
        
}

console.log(calculator(operator,a,b));





function fizzbuzz(){
    for(i=0;i<100;i++){
        if(i%3==0 && i%5==0){
            console.log('fuzzbuzz');
        }
        else if(i%3==0){
            console.log("fuzz");

        }else if(i%5==0){
            console.log("Buzz");

        }
        else console.log(i);
    }
}
fizzbuzz();