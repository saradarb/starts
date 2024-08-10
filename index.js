//start from here

/* let candidates = [
    { name: "Firealem", age: 70},
    { name: "Abel", age: 46},
    { name: "Sara", age: 25},
    { name: "Heaven", age: 18},
];

for (let i=0; i<candidates.length; i++){
    if (candidates[i].age > 22) {
        console.log(`dear ${candidates[i].name} you are good`);

    } else if (candidates[i].age < 22){
        console.log(`dear ${candidates[i].name} you are too young`);

    } else if (candidates[i].age < 60){
        console.log(`dear ${candidates[i].name} you are too old`);

    }
} */

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (par - 3 == strokes ) {
    return names[0];
  } else if (strokes - par === 1) {
    return names[1]
  } else if (strokes - par === 1) {
    return names[2]
  } else if (strokes - par === 1) {
    return names[3]
  } else if (strokes - par === 1) {
    return names[4]
  } else if (strokes - par === 1) {
    return names[5]
  } else {
    return names[6]
  }
}
  // Only change code above this line


golfScore(4, 1);
console.log("im a girl")
