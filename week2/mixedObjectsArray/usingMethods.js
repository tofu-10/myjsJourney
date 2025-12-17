let orders = [
  { id: 1, price: 500, delivered: true },
  { id: 2, price: 1200, delivered: false },
  { id: 3, price: 800, delivered: true },
  { id: 4, price: 800, delivered: false },
];

function totalPriceOfDeliveredOrder(orders){
    let totalPrice=orders.filter((order)=>order.delivered==true).reduce((p1,p2)=>p1.price+p2.price)
    console.log(totalPrice);
}

totalPriceOfDeliveredOrder(orders);