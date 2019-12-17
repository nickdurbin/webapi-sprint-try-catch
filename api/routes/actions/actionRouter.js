const express = require('express')
const Actions = require('../../../data/helpers/actionModel')
const { validateAction, validateActionId } = require('../../middleware/validate');
const router = express.Router({ mergeParams: true })

router.get("/", (req, res, next) => {
  try {
    const actions = await Actions.get()
    return res.status(200).json(actions)
  } catch(error) {
    next(error)
  }
})

router.get("/:id", validateActionId(), (req, res) => {
  try {
    return res.json(req.action)
  } catch (error) {
    next(error)
  }
})

router.post("/", validateActionId(), validateAction(), (req, res, next) => {
  try {
    const { id } = req.params
    const { description, notes } = req.body

    const newAction = await Actions.insert({ project_id: id, description, notes })
    return res.status(201).json(newAction)
  } catch(error) {
    next(error)
  }
})

router.put("/:id", validateActionId(), validateAction(), (req, res, next) => {
  try {
    const { id } = req.action
    const { description, notes } = req.body

    const updateAction = await Actions.update(id, { description, notes })
    return res.status(200).json(action)
  } catch(error) {
    next(error)
  }
})

router.delete("/:id", validateActionId(), (req, res, next) => {
  try {
    const removeAction = await Actions.remove(req.action.id)
    return res.status(200).json(action)
  } catch(error) {
    next(error)
  }
})

module.exports = router;