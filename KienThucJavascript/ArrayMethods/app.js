
// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let arr = [
//     { name: 'Duc', age: 21 },
//     { name: 'Nam', age: 21 },
//     { name: 'Manh', age: 24 },
//     { name: 'Hieu', age: 23 },
//     { name: 'CHo', age: 23 },
// ]
// //filter(lấy tất cả) , find(lặp tìm phần tử đầu tiên)
// let filter = arr.find((item, index) => {
//     // console.log('check filter :', item, 'inxex:', index)
//     return item && item.age === 21;
// });
// console.log(filter) 

//------map----------
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // for (let i = 0; i < arr.length; i++) {
// //     arr[i] = arr[i] * arr[i];

// // }

// let mapArr = arr.map((item, index) => {
//     // item = item * item;
//     // return item;
//     return (
//         `<td>${item} - ${index}</td>`
//     );
// })
// console.log('check arr :', arr)
// console.log('check mapArr :', mapArr)

//---------reduce----------

//---------sort------------
// const array1 = [1, 30, 4, 21, 100000];
// let arr = []
// array1.sort((a, b) => {
//     if (a > b) arr.push(a)
//     console.log(arr)
//     return a - b;
// });
// console.log(array1);

const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
];

// sort by value
items.sort((a, b) => a.value - b.value);
console.log(items)