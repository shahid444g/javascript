let age = prompt("enter your age");
Number.parseInt(age);
if (age <5) {
    console.log(typeof age); // this is returning a string type
}
else if(age >5 && age<50){
    console.log("you are a man");
}
else if (age >50 && age <100){
    console.log("you are old man");
}
else{
    console.log("you are not human");
}