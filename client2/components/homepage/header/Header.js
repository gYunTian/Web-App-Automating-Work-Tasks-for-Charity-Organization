import Link from 'next/link'

class Header extends React.Component {
    render () {
        return (    
            <div className="bg-white">
            <div className="container mx-auto">
            <nav className="flex items-center p-3 flex-wrap">
                <span className="flex flex-row content-center border-r-1 border-gray-400">
                <img
                    src="images/logo.png"
                    className="h-6 block mx-2"
                    alt="logo"
                />
                </span>
                <span className="mt-1 mx-2 flex flex-row text-l text-black font-bold tracking-wide"> EBS G1T3 </span>

                <button type="button" className="text-black font-bold font-size text-l items-center justify-center inline-flex px-3 py-2 rounded lg:hidden ml-auto outline-none nav-toggler mr-2 hover:bg-gray-900 hover:text-white focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150" id="options-menu" aria-haspopup="true" aria-expanded="true">
                    <i className="">Menu</i>
                </button>
                <div className="hidden origin-top-right absolute right-0 top-0 mt-12 w-56 rounded-md shadow-lg bg-gray-200">
                <div className="">
                <div className="" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a href="#" className="flex block w-full text-left px-4 py-2 text-sm leading-5 text-black font-bold text-center hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Home </a>
                    <a href="#" className="flex block w-full text-left px-4 py-2 text-sm leading-5 text-black font-bold text-center hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Analytics </a>
                    <a href="#" className="flex block w-full text-left px-4 py-2 text-sm leading-5 text-black font-bold text-center hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Plan Schedule </a>
                    <a href="#" className="flex block w-full text-left px-4 py-2 text-sm leading-5 text-black font-bold text-center hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Diet </a>
                    <a href="#" className="flex block w-full text-left px-4 py-2 text-sm leading-5 text-black font-bold text-center hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Import data </a>
                    <a href="#" className="flex block w-full text-left px-4 py-2 text-sm leading-5 text-black font-bold text-center hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">List </a>

                </div>
                </div>
                </div>
                
                <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">    
                    
                    <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto mx-auto" >
                        <Link href="/home">
                        <a href="#" className="mx-2 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white">
                            <span>Home</span>
                        </a>
                        </Link>
                        <Link href="/analytic">
                        <a href="#" className="mx-2 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white" >
                            <span>Analytics</span>
                        </a>
                        </Link>
                        <a href="#" className="mx-2 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white" >
                            <span>Plan Schedule</span>
                        </a>
                        <a href="#" className="mx-2 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white" >
                            <span>Diet</span>
                        </a>
                        <a href="#" className="mx-2 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white" >
                            <span>Import Data</span>
                        </a>
                        <a href="#" className="mx-2 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white" >
                            <span>List</span>
                        </a>
                    </div>
                </div>


                <div>
                    <a href="#" className="mx-2 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white" >
                        <span className=""> Logout </span>
                    </a>
                </div>
            
            </nav>
            </div>
            </div>


            


            // {/* <div classNameName="logo" ><a href="#" classNameName="logo-text"> TESTVV </a></div> */}
        
            // {/* <NavContainer /> */}
        );
    }
}

export default Header;
