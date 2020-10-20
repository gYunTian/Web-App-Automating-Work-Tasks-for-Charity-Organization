import Header from '../components/homepage/header/Header'
import SubHeader from '../components/homepage/header/SubHeader'
import Footer from '../components/portal/Footer'
import Table from '../components/homepage/table/Table'

const name = 'Logo'

export default function Login() {
    return (
        <div class="flex flex-col h-screen">
            <Header/>
            
            <SubHeader/>

            <div className="flex-grow mb-14"> 
                <Table/>
            </div>
            
            <Footer/>
        </div>
    )
}