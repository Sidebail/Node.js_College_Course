var express = require('express');
var projects = require('./controllers/projects');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/** List all projects */
router.get("/projects", projects.findAllProjects);
/** List a specific project */
router.get('/projects/:id', projects.findProjectById);
/** Render create form (GET)*/

/** Handle Create form (POST)*/
router.post('/projects/new', projects.createNewProject);
/** Render edit form (GET) */

/** Handle edit form (POST) */
router.post('/projects/:id/edit', projects.updateProjectById);
/** Delete a project (GET) */
router.get('/projects/:id/delete', projects.deleteProjectById);
module.exports = router;
