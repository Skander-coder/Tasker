import { useEffect, useState } from "react";
import TasksList from "../components/Tasks/TasksList"
import Filters from "../components/utils/Filters"
import Modal from "../components/utils/Modal";
import { addTask, deleteTask, editTask, getAllTasks } from "../apis/tasks";
import { Task } from "../interfaces/Task";
const HomePage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [tasks, setTasks] = useState<Task[]>([]);
    const getTasks = async () => {
        const respo = await getAllTasks();
        setTasks(respo.data);
    }
    const onDeleteTask = async (id: string) => {
        await deleteTask(id);
        getTasks();
    }
    const onAddTask = async (task: Task) => {
        await addTask(task);
        getTasks();
    }
    const onEditTask = async (task: Task) => {
        await editTask(task);
        getTasks();
    }
    useEffect(() => {
        getTasks();
    }, []);
    const handleSort = (dragTaskIndex: number, draggedOverTaskIndex: number) => {
        console.log(draggedOverTaskIndex);

        const taskClone = [...tasks];
        const temp = taskClone[dragTaskIndex];
        taskClone[dragTaskIndex] = taskClone[draggedOverTaskIndex];
        taskClone[draggedOverTaskIndex] = temp;
        setTasks(taskClone);
    };
    return (
        <div className="py-2 px-7">
            <div className="flex justify-between items-center py-2">
                <Filters />
                <div>
                    <button
                        className="btn-primary"
                        onClick={() => {
                            setModalOpen(true);
                        }}
                    >
                        Add Task
                    </button>
                </div>
            </div>
            <TasksList tasks={tasks} onDeleteTask={onDeleteTask} onEditTask={onEditTask} handleSort={handleSort} />
            {modalOpen && <Modal setOpenModal={setModalOpen} type="Add" onAddTask={onAddTask} />}

        </div>
    )
}

export default HomePage