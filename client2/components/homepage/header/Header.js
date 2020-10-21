
class Header extends React.Component {
    render () {
        return (    
            <div className="bg-gray-200">
            <div className="container mx-auto">
            <nav className="flex items-center p-3 flex-wrap">
                
                <span className="text-xl text-black font-bold uppercase tracking-wide"> EBS G1T3 </span>
                
                <button className="text-black font-bold inline-flex p-3 rounded lg:hidden ml-auto hover:text-gray outline-none nav-toggler mr-2" data-target="#navigation">
                    <i className="material-icons">Menu</i>
                </button>
                
                <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">    
                    
                    <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto mx-auto" >
                        <a href="#" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white">
                            <span>Home</span>
                        </a>
                        <a href="#" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white" >
                            <span>Analytics</span>
                        </a>
                        <a href="#" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white" >
                            <span>Plan Schedule</span>
                        </a>
                        <a href="#" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white" >
                            <span>Diet</span>
                        </a>
                        <a href="#" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white" >
                            <span>Import Data</span>
                        </a>
                        <a href="#" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white" >
                            <span>List</span>
                        </a>
                    </div>
                </div>


                    <div>
                        <a href="#" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white" >
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
