// input parameter(tham số)
// function sum(a, b) {
//     return a + b;
// }
// let c = sum(10, 20)
// console.log('sum a + b :', c)

// function Tong(x, y) {
//     console.log('1');
//     console.log('2');
//     console.log('3');
//     if (i === 5) return;
//     console.log('4');
//     console.log('5');
//     return x + y;
// }
// console.log('tổng là:', Tong(9, 8, 3))

// -------------arrow function-----------
//  sum = (a, b) => {
//     return a + b;
// }
// console.log('check sum :', sum(6, 9))

//---------function vs method => reuse (tái sử dụng )------------
//-------callback-------
let obj = {
    name: 'Duc',
    address: 'Ha Noi',
    getName: function () {
        return this.name;
    }
}

// console.log('>>> get Name obj :',obj.getName(),obj.address)

let sum = (a, b, callback) => {
    let tong = a + b;
    // setTimeout(() => {
    //     callback(tong);
    // }, 5000)
    let i = 0;
    let timer = setInterval(() => {//lặp vô hạn
        callback(tong);
        i++;
        if (i == 5) {//giới hạn lặp
            clearInterval(timer)
        }
    }, 1000);

}
let printSum = (message) => {
    console.log('>> check sum : 6+9 =', message)
}
sum(6, 9, printSum)