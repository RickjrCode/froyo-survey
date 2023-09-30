//declare and Object and populate with keys and values
const customer = {
  firstName: "Jake",
  lastName: "Smith",
  email: "jaekSmih!aol.com",
  phone: "undefined",
  zipCode: "631",
  favoriteFlavors: 32,
  cupSize: "medium",
  favoriteStore: "Target",
  firstVisit: false,
};
//create a new Object containing new values for keys and or propeties inside of the customer Object
const valueChanges = {
  email: "Jak3Smith1992@email.com",
  phone: 3195551234,
  zipCode: "63123",
  favoriteFlavors: "coffee, strawberry, matcha",
};
/*use a for...in loop to add new values into the object customer, update customer object
by having valueChanges and customer objects equal one another*/
for (const value in valueChanges) {
  if (valueChanges.hasOwnProperty(value)) {
    customer[value] = valueChanges[value];
  }
}
// delete zipCode and favoriteStore keys from the customer obect
delete customer.zipCode;
delete customer.favoriteStore;
// using dot notation, add three new keys and values to the object customer
customer.toppings = "chocolate sprinkles, wafer straws, gummy bears";
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;
// use the keys method to print out only the keys of the customer object
const keys = Object.keys(customer);
console.log(keys);
