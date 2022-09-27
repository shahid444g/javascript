let age = function (birthyear) {
    return 2022 - birthyear;
}
let retirementcalc = function (birthyear,firstname) {
    let age1 = age(birthyear);
    let retirement = 65 - age1;
   if (retirement>18) {
    console.log(`${firstname} will retire in ${retirement}`);
     return retirement;
    //  console.log(`${firstname} will retire in ${retirement}`);
   }
   else{
    console.log(`${firstname} is already retired` );
    return -1;
   // console.log(`${firstname} is already retired` ); // not printing because that is after the return
   }
}
console.log(retirementcalc(1950,'shahid'));