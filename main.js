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
//TR== ul (horizonatally), TD == li,
var createTableHours = function() {
  var row = document.createElement('tr');
  var tdEl = document.createElement('td');
  var result = 'LOCATIONS';
  tdEl.textContent = result;
  row.appendChild(tdEl);

  for(var i = 0; i< storeHours.length; i++){
    var tdEl = document.createElement('td');
    var result = storeHours[i];
    tdEl.textContent = result;
    row.appendChild(tdEl);
  }
  var storesContainer = document.getElementById('storeTable');
  storesContainer.appendChild(row);
};




StoreConstructor.prototype.renderStoreRow = function(){
  this.cookiesAllDay();
  var storesContainer = document.getElementById('storeTable');
  var tableRow = document.createElement('tr');

  var tableLocation = document.createElement('td');
  tableLocation.textContent = this.location;
  tableRow.appendChild(tableLocation);

  for (var i = 0; i < storeHours.length; i++) {
    var tdEl = document.createElement ('td');
    var result = this.cookiesSold[i];
    tdEl.textContent = result;
    tableRow.appendChild(tdEl);
  }
  var totalSumEl = document.createElement ('td');
  var sumResult = 'Total Sales: ' + this.totalSales;
  totalSumEl.textContent= sumResult;
  tableRow.appendChild(totalSumEl);
  storesContainer.appendChild(tableRow);
};

// // TR== ul (horizonatally), TD == li,
// StoreConstructor.prototype.renderAsTable = function(){
//   this.cookiesAllDay();
//   var storesContainer = document.getElementById('storeTable');
//   var tableRow = document.createElement('tr');

//   for (var i = 0; i < storeHours.length; i++) {

//     var tdEl = document.createElement ('td');
//     var result = cookiesAllDay();
//     tdEl.textContent = result;
//     tableRow.appendChild(tdEl);
//   }
//   var totalSumEl = document.createElement ('td');
//   var sumResult = 'Total Sales: ' + this.totalSales;
//   totalSumEl.textContent= sumResult;
//   tableRow.appendChild(totalSumEl);
//   storesContainer.appendChild(tableRow);
// };


var pikePlace = new StoreConstructor('1st and Pike', 23, 65, 6.3, [], 0);
var seaTac =  new StoreConstructor('SeaTac Airport', 3, 24, 1.2, [], 0);
var seattleCenter = new StoreConstructor('Seattle Center', 11, 38, 3.7, [], 0);
var capitolHill = new StoreConstructor('Capitol Hill', 20, 38, 2.3, [], 0);
var Alki = new StoreConstructor('Alki', 2, 16, 4.6, [], 0);




var callingAllFunctions = function() {
  createTableHours();
  pikePlace.renderStoreRow();
  seaTac.renderStoreRow();
  seattleCenter.renderStoreRow();
  capitolHill.renderStoreRow();
  Alki.renderStoreRow();
};
callingAllFunctions();

// pikePlace.renderAsTable();
