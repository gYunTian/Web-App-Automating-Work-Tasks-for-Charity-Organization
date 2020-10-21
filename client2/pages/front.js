import Header from '../components/front/Header'
import Footer from '../components/front/Footer'
import MainForm from '../components/front/MainForm'

const name = 'Logo'

export default function front() {
    return (
        
        <div className="flex flex-col h-screen justify-between">
            <div/>
            
            <div className="h-auto">
                <div className="container mx-auto">
                    <div className="lg:flex lg:justify-center">
                        <img src="/images/profile.png"alt={name} className="object-scale-down h-48"/>
                    </div>
                    
                    <div className="lg:flex lg:justify-center">
                        
                        <MainForm/>
                        
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}