import { Task, TaskStatus } from "../interfaces/Task";
import { api } from "./axios";

const API_TASKS = "/tasks";

export const getAllTasks = async () => {
    const response = await api.get(`${API_TASKS}`);
    return response;
}

export const addTask = async (task: Task) => {
    const { _id, ...taskWithoutID } = task;

    const response = await api.post(API_TASKS, taskWithoutID);
    return response;
}

export const editTask = async (task: Task) => {
    console.log(task);

    const response = await api.put(`${API_TASKS}/${task._id}`, task);
    return response;

}

export const deleteTask = async (id: string) => {
    const response = await api.delete(`${API_TASKS}/${id}`);
    return response;
}

export const getTaskById = async (id: string) => {
    const response = await api.get(`${API_TASKS}/${id}`);
    return response;
}

export const updateStatus = async (taskId: string, newStatus: TaskStatus) => {
    const response = await api.put(`${API_TASKS}/updateStatus`, { taskId, newStatus });
    return response
}

export const updateOrder = async (draggedTaskId: string, draggedOverTaskId: string) => {

    const response = await api.put(`${API_TASKS}/updateOrder`, { draggedTaskId, draggedOverTaskId });
    return response;
}
