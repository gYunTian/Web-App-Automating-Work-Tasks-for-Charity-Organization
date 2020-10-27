export default function SubHeader({name, role}) {

    return (
        <div className="max-w-7xl bg-gray-800 ">
            
            <div className="flex items-center h-10 mx-auto container">
                <span className="ml-auto text-l text-white float-right border-r-1 border-gray-400"> <p className="mx-4">Role: {role}</p> </span>
                <span className="mx-4 text-l text-white float-right"> <p className="">Welcome back, {name}</p> </span>

            </div>
        </div>
    )
}