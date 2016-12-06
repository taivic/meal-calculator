
var Dish = function (item, cost) {
	this.item = item;
	this.cost = cost;
}

var Diner = function(name) {
	this.name = name;
	this.dishes = [];
	this.reciept = [];
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

var Bill = function() {
	this.diners = [];
}

Bill.prototype.addDiner = function(diner){
	this.diners.push(diner);
}

Bill.prototype.listDiners = function() {
	return this.diners;
}

Bill.prototype.grandTotal = function() {}

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

Diner.prototype.checkout = function() {
	var dinerTotal = 
		this.total() + 
		this.tip(tipRate) + 
		this.tax(taxRate);
	this.reciept.push(dinerTotal)
}

marley.checkout();
honey.checkout();
vic.checkout();

Bill.prototype.totalBill = function() {
	var total = 0;
	for (var i = 0; i++; i < this.diners.length) {
		total += this.diners[i].reciept
	};
	return total
}

console.log(myBill);
/*console.log(marley.total());
console.log(marley.tip(tipRate).toFixed(2));
console.log(marley.tax(taxRate));*/
console.log("Marley's final total is: " + marley.reciept);
console.log("Honey's final total is: " + honey.reciept);
console.log("Vic's final total is: " + vic.reciept);
console.log("The final bill is " + myBill.totalBill() + " including tax and tip.")