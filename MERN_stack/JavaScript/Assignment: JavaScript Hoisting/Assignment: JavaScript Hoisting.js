

// GIVEN
console.log(example);
var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";


// 1
console.log(hello);                                 
var hello = 'world';
// var hello;
// console.log(hello);  // ->> undefined
// hello = "world";



// 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle;
// needle = 'haystack';
// test ()
// needle = "magnet";
// console.log(needle);  //->> magnet


// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// var brendan;
// brendan = 'super cool';
// console.log(brendan); // ->> super cool

// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food;
// food = 'chicken';
// console.log(food); // ->> chicken
// food = 'half-chicken';
// console.log(food); // ->> half-chicken
// food = 'gone';



// 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// mean(); //->> the mean is not function



// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// var genre;
// console.log(genre); //->> undefined
// genre = "disco";
// genre = "rock";
// console.log(genre); // ->> rock
// genre = "r&b";
// console.log(genre); // ->> r&b
// console.log(genre); // ->> disco

// 7 
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// var dojo;
// dojo = "san jose";
// console.log(dojo); //->> san jose
// dojo = "seattle";
// console.log(dojo); // ->> seattle
// dojo = "burbank";
// console.log(dojo); // ->> burbank
// console.log(dojo); // ->> san jose



// 8 - Bonus ES6: const**
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
