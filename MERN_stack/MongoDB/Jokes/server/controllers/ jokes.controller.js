const jokes = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
    jokes.find()
        .then(all => res.json({ jokes: all }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneJoke = (req, res) => {
    jokes.findOne({ _id: req.params.id })
        .then(oneJoke => res.json({ joke: oneJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findRandomJoke = (req, res) => {
    jokes.aggregate([ { $sample: { size: 1 } }] )
    .then(joke => res.json(joke))
    .catch(err => res.json(err))
}

module.exports.createNewJoke = (req, res) => {
    jokes.create(req.body)
        .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateJoke = (req, res) => {
    jokes.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedUser => res.json({ joke: updatedUser }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteJoke = (req, res) => {
    jokes.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
