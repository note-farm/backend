module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    // Create a new Note
    app.post('/notes', notes.create)
    
    // Retrieve all Notes
    app.get('/notes', notes.findAll);

    // Update a Note with noteId
    app.put('/notes/update', notes.update);

    // Delete a Note with noteId
    app.delete('/notes/delete', notes.delete);
}