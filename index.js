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
		if (this.menu.find(item => item.name === itemName)) this.orders.push(itemName);
		else console.log(`${itemName} is currently unavailable!`);
	}

	fulfillOrder(itemName) {
		if (this.orders.length === 0) {
			return ('All orders have been fulfilled!');
		}
		return 'Following items are ready now:' + this.orders;
	}

	listOrders() {
		return this.orders;
	}

	dueAmount() {
		const orderedItems = this.orders.map(orderItemName => this.menu.find(item => item.name === orderItemName));
		return orderedItems.reduce((accu, item) => accu += item.price, 0);
	}

	cheapestItem() {
		return this.menu.reduce((accu, item) => item.price < accu.price ? item : accu);
	}

	drinksOnly() {
		return this.menu.filter(item => item.type === 'drink');
	}

	foodOnly() {
		return this.menu.filter(item => item.type === 'food');
	}
}

const menuItems = [
	{ name: 'Coffee, white', type: 'drink', price: 2 },
	{ name: 'Coffee, black', type: 'drink', price: 1 },
	{ name: 'Biscuit', type: 'food', price: 3 },
];

const coffeeShop = new CoffeeShop('The Coffee Shop', menuItems, []);
console.log(coffeeShop.drinksOnly());
console.log(coffeeShop.foodOnly());
console.log(coffeeShop.cheapestItem());
coffeeShop.addOrder('Coffee, white');
coffeeShop.addOrder('Biscuit');
coffeeShop.addOrder('Coffee, black');
coffeeShop.addOrder('Tea');
console.log(coffeeShop.listOrders());
console.log(coffeeShop.dueAmount());
console.log(coffeeShop.fulfillOrder());