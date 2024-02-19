const express = require('express');
const router = express.Router();

const List = require('../models/list');

router.get('/api/admin/todos', async (req, res) => {
    const todos = await List.find();
    res.json(todos);
});

router.post('/api/admin/todos', async (req, res) => {
    const todo = new List({text: req.body.text});
    await todo.save();
    res.json(todo);
});

router.delete('/api/admin/todos/:id', async (req, res) => {
    await List.findByIdAndRemove(req.params.id);
    res.json({message: 'Deleted todo'});    
});

module.exports = router;
