
const Filters = () => {
    return (
        <div className="w-auto">
            <form className="flex  space-x-6" >
                <div className="flex items-center border border-gray-300 rounded-md p-1 px-2 min-w-96">
                    <div className="mr-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-5-5m2-5a8 8 0 10-16 0 8 8 0 0016 0z"></path>
                        </svg>
                    </div>
                    <input id="search" type="text" className="flex-grow border-none focus:outline-none" placeholder="Search..." />
                    <div className="ml-2 text-gray-500">| keyword</div>
                </div>
                <div className="flex items-center  border border-gray-300 rounded-md p-1 ">
                    <input id="deadline" type="date" className="mr-2 border-none focus:outline-none" />
                    <div className="mr-2">{'->'}</div>
                    <button className="ml-2 px-4 py-2 bg-gray-800 text-white rounded-md">Aujourd'hui</button>
                </div>
            </form>
        </div>
    )
}

export default Filters