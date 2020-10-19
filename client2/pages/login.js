import Header from '../components/Header'
import Footer from '../components/Footer'

const name = 'Logo'

export default function Login() {
    return (
        <div class="flex flex-col h-screen justify-between">
            <Header> 
            </Header>

            <div>
                <div className="container mx-auto">
                    <div class="lg:flex lg:justify-center">
                        <img src="/images/profile.png"alt={name} class="object-scale-down h-48"/>
                    </div>

                    <div className="lg:flex lg:justify-center">
                        <form className="lg:w-1/3 bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 mt-4">

                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Username
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                            </div>

                            <div class="mb-6">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                    Password
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                                <p class="text-red-500 text-xs italic hidden">Please choose a password.</p>
                            </div>

                            <div class="mb-6">
                                <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Sign In
                                </button>
                                <p class="lg:flex lg:justify-center font-bold text-sm text-blue-500 hover:text-blue-800 mt-5" href="#">Forgot Password?</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        
            <div class="flex justify-center border-t-2">
                <p class="text-center text-gray-500 text-xs mt-5 h-10">
                    &copy;2020 SMU EBS G1T3. All rights reserved.
                </p>
            </div>
        </div>
    )
}