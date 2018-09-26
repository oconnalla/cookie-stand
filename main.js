var storeHours = ['6am', '7am', '8am', '9am','10 am', '11 am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ];

var store = [
  {
    location: '1st and Pike',
    minCustomer: 23,
    maxCustomer: 65,
    avgSale: 6.3,
    cookiesSold: [],
    totalSales: {}
  }, {
    location: 'SeaTac Airport',
    minCustomer: 3,
    maxCustomer: 24,
    avgSale: 1.2,
    cookiesSold: [],
    totalSales: {}
  }, {
    location: 'Seattle Center',
    minCustomer: 11,
    maxCustomer: 38,
    avgSale: 3.7,
    cookiesSold: [],
    totalSales:{}

  }, {
    location: 'Capitol Hill',
    minCustomer: 20,
    maxCustomer: 38,
    avgSale: 2.3,
    cookiesSold: [],
    totalSales: {}
  }, {
    location: 'Alki',
    minCustomer: 2,
    maxCustomer: 16,
    avgSale: 4.6,
    cookiesSold: [],
    totalSales: {}
  }
];
for(var i = 0; i < store.length; i++) {
  var cookiesPerHour = function (){
    var randomValue = Math.floor(Math.random() * (store[i].maxCustomer - store[i].minCustomer) + store[i].minCustomer);
    return Math.round(randomValue * store[i].avgSale);
  };
  console.log(cookiesPerHour());

  var cookiesAllDay = function() {
    for(var x = 0; x < storeHours.length; x++) {
      store[i].cookiesSold.push(cookiesPerHour());
    }

    totalSales = function () {
      for (j=0; j< store[i].cookiesSold.length; j++)
        totalSales = store[i].cookiesSold[j] + totalSales;
    };
  };
}

console.log(cookiesAllDay());
console.log(store[i].cookiesSold);

console.log();

