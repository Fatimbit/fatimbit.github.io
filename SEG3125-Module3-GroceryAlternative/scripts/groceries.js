
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
	{
		name: "Broccoli",
		lactoseFree: true,
		nutFree: true,
		price: 1.99,
		organic: true

	},
	{
		name: "Chocolate",
		lactoseFree: false,
		nutFree: false,
		price: 2.25,
		organic: false
	},
	{
		name: "Bread",
		lactoseFree: true,
		nutFree: true,
		price: 2.35,
		organic: false
	},
	{
		name: "Pistachios",
		lactoseFree: true,
		nutFree: false,
		price: 4.99,
		organic: false
	},
	{
		name: "Orange juice",
		lactoseFree: true,
		nutFree: true,
		price: 5.99,
		organic: false
	},
	{
		name: "Peanuts",
		lactoseFree: true,
		nutFree: false,
		price: 7.15,
		organic: false
	},
	{
		name: "Apples",
		lactoseFree: true,
		nutFree: true,
		price: 7.99,
		organic: true
	},
	{
		name: "Eggs",
		lactoseFree: true,
		nutFree: true,
		price: 7.99,
		organic: false
	},
	{
		name: "Salmon",
		lactoseFree: true,
		nutFree: true,
		price: 10.25,
		organic: false
	},
	{
		name: "Milk",
		lactoseFree: false,
		nutFree: true,
		price: 12.99,
		organic: false
	}








];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactoseintolerant") && (prods[i].lactoseFree == true)){
			product_names.push(prods[i].name);

		}
		else if ((restriction == "nutallergy") && (prods[i].nutFree == true)){
			product_names.push(prods[i].name);

		}

		else if((restriction=="organic") && (prods[i].organic==true)){
			product_names.push(prods[i].name);
		}

		else if (restriction == "None"){
			product_names.push(prods[i].name);

		}
	}
	return product_names;
}

function restrictListProductsPrice(prods, restriction) {
	let product_prices= [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactoseintolerant") && (prods[i].lactoseFree == true)){
			product_prices.push(prods[i].price);
		}



		else if ((restriction == "nutallergy") && (prods[i].nutFree == true)){

			product_prices.push(prods[i].price);
		}


				else if((restriction=="organic") && (prods[i].organic==true)){
					product_prices.push(prods[i].price);
				}




		else if (restriction == "None"){

			product_prices.push(prods[i].price);
		}
	}
	return product_prices;
}












// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
