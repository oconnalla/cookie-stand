var storeHours = ['6am', '7am', '8am', '9am', '10 am', '11 am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

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
// for (var i = 0; i < store.length; i++) {
//   var cookiesPerHour = function () {
//     var randomValue = Math.floor(Math.random() * (store[i].maxCustomer - store[i].minCustomer + 1) + store[i].minCustomer);
//     return Math.round(randomValue * store[i].avgSale);
//   };

//   var cookiesAllDay = function () {
//     for (var x = 0; x < storeHours.length; x++) {
//       store[i].cookiesSold.push(cookiesPerHour());
//     }
//   };

//   var totalCookieSales = function () {
//     console.log(store[i].cookiesSold);
//     for (var y = 0; y < store[i].cookiesSold.length; y++) {
//       store[i].totalSales += store[i].cookiesSold[y];
//       console.log(store[i].totalSales);
//     }
//   };
// }

// cookiesAllDay();
// totalCookieSales();


var list = document.createElement ('ul');
var location = document.createElement ('h2');
var cookiesHourly = store[i].cookiesSold;
var cookiesTotal = 0;
var hours = storeHours[z];
console.log(hours);

//  var saleSentence = storeHours[] + totalSales + " cookies";
  //  store[i].cookiesSold.push(saleSentence);



  // var storesContainer = document.getElementById('stores');
  // var storeLocationEl = document.createElement('h2');
  // storeLocationEl.textContent = store[i].location;
  // storesContainer.appendChild(storeLocationEl);
  // var render = function () {
  //   var ulEl = document.createElement('ul');
  //   for (var y = 0; y < store[i].cookiesSold.length; y++) {
  //     var liEl = document.createElement('li');
  //     liEl.textContent = store[i].cookiesSold[y];
  //     ulEl.appendChild(liEl);
  //   }
  //   var totalLiEl = document.createElement('li');
  //   totalLiEl.textContent = 'total' + "hghg" + 'cookies';
  //   ulEl.appendChild(totalLiEl);
  //   storesContainer.appendChild(ulEl);


  //     var storesContainer = document.getElementById('stores');
  //     console.log(storesContainer);

  //     var storeLocationEl = document.createElement('h2');
  //     console.log(storeLocationEl);

  //     storeLocationEl.textContent = store[i].location;

  //     storesContainer.appendChild(storeLocationEl);
  //     console.log(storesContainer);

  //     var uLEl = document.createElement('ul');
  //     for(var y =0; y < store[i].location.cookiesSold.length; y++) {

  //       var liEl = document.createElement('li');
  // console.log(liEl)

  //       liEl.textContent = store[i].cookiesSold[y] + store[i].totalSales;
  //       uLEl.appendChild(liEl);
  //     }