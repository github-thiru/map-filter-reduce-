// // Given an array of numbers, use the map() method to create a new array where each number is squared.
// const numbers = [1, 2, 3, 4, 5];
// // Expected Output: [1, 4, 9, 16, 25]

// const number=[1,2,3,4,5];
// function name(num){
//     return num**2;
// }
// square=number.map(name)
// console.log(square)

const names = ["alice", "bob", "charlie"];
// Expected Output: ["ALICE", "BOB", "CHARLIE"]
function name(word){
    return word.toUpperCase()
    
}
let upp=names.map(name)
console.log(upp)

// Given an array of objects representing products, use filter() to return an array of their price which are greater than 500


const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 700 }
];

function isPriceOver500(product) {
  return product.price > 500;
}

function getPrice(product) {
  return product.price;
}

const pricesOver500 = products.filter(isPriceOver500).map(getPrice);

console.log(pricesOver500);

// You have an array of objects representing purchases, each with a price and quantity. Use reduce() to calculate the total cost of all purchases.

const purchases = [
  { price: 10, quantity: 2 },
  { price: 5, quantity: 4 },
  { price: 8, quantity: 1 }
];

const total=purchases.reduce((accumulator,purchase)=>{
  return accumulator+purchase.price* purchase.quantity;   
},0);
console.log(total)
