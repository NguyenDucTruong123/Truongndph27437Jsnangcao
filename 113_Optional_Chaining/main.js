'use strict';

const weekdays = ['mon','tue','wed','thu','fri','sat','sun'];
const openingHours= {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    // Cũng có thể làm cách này
    // [`day-${2+4}`]: {
    //     open: 0, // Open 24 hours
    //     close: 24,
    // },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    //ES6 enhanced object literals
    openingHours,


    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};
if (restaurant.openingHours &&  restaurant.openingHours.mon) {
    console.log(restaurant.openingHours.mon.open);
}
// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
// Example
const days = ['mon','tue','wed','thu','fri','sat','sun'];
for (const day of days) {
    console.log(day)
    // const open = restaurant.openingHours[day]?.open || 'closed'; // Nếu để || thì sẽ không nhận giá trị không và ghi là closed
    const open = restaurant.openingHours[day]?.open ?? 'closed'; // Nếu để || thì sẽ nhận giá trị không và ghi là 0 TOAN TU NULLISh
    console.log(`On ${day}, we open at ${open}`)
}

// METHODS Phương Thức
console.log(restaurant.order?.(0,1) ?? 'Mehtod does not exist');
console.log(restaurant.orderRisotto?.(0,1) ?? 'Methos dose not exist');

// arrays
const users = [{name: 'Jonas', email: 'hello@jonas.io'}];
// const users = [];
console.log(users[0]?.email ?? 'email user arrays empty')
if (users.length> 0) {
    console.log(users[0].name);
}else{
    console.log('user arrays empty');
}