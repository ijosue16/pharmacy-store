const AddComponent = ({ Add, Cancel, component }) => {
    return (

        <form  onSubmit={onsubmit} className="flex flex-col p-3 h-fit gap-y-2">
            <div className=" ">
                {component}</div>
            <div className=" self-end block sm:flex w-full justify-start sm:gap-2 items-center action-buttons">
                <button className="px-6 py-2 bg-amber-100 rounded-md" onClick={Add}>Submit</button>
                <button className="px-6 py-2 bg-blue-100 rounded-md" onClick={Cancel}>cancel</button>
            </div>
        </form>


    )
}
export default AddComponent;