
//______________________NEW VERSION WITH CONSTRUCTOR FUNCTIONS_________________________

var storeHours = [' 6:00 am ', ' 7:00 am ', ' 8:00 am ', ' 9:00 am ',' 10:00 am ', ' 11:00 am ', ' 12:00 pm ', ' 1:00 pm ', ' 2:00 pm ', ' 3:00 pm ', ' 4:00 pm ', ' 5:00 pm ', ' 6:00 pm ', ' 7:00 pm ', ' 8:00 pm ', ];

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

    StoreConstructor.prototype.totalSales = function () {

    };
  }
};

// _________CREATING TABLE_________

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

// _______Store Footer_________

// var renderFooterRow = function() {
//   var tableFooter = document.getElementById('tableFooter');
//   var footerRow = document.createElement ('tr');
//   tableFooter.appendChild(footerRow);
//   var footerTD = document.createElement ('td');
//   footerTD.textContent = 'Total';
//   footerRow.appendChild(footerTD);
var renderFooterRow = function() {
  var storesContainer = document.getElementById('storeTable');
  var tableFooter = document.createElement('tfoot');
  storesContainer.appendChild(tableFooter);
  var footerRow = document.createElement ('tr');
  tableFooter.appendChild(footerRow);
  var footerTD = document.createElement ('td');
  footerTD.textContent = 'Total';
  footerRow.appendChild(footerTD);


  for (var i = 0; i < storeHours.length; i++) {
    var allLocationCookiesPerHour = 0;
    for(var j = 0; j< store.length; j++){
      allLocationCookiesPerHour += store[j].cookiesSold[i];
    }
    footerTD = document.createElement ('td');
    footerTD.textContent = allLocationCookiesPerHour;
    footerRow.appendChild(footerTD);
  }
};

var renderAllStoreArray = function () {
  for(var i=0; i <store.length; i++ ) {
    store[i].renderStoreRow();
  }

};



// ____Creating Store Objects_____

var pikePlace = new StoreConstructor('1st and Pike', 23, 65, 6.3, [], 0);
var seaTac =  new StoreConstructor('SeaTac Airport', 3, 24, 1.2, [], 0);
var seattleCenter = new StoreConstructor('Seattle Center', 11, 38, 3.7, [], 0);
var capitolHill = new StoreConstructor('Capitol Hill', 20, 38, 2.3, [], 0);
var Alki = new StoreConstructor('Alki', 2, 16, 4.6, [], 0);


var callingAllFunctions = function() {
  createTableHours();
  renderAllStoreArray();
  renderFooterRow();

};
callingAllFunctions();


// ___________MAKING SALMON FORM___________________________

var HandlerStoreform = function(event){
  event.preventDefault();
  event.stopPropagation();
  var location = event.target.store_Name.value;
  var minCustomer = event.target.min_Customer.value;
  var maxCustomer = event.target.max_Customer.value;
  var avgSale = event.target.avg_Sale.value;
  var newStore = new StoreConstructor (location, parseInt(minCustomer), parseInt(maxCustomer), parseInt(avgSale));
  // _______Rendering New Store info to Form__________(stores dissappear when footer is above table,total dissapears either way)
  clearTable = function() {
    // document.getElementById('tableFooter').innerHTML = '';
    document.getElementById('storeTable').innerHTML = '';
  };
  newStore.cookiesAllDay();
  clearTable();
  callingAllFunctions();
//store.push(newStore);
};
console.log(store);

salmonForm.addEventListener('submit', HandlerStoreform);
