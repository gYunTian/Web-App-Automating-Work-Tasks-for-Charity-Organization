import Link from 'next/link'
import Router from 'next/router'

class RegisterForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            'url': 'http://localhost:5000/api/register',
            'email': null,
            'name': null,
            'password': null
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
        else if (id == 'name') {
            this.setState({
                'name': e.target.value
            });
        }
        else if (id == 'register-password') {
            this.setState({
                'password': e.target.value
            });
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state.email);
        console.log(this.state.name);
        console.log(this.state.password);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "email": this.state.email,
                "name" : this.state.name,
                "password": this.state.password
            })
        };

        const response = await fetch(this.state.url, requestOptions);
        const data = await response.json();

        if (response.ok) {
            console.log('prompt');
        }
        else {
            console.log(data.status);
        }

        // fetch(this.state.url, requestOptions)
        // .then(response => {
        //     return response.json();
        // })
        // .then(responseData => {
        //     console.log(responseData.status);
        // })
        // .catch(error => {
        //     console.log("error: ", error);
        // });

    }   

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input onChange={this.handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Name
                    </label>
                    <input onChange={this.handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input onChange={this.handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="register-password" type="password" placeholder="******************" autoComplete="off"/>
                    <p className="text-red-500 text-xs italic hidden">Please choose a password.</p>
                </div>

                <div className="mb-6">
                    <input className="cursor-pointer w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" id="signup" name="register" value="Register" />
                    <Link href="#"><a className="lg:flex lg:justify-center font-bold text-sm text-blue-500 hover:text-blue-800 mt-5" href="#">Forgot Password?</a></Link>
                </div>
            </form>
        )
    }
}
export default RegisterForm;