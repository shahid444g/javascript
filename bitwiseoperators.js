// & | ~ these are same as logical and or and not ^ does 0 0 = 0; 1 0 =1; 0 1 = 1; 1 1 = 0;
// left shift << and right shift >>
let r;
r = 1&1;
console.log(`result is ${r}`); //1
 r = 1&0;
console.log(`result is ${r}`); //0
r = 1 &2;
console.log(`result is ${r}`); //01
//                                //10 ==2 divide
//                                //00 == 0
r = 9 &5;
console.log(`result is ${r}`); //1
r = 9 | 5;
console.log(`result is ${r}`); // 13 printed 13 is 1101 
r = 9^5; 
console.log(`result is ${r}`); // 12 printed binary is 1100
r = ~1;
console.log(`result is ${r}`);
console.log(12<<1); // 12 = 1100 ///24 = 11000
// console.log(`result is ${r}`);
console.log(12<<2); // 48 = 110000
console.log(12>>1); // 12 = 1100 // 6 = 110
// console.log(12>>3); // 1 = 0001