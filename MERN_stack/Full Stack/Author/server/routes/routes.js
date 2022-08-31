const Controller = require('../controllers/controller');

module.exports = function(app){
    app.get ('/', Controller.allAuthors);
    app.get ('/:id', Controller.getAuthor);
    app.post ('/new', Controller.createAuthor);
    app.put ('/edit/:id', Controller.updateAuthor);
    app.delete ('/delete/:id', Controller.deleteAuthor);
}