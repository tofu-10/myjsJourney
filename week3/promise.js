

//check the order which is delivered, if order ID is divisible by 2 then it is delivered of not then not
// by using promises

function checker(orderid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(orderid%2==0){
                resolve({id:orderid, status: "checked"})
            }
            else{
                reject("Order is not yet received.")
            }
        },2000)
    })
}

checker(1)
.then(
    (result)=>{
        console.log(result);
    }
)
.catch(
    (error)=>{console.log(error);
    }
)


//promise using function asyncfunction

async function checker(orderid){
    if(orderid%2==0){
        return "task completed";
    }
    else{
        throw "task failed";  //using return will also result the same but return = sucess/resolve for promise, throw= failure/reject
    }
}

checker(51)
.then((result)=>{console.log(result)})
.catch((error)=>{console.log(error)})