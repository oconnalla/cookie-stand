var storeHours = ['6am', '7am', '8am', '9am','10 am', '11 am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ];

var store = [
  {
    location: '1st and Pike',
    minCustomer: 23,
    maxCustomer: 65,
    avgSale: 6.3,
    cookiesSold: [],
    totalSales: 0
  }, {
    location: 'SeaTac Airport',
    minCustomer: 3,
    maxCustomer: 24,
    avgSale: 1.2,
    cookiesSold: [],
    totalSales: 0
  }, {
    location: 'Seattle Center',
    minCustomer: 11,
    maxCustomer: 38,
    avgSale: 3.7,
    cookiesSold: [],
    totalSales: 0

  }, {
    location: 'Capitol Hill',
    minCustomer: 20,
    maxCustomer: 38,
    avgSale: 2.3,
    cookiesSold: [],
    totalSales: 0
  }, {
    location: 'Alki',
    minCustomer: 2,
    maxCustomer: 16,
    avgSale: 4.6,
    cookiesSold: [],
    totalSales: 0
  }
];
for(var i = 0; i < store.length; i++) {
  var cookiesPerHour = function (){
    var randomValue = Math.floor(Math.random() * (store[i].maxCustomer - store[i].minCustomer) + store[i].minCustomer);
    return Math.round(randomValue * store[i].avgSale);
  };

  var cookiesAllDay = function() {
    for(var x = 0; x < storeHours.length; x++) {
      store[i].cookiesSold.push(cookiesPerHour());
    }
  };

  var totalCookieSales = function(){
    console.log(store[i].cookiesSold);
    for (var y = 0; y < store[i].cookiesSold.length; y++){
      store[i].totalSales += store[i].cookiesSold[y];
      console.log(store[i].totalSales);
    }
  };
  cookiesAllDay();
  totalCookieSales();
}
