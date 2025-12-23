async function DataFetch(){
    let res= await fetch("https://fakestoreapi.com/products");
    let data= await res.json();
    return data;
}


(async()=>{
    
    try{

    let data=await DataFetch();
    data.forEach(element => {
        console.log("Titles:" ,element.title);
    });

    let newData=data.filter((price)=>{price>100});
    console.log("Data with price more than 100",data.filter((price)=>{price>100}));
    console.log("Total price of filtered products: ",newData.reduce((p1,p2)=>{p1.price+p2.price},0))
    
    }
    catch(err){
        console.log(err);
    }
})();