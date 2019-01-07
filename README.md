# NoteFarm Backend

The NoteFarm backend is a RESTful API built using Express.js and MongoDB for keeping track of all your notes, because keeping track of notes shouldn't have to be complicated. For a simple frontend, with the backend included, see [the NoteFarm Offical Frontend](https://github.com/note-farm/frontend) package.

This API requires MongoDB to run, and it uses the default MongoDB port to run, so all you need to do is install MongoDB, start the service, and sit back and relax.

There are several different endpoints in this API, and they can all be found in the /app/routes folder.

## Notes

To get a list of all notes, send a GET request to `http://localhost:2672/notes`. A list of notes will be returned in JSON format.

To create a note, you can send a POST request to `http://localhost:2672/notes` with the following body params:

```json
    title: Note Name
    content: Note Content
    category: Note Category
```

This request should return the contents of the note that has just been created, along with `_id`, `_createdAt`, and `_updatedAt`

To delete a note, you send a DELETE request to `http://localhost:2672/notes/delete` and you only need to pass one paramater, the note name:

```json
    title: Name of the Note you want to Delete
```

To update a note, you send a PUT request to `http://localhost:2672/notes/update` with the following body params:

```json
    title: Title of the note you want to edit
    newTitle: New Title for the note
    content: New content for the note
    category: New category
```

## Categories

To get a list of all categories, send a GET request to `http://localhost:2672/categories`. A list of categories will be returned in JSON format.

To create a category, you can send a POST request to `http://localhost:2672/categories` with the following body params:

```json
    title: Category Name
    description: Category Description
```

This request should return the contents of the category that has just been created, along with `_id`, `_createdAt`, and `_updatedAt`

To delete a category, you send a DELETE request to `http://localhost:2672/categories/delete` and you only need to pass one paramater, the category name:

```json
    title: Name of the Category you want to Delete
```

To update a category, you send a PUT request to `http://localhost:2672/categories/update` with the following body params:

```json
    title: Title of the category you want to edit
    newTitle: New Title for the category
    description: New description
```