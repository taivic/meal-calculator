
var Dish = function (item, cost) {
	this.item = item;
	this.cost = cost;
}

var Diner = function(name) {
	this.name = name;
	this.dishes = [];
	this.reciept = 0;
}

Diner.prototype.total = function() {  
	var total = 0;
	for (var i = 0; i < this.dishes.length; i++) {
		total += this.dishes[i].cost;
	}
	return total;
}

var taxRate = 0.08;
var tipRate = 0.20;

Diner.prototype.tax = function(taxRate) {
	return this.total() * taxRate;
}

Diner.prototype.tip = function(tipRate) {
	return this.total() * tipRate;
}

Diner.prototype.addDish = function(dish) {
	this.dishes.push(dish);
}

Diner.prototype.checkout = function() {
	var dinerTotal = 
		this.total() + 
		this.tip(tipRate) + 
		this.tax(taxRate);
	this.reciept = dinerTotal;
}

var Bill = function() {
	this.diners = [];
}

Bill.prototype.addDiner = function(diner){
	this.diners.push(diner);
}

var myBill = new Bill(); 

var marley = new Diner("Marley");
myBill.addDiner(marley);
var honey = new Diner("Honey");
myBill.addDiner(honey);
var vic = new Diner("Vic");
myBill.addDiner(vic);

var myDish = new Dish("Chicken", 3);
marley.addDish(myDish);
var myDish = new Dish("Pork", 3);
marley.addDish(myDish);
var myDish = new Dish("Fish", 4);
honey.addDish(myDish);
var myDish = new Dish("Beef", 4);
honey.addDish(myDish);
var myDish = new Dish("Shrimp", 5);
vic.addDish(myDish);
var myDish = new Dish("Beans", 2);
vic.addDish(myDish);

marley.checkout();
honey.checkout();
vic.checkout();

Bill.prototype.totalBill = function() {
	var total = 0;
	for (var i = 0; i < this.diners.length; i++) {
		total += this.diners[i].reciept
	};
	return total
}

console.log("Marley's final total is: " + marley.reciept);
console.log("Honey's final total is: " + honey.reciept);
console.log("Vic's final total is: " + vic.reciept);
console.log("The final bill is " + myBill.totalBill().toFixed(2) + " including tax and tip.")