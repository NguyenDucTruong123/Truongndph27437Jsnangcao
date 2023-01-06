'use strict';
const restaurant = {
name : 'Classico Italiano',
location : 'Via Angelo Tavanti 23, Firenze, Italy',
categories : ['Italian', 'Pizzeria', 'Vegatarian', 'Organic'],
staterMenu: ['Focaccia','Bruschetta', 'Garlic','Bread', 'Caprese Salad'],
mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// lấy giá trị của mảng trong object
order: function(starterIndex,mainIndex){ // chỉ mục phần tử
    return [this.staterMenu[starterIndex], this.mainMenu[mainIndex]]
}
}

const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr;// Không phải mảng , chỉ làm chức năng tái cấu trúc
console.log(x,y,z)
console.log(arr);


let [first, ,second] = restaurant.categories;// first va second là phần tử trong mảng categories trong object restaurant nếu muốn bỏ một phần tử thì chỉ cần để trống chỗ phần tử đó là được
console.log(first,second);
// Ghi đè giá trị của biến first và second cần một biến trung gian là temp
// const temp = first;
// first = second;
// second = temp;
// console.log(first,second);

// cách chuyển đổi giá trị mà không cần một biến trung gian
[first ,second] =[second, first] ;
console.log(first ,second);
// Cách nhận lại hai giá trị từ một hàm
const [starter, mainCourse] = restaurant.order(4,0);
console.log(starter,mainCourse);
// Cấu trúc hủy lồng nhau
const mested = [2,4,[5,6,7,8]];
// const [i, ,j] = mested;
// console.log(i,j)
const [i, s, [j,k]] = mested;
console.log(i,s,j,k);
// chỉ các giá trị mặc định

//các phần tử trong mảng vẫn có giá trị mặc định là 1
const [p =1 , q=1 , r = 1]= [8,9];
console.log(p,q,r);
