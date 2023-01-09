'use strict';
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegatarian', 'Organic'],
    staterMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },

    // lấy giá trị của mảng trong object
    order: function (starterIndex, mainIndex) { // chỉ mục phần tử
        return [this.staterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    // Truyền các key vào trong function
    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) // Thực hiện hủy cấu trúc
    {// Ham
        console.log(`Order received! ${this.staterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1},${ing2},${ing3}`);
    }
};
// Truyền một đối tượng vào hàm OrderDelivery
restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
})

restaurant.orderDelivery({

    address: 'Via del Sole, 21',
    starterIndex: 1,
})
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Toan tu Spread
const newArr = [1, 2, ...arr];// lau tat ca cac gia tri trong mamg roi cho vao mang moi nhu cach viet mang thu cong
// output: newArr[1,2,7,8,9];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 array
const menu = [...restaurant.staterMenu, ...restaurant.mainMenu]
console.log(menu);

// Lặp lại: Mảng, Strings, maps ,sets . Not objects
// Iterables
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);
console.log(``);

const ingredients = [prompt("Let's make pasta! ingredient 1?"), prompt("Ingredient 2?"), prompt("Ingredient 3")];
console.log(ingredients)

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Object
const newRestaurant = {foundedInt: 1998, ...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name='RichardRison';
console.log(restaurantCopy.name);
console.log(restaurant.name);