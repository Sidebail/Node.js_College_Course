// Projects CRUD
// Creating
// Create a new Project
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Sche({
    teacher: String,
    courseCode: String,
    title: String
});

const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    grade: {
        type: Number,
        min: 0,
        max: 100
    },
    class: classSchema
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
// Reading
// Find a project by it's ID
// Find all projects

// Updating
// Update a project based on it's ID

// Deleting
// Delete a project based on it's ID


