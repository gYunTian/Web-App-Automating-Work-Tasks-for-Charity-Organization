import Link from 'next/link'
import { Home, BarChart, ListAlt, Fastfood, ImportExport, List, ArrowForward } from '@material-ui/icons';
import DropDownMenu from './DropDownMenu';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            openMenu: false,
        }
        this.onBlur = this.onBlur.bind(this);
    }

    onBlur = () => {
        this.setState({
            openMenu: false
        });
        console.log(this.state.openMenu);

    }

    render () {
        return (    
            <div className="bg-white">
            <div className="container mx-auto">
            <nav className="flex items-center p-3 flex-wrap">
                <span className="flex flex-row content-center border-r-1 border-gray-400">
                <img
                    src="images/logo2.png"
                    className="h-6 block mx-2"
                    alt="logo"
                />
                </span>
                <span className="mt-1 mx-2 flex flex-row text-l text-black font-bold tracking-wide"> EBS G1T3 </span>

                <div className="ml-auto">
                <button type="button"  onClick={() => this.setState({openMenu: !this.state.openMenu})}
                className="text-black font-bold font-size text-l items-center justify-center inline-flex px-3 py-2 rounded lg:hidden ml-auto outline-none nav-toggler mr-2 hover:bg-gray-900 hover:text-white focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150" id="options-menu" aria-haspopup="true" aria-expanded="true">
                    <i className="">Menu</i>
                </button>
                {this.state.openMenu && <DropDownMenu tabIndex="0" onBlur={ this.onBlur } data={['Home', 'Analytics', 'Plan Schedule', 'Diet', 'Import Data', 'List']}/>}
                </div>

                <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">    
                    
                    <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto mx-auto" >
                        <Link href="/home">
                        <a href="#" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white">
                            <Home className="py-1" /><span>Home</span>
                        </a>
                        </Link>
                        <Link href="/analytic">
                        <a href="#" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white" >
                            <BarChart className="py-1" /><span>Analytics</span>
                        </a>
                        </Link>
                        <a href="#" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white" >
                            <ListAlt className="py-1" /><span>Plan Schedule</span>
                        </a>
                        <a href="/diet" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white" >
                            <Fastfood className="py-1" /><span>Diet</span>
                        </a>
                        <a href="#" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white" >
                            <ImportExport className="py-1" /><span>Import Data</span>
                        </a>
                        <a href="#" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white" >
                            <List className="py-1"/><span>List</span>
                        </a>
                    </div>
                </div>


                <div>
                    <a href="#" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white" >
                        <ArrowForward className="py-1"/><span className=""> Logout </span>
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
