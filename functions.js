function  logger() {
    console.log('my name is shAHID');
}
logger();
logger();
logger(); //my name is shahid*3
function fruitprocessor(apples,oranges) {
    console.log(apples,oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges`
    return juice;
}
let store = fruitprocessor(5,3);
console.log(store);
console.log(fruitprocessor(2,3)); //juice with 2 apples and 3 oranges
function calcage(birthyear) {
    return 2022 - birthyear;
}
console.log(calcage(2005)); //17


/// same 17


// const calcage2  =function (birthyear) {
//     return 2022 - birthyear;
// }
// let age = calcage2(2005)
// console.log(age);
// it works
// const func = clac(1);
// console.log(func);
// function clac(param) {
//     return 0;
// }
// // it show error
// const func2 = clac2(1);
// console.log(func);
// const clac2 = function (param) {
//     return 0;
// }