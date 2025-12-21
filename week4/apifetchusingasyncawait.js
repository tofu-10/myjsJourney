async function weFetch(){
    try{
        let res=await fetch("https://jsonplaceholder.typicode.com/users");
        let data=await res.json();
        data.forEach(element => {
            console.log(`name= ${element.name}`)
        });
    }
    catch(e){
        console.log(e);
    }
}

weFetch();