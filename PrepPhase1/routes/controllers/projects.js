// Projects CRUD
// Creating
// Create a new Project
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema();

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
// Reading
// Find a project by it's ID
// Find all projects

// Updating
// Update a project based on it's ID

// Deleting
// Delete a project based on it's ID


