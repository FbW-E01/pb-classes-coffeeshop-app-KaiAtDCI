class CoffeeShop {

	name;
	menu;
	orders;

	constructor (name, menu, orders) {
		this.name = name;
		this.menu = menu;
		this.orders = orders;
	}

	addOrder(itemName) {
		if (this.menu.find(item => item.name === itemName)) {
			this.orders.push(itemName);
			console.log(`${itemName} ordered.`)
		}
		else console.log(`${itemName} is currently unavailable!`);
	}

	fulfillOrder() {
		if (this.orders.length <= 0) {
			console.log('All orders have been fulfilled!');
		}
		else {
			console.log (`${this.orders.shift()} is ready now!`);
		}
	}

	listOrders() {
		console.log(this.orders);
	}

	dueAmount() {
		const orderedItems = this.orders.map(orderItemName => this.menu.find(item => item.name === orderItemName));
		const dueAmount = orderedItems.reduce((accu, item) => accu += item.price, 0);
		console.log(`Total amount due is: ${dueAmount}$`);
	}

	cheapestItem() {
		const cheapestItem = this.menu.reduce((accu, item) => item.price < accu.price ? item : accu);
		console.log(cheapestItem);
	}

	drinksOnly() {
		const drinksOnly = this.menu.filter(item => item.type === 'drink');
		console.log(drinksOnly);
	}

	foodOnly() {
		const foodOnly = this.menu.filter(item => item.type === 'food');
		console.log(foodOnly);
	}
}

const menuItems = [
	{ name: 'Coffee, white', type: 'drink', price: 2 },
	{ name: 'Pizza', type: 'food', price: 7 },
	{ name: 'Coffee, black', type: 'drink', price: 1 },
	{ name: 'Biscuit', type: 'food', price: 3 },
];

const coffeeShop = new CoffeeShop('The Coffee Shop', menuItems, []);

console.log('Drinks:');
coffeeShop.drinksOnly();
console.log('Food:');
coffeeShop.foodOnly();

console.log('Cheapest item:');
coffeeShop.cheapestItem();
coffeeShop.addOrder('Coffee, white');
coffeeShop.addOrder('Biscuit');
coffeeShop.addOrder('Coffee, black');
coffeeShop.addOrder('Tea');

console.log('Orders:')
coffeeShop.listOrders();
coffeeShop.dueAmount();
coffeeShop.fulfillOrder();
coffeeShop.fulfillOrder();
coffeeShop.fulfillOrder();
coffeeShop.fulfillOrder();
