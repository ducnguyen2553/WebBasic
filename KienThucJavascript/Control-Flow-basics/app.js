// // ----for loop : vòng lặp for
// let arr = ['Liver', 'MC', 'MU', 'Chelsea']
// for (let i = 0; i < arr.length; i++) {
//     console.log('For : ', i + 1, arr[i])
// }

// // -----while
// let a = 0
// while (a < arr.length) {
//     console.log('while :', a + 1, arr[a])
//     a++;
// }

// //do while
// let b = 0
// do {
//     console.log('do while :', b  + 1, arr[b]);
//     b++;
// } while (b < 4)  

// ---------if /else
// let arrTop4 = ['Liver', 'Chelsea', 'MU', 'Man City']
// let i = 0;

// while (i < arrTop4.length) {
//     i++;
//     //if else condition(điều kiện)
//     // if (arrTop4[i].length === 2) {
//     //     console.log('Top :', i + 1, arrTop4[i])
//     // }else if(arrTop4[i].length === 5){
//     //     console.log('Top :', i + 1, arrTop4[i])
//     // }else{

//     // }
//     if (arrTop4[i] === 'Chelsea') {
//         console.log('Found it:', arrTop4[i])
//         continue;
//     }
//     console.log('>>> check i:', i)

// }

//------switch
let day = '';
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
// console.log('check day :', day, new Date().getDay())

//-----global / block
for (let i = 0; i < 10; i++) {
    console.log('>>check i :', i)
}