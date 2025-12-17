let orders = [
  { id: 1, price: 500, delivered: true },
  { id: 2, price: 1200, delivered: false },
  { id: 3, price: 800, delivered: true },
  { id: 4, price: 800, delivered: false },
];


function totalPriceOfDeliveredOrder(orders){
    let totalPrice=0;
    for(i=0;i<orders.length;i++){
        if(orders[i].delivered==true){
            totalPrice+=orders[i].price;
        }
    }
    console.log(totalPrice);
}

// totalPriceOfDeliveredOrder(orders)


function arrayOfUndeliveredOrders(orders){
    let newArrayOfUndelivered=[];
    for (i = 0; i < orders.length; i++) {
      if (orders[i].delivered == false) {
        newArrayOfUndelivered.push(orders[i].id);
      }
    }
    console.log(newArrayOfUndelivered);
}


arrayOfUndeliveredOrders(orders);