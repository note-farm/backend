module.exports = (app) => {
    const categories = require('../controllers/category.controller.js');

    // Create a new Note
    app.post('/categories', categories.create);

    // Retrieve all Categories
    app.get('/categories', categories.findAll);

    // Update a Note with categoryName
    app.put('/categories/update', categories.update);

    // Delete a Note with categoryName
    app.delete('/categories/delete', categories.delete);
}