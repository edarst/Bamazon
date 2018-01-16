//Installed and required npm packages

var mysql = require("mysql");
var inquirer = require("Inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: '@@Widget1188',
	database: "bamazon"
});

//Create connection to database

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    showProducts();
  });

//Stores prompts for user interaction

var buyPrompt = {

	type: "input",
	message: "Enter the ID of the product you'd like to buy!",
	name: buy_prompt
};

var quantityPrompt = {

	type: "input",
	message: "How many units would you like to buy?",
	name: quantity_prompt
};

var startOverPrompt = {

	type: "list",
	message: "Make another purchase?",
	choices: ["No", "Yes"],
	name: start_over_prompt
};

  //Display items in store for user to select from on startup

  var showProducts = function() {

    connection.query("SELECT * FROM products", function(err, res){
		if (err) throw err;
		console.log("-------------------------------------------------");
		console.log("-------Select from the following products--------");
		console.log("-------------------------------------------------");

		for (i=0; i < res.length; i++) {
			console.log("Item number: " + res[i].item_id + " // Product Name: " + res[i].product_name + " // Price: " + "$" + res[i].price + " // Quantity Left: " + res[i].stock_quantity)
		}
		console.log("-------------------------------------------------");
		buyPrompt(res);
		})
}

//Asks user to buy a product

var buyProduct = 



}

//Asks the user if they'd like to buy something else or end the session

function buyAgain() {


}

//Update our Bamazon DB with the sale information 