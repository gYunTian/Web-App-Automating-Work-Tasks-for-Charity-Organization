import Header from '../components/Header'
import Footer from '../components/Footer'

const name = 'Logo'

export default function Login() {
    return (
        <div>
            <Header> 
            </Header>

            <div>
                <img
                src="/images/logo.png"
                //className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                alt={name}
                />
            </div>

            <div>
                <div> 
                    <div>
                        <h3> Sign In </h3>
                        <form>
                            <input type="text"></input>
                            <input type="password"></input>
                            Remember me
                            Forgot Password?
                            <input type="submit" value="Sign in"></input>
                        </form>
                    </div>
                </div>
            </div>

            <Footer>
            </Footer>

        </div>
    )
}