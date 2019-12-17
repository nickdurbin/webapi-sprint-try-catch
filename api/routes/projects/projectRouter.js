const express = require('express')
const Projects = require('../../../data/helpers/projectModel')
const Actions = require('../../../data/helpers/actionModel')
const { validateProject, validateProjectId, validateAction } = require('../../middleware/validate')
const router = express.Router({ mergeParams: true })

router.get("/", async (req, res, next) => {
  try {
    const project = await Projects.get()
    return res.status(200).json(project)
  } catch(error) {
    next(error)
  }
})

router.get("/:id", validateProjectId(), async (req, res) => {
  try {
    return res.json(req.project)
  } catch (error) {
    next(error)
  }
})

router.get("/:id/actions", validateProjectId(), validateProject(), async (req, res, next) => {
  try {
    const actions = await Actions.getProjectActions(req.project.id)
    return res.status(200).json(actions)
  } catch(error) {
    next(error)
  }
})

router.post("/", validateProject(), async (req, res, next) => {
  try {
    const { name, description } = req.body
    const newProject = await Projects.insert({ name, description })
    return res.status(201).json(newProject)
  } catch(error) {
    next(error)
  }
})

router.post("/:id/actions", validateProjectId(), validateAction(), async (req, res, next) => {
  try {
    const postAction = {
      project_id: req.project.id,
      description: req.body.description,
      notes: req.body.notes,
      completed: req.body.completed || false
    };
     const newAction = await Actions.insert(postAction)
     return res.status(201).json(newAction);
  } catch(error) {
      next(error);
    }
  }
);

router.put("/:id", validateProjectId(), validateProject(), async (req, res, next) => {
  try {
    const updateProject = Projects.update(req.project.id, req.body)
    return res.status(200).json(req.body)
  } catch(error) {
    next(error)
  }
})

router.delete("/:id", validateProjectId(), async (req, res, next) => {
  try {
    const removeProject = await Projects.remove(req.project.id)
    return res.status(200).json({ message: "Successfully deleted!"})
  } catch(error) {
    next(error)
  }
})

module.exports = router;