async function CallApiUsingMethods() {
  let res = await fetch("https://fakestoreapi.com/products");
  let data = await res.json();
  let newArrOfTitle = data.map((n) => n.title);
  let letnewArrOfPrice = data.filter((n) => n.price < 100).map((n) => n);
  let TotalPriceOfProduct = data.reduce((acc, item) => acc + item.price, 0); //the ,0 assigns 0 to acc, if not done (acc would be the entire first product object )
  console.log(`total price: ${TotalPriceOfProduct}`);
  console.log(`Only prices: `, letnewArrOfPrice);
  console.log(`Titles: ${newArrOfTitle}`);
}

(async () => {
  try {
    await CallApiUsingMethods();
  } catch (e) {
    console.log(e);
  }
})();

