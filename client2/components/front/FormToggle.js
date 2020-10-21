
class FormToggle extends React.Component {
    constructor(props){
        super(props);

        this.state = {
           'border': ' border-l border-t border-r rounded-t '
        }

    }
    
    render(viewRegister, viewLogin) {
        
        return (
            <ul className="list-reset flex justify-center">
                        
                <li className="mb-5 mr-1 flex w-full" onClick={this.props.viewLogin}>
                    <span className="cursor-pointer text-center lex w-full bg-white inline-block py-2 px-4 text-blue-800 font-semibold border-l border-t border-r rounded-t">Log In</span>
                </li>
                
                <li className="mb-5 mr-1 flex w-full" onClick={this.props.viewRegister}>
                    <span className="cursor-pointer text-center lex w-full bg-white inline-block py-2 px-4 text-blue-600 hover:text-blue-800 font-semibold">Sign Up</span>
                </li>
                
            </ul>
        )
    }
}

export default FormToggle;