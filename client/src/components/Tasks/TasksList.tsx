import TaskCard from "./TaskCard";
// import { Task } from "../../interfaces/Task";
import { Task } from "../../interfaces/Task";

const TasksList = ({ tasks, onDeleteTask, onEditTask }: { tasks: Task[] }) => {

    return (
        <div className="flex flex-wrap py-2 ">
            {tasks.map((task: Task) => (
                <div key={task._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 mb-4">
                    <TaskCard key={task._id} task={task} onDeleteTask={onDeleteTask} onEditTask={onEditTask} />
                </div>

            ))}

            {/* <AddTaskCard /> */}

        </div>
    )
}

export default TasksList