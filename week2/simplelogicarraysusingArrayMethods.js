// Array has its methods like filter , map , find, reduce. 


let nums = [1, 2, 3, 4, 5, 6];
function evenSquares(nums){
    let result= nums.filter((n)=>n%2==0).map((n)=>n**2)
    console.log(result);
}

evenSquares(nums);

function sumOfOdd(nums){
    let result=nums.filter((n)=>n%2!==0).reduce((h1,h2)=> h1+h2)
    console.log(result);
}

sumOfOdd(nums);

function firstGreaterAfterSomething(nums){
    let result=nums.find((n)=>n>4);
    console.log(result);
}
firstGreaterAfterSomething(nums);