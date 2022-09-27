

let cutpieces = function (fruit) {
    return fruit*4;
}
function juice(apples,oranges) {
    let applepieces = cutpieces(apples);
    let orangepieces = cutpieces(oranges);
    let juicy = `the juice with ${applepieces} apples and ${orangepieces} oranegs`;
    return juicy;

}
console.log(juice(2,3));