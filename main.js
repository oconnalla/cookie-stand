// var storeHours = ['6am', '7am', '8am', '9am','10 am', '11 am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ];

// var store = [
//   {
//     location: '1st and Pike',
//     minCustomer: 23,
//     maxCustomer: 65,
//     avgSale: 6.3,
//     cookiesSold: [],
//     totalSales: 0
//   }, {
//     location: 'SeaTac Airport',
//     minCustomer: 3,
//     maxCustomer: 24,
//     avgSale: 1.2,
//     cookiesSold: [],
//     totalSales: 0
//   }, {
//     location: 'Seattle Center',
//     minCustomer: 11,
//     maxCustomer: 38,
//     avgSale: 3.7,
//     cookiesSold: [],
//     totalSales: 0

//   }, {
//     location: 'Capitol Hill',
//     minCustomer: 20,
//     maxCustomer: 38,
//     avgSale: 2.3,
//     cookiesSold: [],
//     totalSales: 0
//   }, {
//     location: 'Alki',
//     minCustomer: 2,
//     maxCustomer: 16,
//     avgSale: 4.6,
//     cookiesSold: [],
//     totalSales: 0
//   }
// ];
// for(var i = 0; i < store.length; i++) {
//   var cookiesPerHour = function (){
//     var randomValue = Math.floor(Math.random() * (store[i].maxCustomer - store[i].minCustomer +1) + store[i].minCustomer);
//     return Math.round(randomValue * store[i].avgSale);
//   };

//   var cookiesAllDay = function() {
//     for(var x = 0; x < storeHours.length; x++) {
//       store[i].cookiesSold.push(cookiesPerHour());
//     }
//   };

//   var totalCookieSales = function(){
//     console.log(store[i].cookiesSold);
//     for (var y = 0; y < store[i].cookiesSold.length; y++){
//       store[i].totalSales += store[i].cookiesSold[y];
//       console.log(store[i].totalSales);
//     }
//   };
//   cookiesAllDay();
//   totalCookieSales();
// }


// var tableHeader = function(){
//   for(var x =0; x< storeHours.length; x++){
//     var storesContainer = document.getElementById('stores');
//     var storeLocationEl = document.createElement('h2');
//     storeLocationEl.textContent = store[i].location;
//     storesContainer.appendChild(storeLocationEl);
//     var uLEl = document.createElement('ul');
//     var list = document.createElement ('ul');
//   }
// };
// var list = document.createElement ('ul');
// var location = document.createElement ('h2');
// var cookiesHourly = store[i].cookiesSold;
// var cookiesTotal = 0;
// var hours = storeHours[z];
// console.log(hours);


// render();
// }

// storeLocationRendering();


//________________________________NEW VERSION WITH CONSTRUCTOR FUNCTIONS_________________________

var storeHours = [' 6:00 am ', ' 7:00 am ', ' 8:00 am ', ' 9:00 am ',' 10:00 am ', ' 11:00 am ', ' 12:00 pm ', ' 1:00 pm ', ' 2:00 pm ', ' 3:00 pm ', ' 4:00 pm ', ' 5:00 pm ', ' 6:00 pm ', ' 7:00 pm ', ' 8:00 pm ' ];

var store = [];

//store constructor function:
var StoreConstructor = function (location, minCustomer, maxCustomer, avgSale) {
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgSale = avgSale;
  this.cookiesSold = [];
  this.totalSales = 0;
  store.push(this);
};


//prototype functions acting on stores

StoreConstructor.prototype.cookiesPerHour = function () {
  for (var x = 0; x < storeHours.length; x++) {
    var randomValue = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
    return Math.round(randomValue * this.avgSale);
  }
};

StoreConstructor.prototype.cookiesAllDay = function () {
  for (var x = 0; x < storeHours.length; x++) {
    this.cookiesSold.push(this.cookiesPerHour());
    this.totalSales += this.cookiesSold[x];
  }
};

//store table rendering
var pikePlace = new StoreConstructor('1st and Pike', 23, 65, 6.3, [], 0);
pikePlace.renderUL  = function (){
  this.cookiesAllDay();
  
  var storesContainer = document.getElementById('stores');
  var uL = document.createElement('ul');
  
  for (var i = 0; i < storeHours.length; i++) {
    var liEl = document.createElement ('li');
    var result = 'hour:' + storeHours[i] + ' cookies sold:'+this.cookiesSold[i];
    liEl.textContent = result;
    uL.appendChild(liEl);
  }
  var sumEl = document.createElement ('li');
  var sumResult = 'Total: ' + this.totalSales;
  sumEl.textContent= sumResult;
  uL.appendChild(sumEl);
  
  storesContainer.appendChild(uL);
};
pikePlace.renderUL();


var seaTac =  new StoreConstructor('SeaTac Airport', 3, 24, 1.2, [], 0);
seaTac.renderUL = function() {
  this.cookiesAllDay();
  var storesContainer = document.getElementById('stores2');
  var uL = document.createElement('ul');

  for (var i = 0; i < storeHours.length; i++) {
    var liEl = document.createElement ('li');
    var result = 'hour:' + storeHours[i] + ' cookies sold:'+this.cookiesSold[i];
    liEl.textContent = result;
    uL.appendChild(liEl);
  }
  var sumEl = document.createElement ('li');
  var sumResult = 'Total: ' + this.totalSales;
  sumEl.textContent= sumResult;
  uL.appendChild(sumEl);
  
  storesContainer.appendChild(uL);
};
seaTac.renderUL();

// renderUL();
// var storesContainer = document.getElementById('storeTable');

// var renderHeader = function() {
//   var headerEl = document.createElement ('tr');
//   headerEl.appendChild(timeEl);
//   var timeEl = document.createElement ('th');
//   for (var x = 0; x < storeHours.length; x++) {
//     timeEl = document.createElement ('th');
//     timeEl.textContent = storeHours[x];
//     headerEl.appendChild(timeEl);
//   }
//   storesContainer.appendChild(headerEl);
// };

// var tableData = function () {
//   for(var i = 0; i < store.length; i++) {
//     var storeLocationEl = document.createElement ('tr');
//     var locationEl = document.createElement('td');
//     locationEl.textContent = store.location;
//     storeLocationEl.appendChild(locationEl);

//     locationEl.textContent = store[i].location;
//     storeLocationEl.appendChild(locationEl);

//     var storeHourlySalesEl = document.createElement ('tr');
//     var hourlySalesEl = document.createElement('td');
//     hourlySalesEl.textContent = store[i].cookiesSold;
//     storeHourlySalesEl.appendChild(hourlySalesEl);

//     storesContainer.appendChild(storeLocationEl);
//     storesContainer.appendChild(storeHourlySalesEl);
//   }
// };

//Declare store objects and push them into store array


console.log(pikePlace);
console.log(seaTac);
var seattleCenter = new StoreConstructor('Seattle Center', 11, 38, 3.7, [], 0);
console.log(seattleCenter);
var capitolHill = new StoreConstructor('Capitol Hill', 20, 38, 2.3, [], 0);
console.log(capitolHill);
var Alki = new StoreConstructor('Alki', 2, 16, 4.6, [], 0);
console.log(Alki);
console.log(store);


var callingAllFunctions = function() {
  pikePlace.cookiesAllDay();
  seaTac.cookiesAllDay();
  seattleCenter.cookiesAllDay();
  capitolHill.cookiesAllDay();
  Alki.cookiesAllDay();
  // renderHeader();
  // tableData();
};
// callingAllFunctions();


// pikePlace.totalCookieSales();
