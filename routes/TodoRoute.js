const {Router} = require('express');
const controller = require('../controllers/ToDoController')
const router = Router();

router.get('/', controller.getTodo)
router.post('/save', controller.saveTodo)
router.post('/update', controller.updateToDo)
router.post('/delete', controller.deleteToDo)

module.exports = router