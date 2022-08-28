const mongoose = require('mongoose');
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, 'Setup is required!'],
        minlength: [10, 'Setup is atleast 10 characters']
        },
    punchline:{
        type: String,
        required: [true, 'Punchline is required!'],
        minlength: [3, 'Punchline is atleast 3 characters']
    } 
} , {timestamps: true});

const jokes = mongoose.model("jokes", JokeSchema);
module.exports = jokes;