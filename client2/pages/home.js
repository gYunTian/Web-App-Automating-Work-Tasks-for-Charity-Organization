import Header from '../components/homepage/header/Header'
import SubHeader from '../components/homepage/header/SubHeader'
import Footer from '../components/front/Footer'
import Table from '../components/homepage/table/Table'

const name = 'Logo'

export default function Home() {
    return (
        <div className="flex flex-col h-screen">
            <Header/>
            
            <SubHeader/>
            
            <div className="flex-grow mb-14"> 
                <Table></Table>
            </div>
            
            <Footer/>
        </div>
    )
}