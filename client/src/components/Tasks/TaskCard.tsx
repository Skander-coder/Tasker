import React, { useState } from "react"
import LogoTask from "../utils/LogoTask"
import StatusSelector from "../utils/StatusSelector"
import { Task } from '../../interfaces/Task';
import Modal from "../utils/Modal";
interface TaskCardProps {
    task: Task;
}
const TaskCard: React.FC<TaskCardProps> = ({ task, onDeleteTask, onEditTask }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleDelete = () => {
        onDeleteTask(task._id); // Assuming "_id" is the property containing the task ID
    };

    return (
        <div className="border p-5 flex flex-col space-y-8 rounded-xl shadow-2xl">
            <div className="flex justify-between">

                <div className="flex items-center justify-around">
                    <LogoTask letter={task.title[0]} />
                    <h2 className="text-2xl font-bold mx-2">{task.title}</h2>
                </div>
                <div onClick={handleDelete}><span>X</span></div>
            </div>
            <div>
                {task.description}
            </div>
            <div>
                <div className="flex justify-between">
                    <StatusSelector />
                    <button
                        className="btn-primary"
                        onClick={() => {
                            setModalOpen(true);
                        }}
                    >
                        Edit Task
                    </button>
                    {modalOpen && <Modal setOpenModal={setModalOpen} type="Edit" task={task} onEditTask={onEditTask} />}
                </div>
            </div>
        </div>
    )
}

// const getStatusColorClass = (status: TaskStatus) => {
//     switch (status) {
//         case TaskStatus.TODO:
//             return 'text-red-500'; 
//         case TaskStatus.EN_COURS:
//             return 'text-yellow-500'; 
//         case TaskStatus.DONE:
//             return 'text-green-500'; 
//         default:
//             return 'text-gray-700';
//     }
// };

export default TaskCard