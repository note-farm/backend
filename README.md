# NoteFarm Application

A Restful CRUD API for a Note-Taking application using Node.js, Express and MongoDB.

## Dependencies

Before running the server, you must have the following things installed on your machine:

- MongoDB
- NPM
---
## Setup

1. Install dependencies

```bash
npm install
npm install -g nodemon
```

2. Run Server

```bash
nodemon server.js
```

The API's are then available at http://localhost:2672

---

## Examples

### **Notes**

To get a list of all notes, hit `http://localhost:2672/notes` with a GET request, the list will be returned in JSON format.

To create a new note, you want to hit `http://localhost:2672/notes` with a POST request, and pass the following parameters in the body:

```json
title: "My Awesome note"
content: "The content for my awesome note"
category: "Category for my note, must exist"
```

To update a note, you want to hit `http://localhost:2672/notes/noteId`, where `noteId` is the ID of the note you want to update, with a PUT request, and pass the paramaters you want to change:

```json
title: "My altered Awesome Note"
content: "The updated content for my note"
category: "Category 2 for my note, must exist"
```

To delete a note, you want to hit `http://localhost:2672/notes/noteId` where `noteId` is equal to the ID of the note you want to delete. To get the ID of the note, run a get request at `http://localhost:2672/notes`

---
### **Categories**

To get a list of all categories, hit `http://localhost:2672/categories` with a GET request, you will get a list of all categories returned in JSON format.

To create a new category, you want to hit `http://localhost:2672/category` with a POST request, and pass the following parameters in the body:

```json
title: "Category 1"
description: "A description for your category"
```

To update a category, you want to hit `http://localhost:2672/category/categoryId`, where `categoryId` is equal to the category you want to change, with a PUT request, and pass the paramaters you want to change:

```json
title: "Category 1 - Altered"
description: "A new description for your category"
```

To delete a category, you want to hit `http://localhost:2672/categories/categoryId` where `categoryId` is equal to the ID of the note you want to delete. To get the ID of the category, run a get request at `http://localhost:2672/notes`