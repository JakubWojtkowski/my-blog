export default function Menu() {
    return (
        <ul className="flex-1 flex justify-center items-center gap-4 text-base">
            <li className="after:content-[''] after:absolute after:bg-light after:h-[3px] after:rounded-lg after:w-0 left-0 after:bottom-[-10px] hover:after:w-full after:transition-[500ms] cursor-pointer relative">
                all
            </li>
            <li className="after:content-[''] after:absolute after:bg-light after:h-[3px] after:rounded-lg after:w-0 left-0 after:bottom-[-10px] hover:after:w-full after:transition-[500ms] cursor-pointer relative">
                nutrition
            </li>
            <li className="after:content-[''] after:absolute after:bg-light after:h-[3px] after:rounded-lg after:w-0 left-0 after:bottom-[-10px] hover:after:w-full after:transition-[500ms] cursor-pointer relative">
                self-development
            </li>
            <li className="after:content-[''] after:absolute after:bg-light after:h-[3px] after:rounded-lg after:w-0 left-0 after:bottom-[-10px] hover:after:w-full after:transition-[500ms] cursor-pointer relative">
                mental health
            </li>
        </ul>
    )
}
