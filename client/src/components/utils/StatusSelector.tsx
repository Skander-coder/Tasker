
const StatusSelector = ({ status, onUpdateStatus, task_id }) => {
    const statusStyles = {
        EN_COURS: { backgroundColor: 'yellow' },
        TODO: { backgroundColor: 'red' },
        DONE: { backgroundColor: 'green' },
    };

    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(task_id);

        onUpdateStatus(task_id, event.target.value);
    };
    return (
        <select name="status" id="status" style={statusStyles[status]} onChange={handleStatusChange} value={status} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40">
            <option value="EN_COURS">EN COURS</option>
            <option value="TODO">TODO</option>
            <option value="DONE">DONE</option>
        </select>
    )
}

export default StatusSelector