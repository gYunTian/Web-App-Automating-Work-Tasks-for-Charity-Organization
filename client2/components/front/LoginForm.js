import Router from 'next/router'
import Alert from "./alerts/Alert";
import { useAuth } from '../../providers/Auth';
import { useState } from 'react';

export default function LoginForm({setLoading, stopLoading}) {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(false);
    const [status, setStatus] = useState(null);
    // const [loading, setLoading] = useState(false);
    //const url = 'https://g1t3-node-auth-srv.cfapps.us10.hana.ondemand.com/api/login';
    const url = 'http://localhost:5000/api/login';
    const auth = useAuth();

    const closeAlert = (e) => {
        setError(false);
    }

    const handleChange = (e) => {
        let id = e.target.getAttribute('id'); 

        if (id == 'email') {
            setEmail(e.target.value);
        } 
        else if (id == 'login-password') {
            setPassword(e.target.value);
        };
    }

    const handleSubmit = async (e) => {
        setLoading();
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        };

        try {
            const response = await fetch(url, requestOptions);
            
            if (response.ok) {
                console.log("logged in");
                auth.setAuth(true);
                Router.push('/home')
            }
            else {
                // invalid params
                setError(true);
                setStatus('Wrong email or password!');
            }
        } catch (error) {
            setError(true);
            setStatus('Auth server might be down!');
        }
        stopLoading();
    }

    const wrapperFunction = async (e) => {
        handleSubmit(e);
    }

    return (
        <div>
            { error ? <Alert status={status} close={closeAlert}/> : null }
            <form onSubmit={wrapperFunction}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input required onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input required onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="login-password" type="password" placeholder="******************" autoComplete="off" />
                    <p className="text-red-500 text-xs italic hidden">Please choose a password.</p>
                </div>
                
                <div className="mb-6">
                <input className="cursor-pointer w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" id="login" name="login" value="Login" />
                    <p className="lg:flex lg:justify-center font-bold text-sm text-blue-500 hover:text-blue-800 mt-5" href="#">Forgot Password?</p>
                </div>
            </form>
        </div>
    )
}

// class LoginForm extends React.Component {
//     constructor(props){
//         super(props);

//         this.state = {
//             'url': 'http://localhost:5000/api/login',
//             'email': null,
//             'password': null,
//             'error': false,
//             'status': null,
//             'loading': false
//         };
        
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.setAuth = this.setAuth.bind(this);
//     }

//     closeAlert = (e) => {
//         this.setState({
//             'error': false
//         })
//     }
    
//     setAuth = (value) => {
//         setAuthenticated(value);
//     }

//     handleChange = (e) => {
//         let id = e.target.getAttribute('id'); 

//         if (id == 'email') {
//             this.setState({
//                 'email': e.target.value
//             });
//         } 
//         else if (id == 'login-password') {
//             this.setState({
//                 'password': e.target.value
//             });
//         };
//     }
    

//     handleSubmit = async (e) => {
//         e.preventDefault();

//         const requestOptions = {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             credentials: 'include',
//             body: JSON.stringify({
//                 "email": this.state.email,
//                 "password": this.state.password
//             })
//         };
        
//         try {
//             console.log("attempting to login");
//             const response = await fetch(this.state.url, requestOptions, {credentials: 'include'});
//             // const data = await response.json();
            
//             if (response.ok) {
//                 console.log(this.setAuth);
//                 this.setAuth(true);
//                 console.log('redirect');
//                 Router.push('/home')
//             } 
//             else {
//                 // invalid param
//                 console.log(data.status);
//                 this.setState({
//                     'error': true,
//                     'status': "Wrong email or password!"
//                 });
//             }
//         } catch (error) {
//             // server down
//             console.log("error: " +error);
//             this.setState({
//                 'error': true,
//                 'status': "Auth server might be down!"
//             });
//         }
//         this.props.stopLoading();
//     }   
    
//     wrapperFunction = async (e) => {
//         this.props.setLoading();
//         this.handleSubmit(e);
//     }

//     render (props) {
//         return (
//             <div>
//                 { this.state.error ? <Alert status={this.state.status} close={this.closeAlert}/> : null }
//             <form onSubmit={this.wrapperFunction}>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">
//                         Email
//                     </label>
//                     <input required onChange={this.handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
//                 </div>

//                 <div className="mb-6">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">
//                         Password
//                     </label>
//                     <input required onChange={this.handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="login-password" type="password" placeholder="******************" autoComplete="off" />
//                     <p className="text-red-500 text-xs italic hidden">Please choose a password.</p>
//                 </div>
                
//                 <div className="mb-6">
//                 <input className="cursor-pointer w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" id="login" name="login" value="Login" />
//                     <p className="lg:flex lg:justify-center font-bold text-sm text-blue-500 hover:text-blue-800 mt-5" href="#">Forgot Password?</p>
//                 </div>
//             </form>
//             </div>
//         )
//     }
// }
// export default LoginForm;