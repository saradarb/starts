//start from here

let candidates = [
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
}
