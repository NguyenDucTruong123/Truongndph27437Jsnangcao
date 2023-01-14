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
    },
     orderPizza: function(mainIngredient, ...otherIngredients){
        console.log(mainIngredient);
        console.log(otherIngredients);

     }
};

// bởi vì ở phía bên phải của
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
//Rest, because on LEFT side of =
// bởi vì ở phía bên trái của
const [a, b, ...orthers] = [1, 2, 3, 4, 5]
console.log(a, b, orthers);

const [pizza, , risotto, ...ortherFood] = [...restaurant.mainMenu, ...restaurant.staterMenu];
console.log(pizza, risotto, ortherFood);

// Object
const { sat, ...weekday } = restaurant.openingHours;
console.log(weekday);

// 2) functions
const add = function (...numbers) {
    // console.log(numbers)
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
}
    add(2, 3),
    add(5, 3, 7, 2),
    add(8, 2, 5, 3, 2, 1, 4);

const x = [23,5,7];
add(...x)    
restaurant.orderPizza('mushrooms','Onion','olives','spinach');
restaurant.orderPizza('mushrooms')
