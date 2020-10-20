import FormToggle from './FormToggle'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

class MainForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'showLogin': true
        };
        // this.loginClick = this.loginClick.bind(this)
        // this.registerClick = this.registerClick.bind(this)
    }

    viewRegister = showLogin => {
        this.setState({'showLogin': false})
    }   

    viewLogin = showLogin => {
        this.setState({'showLogin': true})
    }   

    render(props) {
        return (
            <form className="lg:w-1/3 bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 mt-4">
                <FormToggle viewRegister={this.viewRegister} viewLogin={this.viewLogin}/>
                { this.state.showLogin ? <LoginForm /> : null }
                { this.state.showLogin ? null : <RegisterForm /> }
            </form>
        )
    }
}export default MainForm;