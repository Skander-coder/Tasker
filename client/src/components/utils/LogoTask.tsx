

const LogoTask = ({ letter }: { letter: string }) => {
    return (
        <div className="p-6 bg-red-700 flex justify-center items-center text-center h-14 w-14 rounded-xl text-3xl">
            {letter}
        </div>
    )
}

export default LogoTask