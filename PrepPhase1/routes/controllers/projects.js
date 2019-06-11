const Project = require('../../models/project');
// Projects CRUD
// Creating
// Create a new Project
exports.createNewProject = async(req,res) =>{
    const body = req.body;
    const newProject = await new Project(body).save();
    res.json(newProject);
};

// Reading
// Find a project by it's ID
// /projects/:id
exports.findProjectById = async(req,res) => {
    const id = req.params.id;
    const projects = await Project.findById(id);
    res.json(projects);
};
// Find all projects
exports.findAllProjects = async(req, res) => {
    const projects = await Project.find();
    res.json(projects);
};
// Updating
// Update a project based on it's ID
exports.updateProjectById = async(req,res) =>{
    const body = req.body;
    const newProject = await new Project(body).save();
    res.json(projects);
};

// Deleting
// Delete a project based on it's ID
exports.deleteProjectById = async(req,res) => {
    const id = req.params.id;
    await Project.findByIdAndDelete(id);
    res.json({Delete:true});
}


