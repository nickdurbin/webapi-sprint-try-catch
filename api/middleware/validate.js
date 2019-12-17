const Actions = require('../../data/helpers/actionModel');
const Projects = require('../../data/helpers/projectModel')

async function validateProjectId(req, res, next) {
  const id = await Projects.get(req.params.id)
  if (id) {
    req.project = project;
    next();
  } else {
    res.status(404).json({ message: "Project not found" });
  }
  next()
};

async function validateProject(req, res, next) {
  if (!req.body) {
    return res.status(400).json({ message: "Please fill out the necessary inputs." });
  } else if (!req.body.name) {
    return res.status(400).json({ message: "Please fill out the name field." });
  } else if (!req.body.description) {
    return res.status(400).json({ message: "Please fill out the description field." });
  }
  next();
}

async function validateActionId(req, res, next) {
  const action = await Actions.get(req.params.id)
  if (action) {
    req.action = action;
    next();
  } else {
    res.status(404).json({ message: "Action not found" });
  }
  next()
}

async function validateAction(req, res, next) {
  if (!req.body) {
    return res.status(400).json({ message: "Please fill out the necessary inputs." });
  } else if (!req.body.description) {
    return res.status(400).json({ message: "Please fill out the description field." });
  } else if (!req.body.notes) {
    return res.status(400).json({ message: "Please fill out the notes field." });
  }
  next();
}

module.exports = {
  validateActionId, validateAction, validateProject, validateProjectId
}