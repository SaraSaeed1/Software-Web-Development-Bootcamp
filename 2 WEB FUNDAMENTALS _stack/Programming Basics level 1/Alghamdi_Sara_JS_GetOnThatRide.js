//tha Variables:
var Name;
var Tall;
var Age;

if (Tall > 52){
    console.log ("Get on that ride, kiddo!");
}else {
    console.log ("Sorry kiddo. Maybe next year.");   
}

//Adjust the conditional statement to require both height and age. 
if (Tall > 52 & Age > 10){
    console.log ("Get on that ride, kiddo!");
}else {
    console.log ("Sorry kiddo. Maybe next year.");
}

//Adjust the conditional statement to require either height requirement or age requirement must be met. 
if (Tall > 52 || Age > 10){
    console.log ("Get on that ride, kiddo!");
}else {
    console.log ("Sorry kiddo. Maybe next year.");
}