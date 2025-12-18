
function checkOrders(orderid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (orderid % 2 == 0) {
        resolve({ id: orderid, status: "The order is checked" });
      } else {
        reject({ id: orderid, status: "The order is not checked" });
      }
    }, 2000);
  });
}

for (i in orders) {
  checkOrders(orders[i])
  .then((result) => {
    console.log(result);
  })
    .catch((error) => {
      console.log(error);
    });
  }
  
  const orders = [1, 2, 3, 4, 5];
  //using async await
async function checkorders2(orderid) {
  if (orderid % 2 == 0) {
    return { id: orderid, status: "checked" };
  } else {
    throw { id: orderid, status: "unchecked" };
  }
}

for (i in orders) {
  checkorders2(orders[i])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
}
