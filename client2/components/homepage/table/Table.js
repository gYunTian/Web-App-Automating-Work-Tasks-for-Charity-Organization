import SearchFilter from './SearchFilter'
import NavTools from './NavTools'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

export default function Table({ data }) {
    return (
        <div className="antialiased font-sans bg-gray-200 flex-grow m-0 h-full">
            <div className="container mx-auto px-4 sm:px-8 flex-grow">
                <div className="py-8 flex-grow">
                    
                    <div>
                        <h2 className="text-2xl font-semibold leading-tight">Beneficiaries</h2>
                    </div>

                    <SearchFilter/>

                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <TableHeader/>
                                <TableBody data={ data }/>
                            </table>
                            
                            <NavTools/>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
