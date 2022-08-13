// How do we know we need a loop here? when we want to do one thing several times. in our case we want giving the runner candy every time when he reaches 2 miles.
// What's the starting point of the loop? 2
// When should the loop stop? 6
// How will it know to stop? Assigning a number for the mile at which you stop giving candy to the runner, which is 6
// What's the incrementing for each iteration of the loop? 2
// What variables do we need? mile

let mile
for (mile=2 ; mile<6 ; mile+=2){
    console.log("Take a candy");
}


// Create a new loop where the runner only gets a piece of candy at every 2 miles 
// AND if they were going move than 5.5 miles per hour.

let MilePerHour= 7.2;

for(mile= 2 ; mile<6 ; mile +=2){
    if(MilePerHour > 5.5){
        console.log("Take a candy"); 
    }
}