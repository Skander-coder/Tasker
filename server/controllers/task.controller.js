const Task = require("../models/Task.model");

const createTask = async (req, res, next) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}
const getAllTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}
const getTaskById = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}
const updateTaskById = async (req, res, next) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}
const deleteTaskById = async (req, res, next) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}
const getTasksByStatus = async (req, res, next) => {
    try {
        const tasks = await Task.find({ status: req.params.status });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message })

    }
}

const getTasksByDeadline = async (req, res, next) => {
    try {
        const tasks = await Task.find({ deadline: req.params.date });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message })

    }
}

const searchTasks = async (req, res, next) => {
    try {
        const keyword = req.params.keyword;
        const tasks = await Task.find({
            $or: [
                { title: { $regex: keyword, $options: 'i' } },
                { description: { $regex: keyword, $options: 'i' } },
            ],
        });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message })

    }
}

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTaskById,
    deleteTaskById,
    searchTasks,
    getTasksByDeadline,
    getTasksByStatus
}