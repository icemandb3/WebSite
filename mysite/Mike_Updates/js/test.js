//create a constructor


function orderObj() {
	this.item = item;
	this.qty = qty;
	this.price = price;
	this.skname = '';
	this.skday='';
	for (var n in arguments[0]) { this[n] = arguments[0][n]; }
}

function employee(name,jobtitle,born){
	this.name=name;
	this.jobtitle=jobtitle;
	this.born=born;
}


//create an empty object named curOrder using literal notation
//var curOrder() = new Object();
//var myCurOrder = {};

$(document).ready(function(){
	var fred=new employee("Fred Flintstone","Caveman",1970);
	employee.prototype.salary=null;
	fred.salary=20000;
	alert(fred.name + ", " + fred.jobtitle);
});