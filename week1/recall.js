// let num=parseInt(prompt("Enter any value: "));
let arr=[2,1,3,2,3,990,9,89,90,9];

let word="Ainuiash";

function isEven(num){

   if(num%2==0){
    return true;
   }else 
    {
        return false;
    }

}

function sumArray(arr){
let sum=0;
    for(i=0;i<arr.length;i++){
    sum=arr[i]+sum;
}
return sum;
}


//---------------------------------------------------------------------------------

function findMax(arr){
    let i=0;
let max=arr[i];
while(i<arr.length )
{
    if(max<arr[i])
    {
        max=arr[i];
        i++
    }
    else{
      i++;
    }

}
return max;
}


//---------------------------------------------------------------------------------

function swap(word,i,j){
    temp=word[i];
    word[i]=word[j];
    word[j]=temp;
}
//---------------------------------------------------------------------------------

function reverse(word){
    let array=word.split("");
    let i=0,j=array.length-1;
    while(j>i){
        swap(array,i,j);
        j--;
        i++;
    }
    return array.join("");
}
//---------------------------------------------------------------------------------


function countVowels(str){
    let numOfVowel=0;

let vowelChecker = (str.toLowerCase()).split("");
for(i=0;i<vowelChecker.length;i++){
    if(vowelChecker[i]=="a"||vowelChecker[i]=="e"||vowelChecker[i]=="i"||vowelChecker[i]=="o"||vowelChecker[i]=="u"){
        numOfVowel+=1;
    }

}
return numOfVowel;

}

//-------------------------------------------------------------------------

function removeDuplicates(arr){
let result=[];
let isDuplicate=false;
    for(i=0;i<arr.length;i++)
    {
        for(j=0;j<result.length;j++)
        {
            if(arr[i]==result[j]){
                isDuplicate=true;
                break;
            }
        }
        if(!isDuplicate){
            result.push(arr[i]);

        }
        isDuplicate=false;
    }
    return result;
}

// console.log(isEven(num));
// console.log(sumArray(arr));
// console.log(findMax(arr));
// console.log(reverse(word));
// console.log(countVowels(word));
console.log(removeDuplicates(arr));
console.log("hello");