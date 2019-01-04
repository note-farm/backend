module.exports = (app) => {
    const categories = require('../controllers/category.controller.js');

    // Create a new Note
    app.post('/categories', categories.create);

    // Retrieve all Categories
    app.get('/categories', categories.findAll);

    // Retrieve a single Note with categoryId
    app.get('/categories/:categoryId', categories.findOne);

    // Update a Note with categoryId
    app.put('/categories/:categoryId', categories.update);

    // Delete a Note with categoryId
    app.delete('/categories/:categoryId', categories.delete);
}