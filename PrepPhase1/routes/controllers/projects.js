// Projects CRUD
// Creating
// Create a new Project
const Project = require('../../models/project');

// Reading
// Find a project by it's ID
// /projects/:id
const findProjectById = async(req,res) => {
    const id = req.params.id;
    const projects = await Project.findById(id);
    res.json(projects);
};
// Find all projects
const findAllProjects = async(req, res) => {
    const projects = await Project.find();
    res.json(projects);
};
// Updating
// Update a project based on it's ID

// Deleting
// Delete a project based on it's ID


