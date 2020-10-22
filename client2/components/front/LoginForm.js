import Router from 'next/router'

class LoginForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            'url': 'http://localhost:5000/api/login',
            'email': null,
            'password': null,
            'error': null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        let id = e.target.getAttribute('id'); 

        if (id == 'email') {
            this.setState({
                'email': e.target.value
            });
        } 
        else if (id == 'login-password') {
            this.setState({
                'password': e.target.value
            });
        };
    }
    
    handleSubmit = async (e) => {

        e.preventDefault();

        console.log(this.state.email);
        console.log(this.state.password);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "email": this.state.email,
                "password": this.state.password
            })
        };
        
        const response = await fetch(this.state.url, requestOptions);
        const data = await response.json();

        if (response.ok) {
            console.log('redirect');
            let name = data.name;
            Router.push('/home')

        } 
        else {
            console.log(data.status);
            this.setState({
                'error': data.status
            });
        }
        
    }   
    
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input onChange={this.handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input onChange={this.handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="login-password" type="password" placeholder="******************" autoComplete="off" />
                    <p className="text-red-500 text-xs italic hidden">Please choose a password.</p>
                </div>
                
                <div className="mb-6">
                <input className="cursor-pointer w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" id="login" name="login" value="Login" />
                    <p className="lg:flex lg:justify-center font-bold text-sm text-blue-500 hover:text-blue-800 mt-5" href="#">Forgot Password?</p>
                </div>
            </form>
        )
    }
}
export default LoginForm;