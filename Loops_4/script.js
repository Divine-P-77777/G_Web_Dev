// for loop
// Use when you know how many times you want to loop.
for (let i = 0; i < 5; i++) {
    // console.log("Hello Jaanu 💖", i);
}


// while loop
// Use when you don’t know exact count, but need to loop until a condition is true.
let arr=[1,2,3,"ab","cd"];
let i = 0;
while (i <=  arr.length) { //equal-to se pura  chalta hai  
//   console.log("be positive 💘", i);
  i++;
}


// do...while loop
// 🔹 Runs at least once, even if the condition is false.
let j = 1;
do {
  console.log("Jaanu Alya forever 💞", j);
  j++;
} while (j <= 3);



// for...of loop
// 🔹 Loops through arrays or strings


let names = ["Deepak", "Ayush", "Ayera"];
for (let key of names) {
  console.log("Naam: ", key);
}



// for...in loop
// 🔹 Loops through object properties


let loveStory = {
  boy: "Deepak",
  girl: "Alya",
  years: 10
};

for (let key in loveStory) {
  console.log(key + ": " + loveStory[key]);  //loveStory[key] return value
}