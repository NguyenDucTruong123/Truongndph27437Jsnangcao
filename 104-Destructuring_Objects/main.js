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

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const { name: restaurantName, openingHours: hours, categories: tags, } = restaurant
console.log(restaurantName, hours, tags);
// gia tri mac dinh
const { nmenu = [], staterMenu: starters = [] } = restaurant;
console.log(nmenu, starters)
// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
//Ghi de gia tri a va b , dung phep huy cau truc bang dau ngoac don
({ a, b } = obj);
console.log(a, b);
// Doi tuong long nhau
const { fri: { open, close } } = openingHours;
console.log(open, close);