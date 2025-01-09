console.log('hello world from javascript')

//key : value
let obj = {
    name: 'Duc',
    address: 'Hung Yen',
    email: '',
    gender: 'male',
    z: function () {
        console.log('hello world from inside function')
        return ''
    }
};


let a = {}
let b = 'Duc';
let c = ''
obj.name = 'Ali'
console.log('what is your name ?', `My name's : `, obj['name'], obj)
console.log('what is your name ?', `My name's : `, obj.name)
console.log(' What is your gender ?', `Gender : `, obj['gender'])
console.log('where are you from ?', `I'm from : `, obj.address)
console.log('call function :', obj.z())

console.log('type of a :', typeof a, ' , type of b :', typeof b)