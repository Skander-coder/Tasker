import StatusSelector from '../utils/StatusSelector'

const AddTaskCard = () => {
    return (
        <div className="border p-5 flex flex-col space-y-8">
            <div className="flex justify-between">

                <div className="flex items-center justify-around">
                    <input type="text" />
                </div>
                <div><span>X</span></div>
            </div>
            <div>
                <textarea name="description" id="desctipion" ></textarea>
            </div>
            <div>
                <div className="flex justify-between">
                    <StatusSelector />
                </div>
            </div>
        </div>
    )
}

export default AddTaskCard