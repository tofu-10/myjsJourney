let nums = [1, 2, 3, 3,5, 6]

//Create a new array with squares of only even numbers
function evenSquares(nums){
    let resultArray=[];
    for(i=0;i<nums.length;i++){
    if(nums[i]%2==0)
    {
        resultArray.push(nums[i]**2) // "**" is power
    }
}
console.log(resultArray);
}

// evenSquares(nums)


function sumOfOdd(){
    let sum=0;
        for(i=0;i<nums.length;i++){
            if(nums[i]%2!=0){
                sum=sum+nums[i];
            }
        }
        console.log(sum)
}

// sumOfOdd();


function firstGreaterAfterSomething(nums){
    for(i=0;i<nums.length;i++)
    {
        if(nums[i]<4){
            for(j=i+1;j<nums.length;j++)
            {
                if(nums[j]>4)
                {
                    console.log("the larger number than 4 after 4 is: ",nums[j]);
                    return 0;
                }
            }
        }
    }

}

firstGreaterAfterSomething(nums);