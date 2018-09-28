var storeHours = ['6am', '7am', '8am', '9am', '10 am', '11 am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

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
//     var randomValue = Math.floor(Math.random() * (store[i].maxCustomer - store[i].minCustomer + 1) + store[i].minCustomer);
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
//Rendering as UL

//________________________________NEW VERSION WITH CONSTRUCTOR FUNCTIONS_________________________


//store constructor function:
var StoreConstructor = function (location, minCustomer, maxCustomer, avgSale) {
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgSale = avgSale;
  this.cookiesSold = [];
  this.totalSales = 0;
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


//Declare store objects and push them into store array

// var store = [];

var pikePlace = new StoreConstructor('1st and Pike', 23, 65, 6.3, [], 0);
console.log(pikePlace);
var seaTac = new StoreConstructor('SeaTac Airport', 3, 24, 1.2, [], 0);
console.log(seaTac);
var seattleCenter = new StoreConstructor('Seattle Center', 11, 38, 3.7, [], 0);
console.log(seattleCenter);
var capitolHill = new StoreConstructor('Capitol Hill', 20, 38, 2.3, [], 0);
console.log(capitolHill);
var Alki = new StoreConstructor('Alki', 2, 16, 4.6, [], 0);
console.log(Alki);

// store.push(pikePlace);
// store.push(seaTac);
// store.push(seattleCenter);
// store.push(capitolHill);
// store.push(Alki);
//Calling ths functions

var callingAllFunctions = function() {
  pikePlace.cookiesAllDay();
  seaTac.cookiesAllDay();
  seattleCenter.cookiesAllDay();
  capitolHill.cookiesAllDay();
  Alki.cookiesAllDay();
};
callingAllFunctions();


// pikePlace.totalCookieSales();
