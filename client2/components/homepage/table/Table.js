import SearchFilter from './SearchFilter'
import NavTools from './NavTools'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

export default function Table() {
    return (
        <body class="antialiased font-sans bg-gray-200 flex-grow m-0 h-full">
            <div class="container mx-auto px-4 sm:px-8 flex-grow">
                <div class="py-8 flex-grow">
                    
                    <div>
                        <h2 class="text-2xl font-semibold leading-tight">Beneficiaries</h2>
                    </div>

                    <SearchFilter/>

                    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table class="min-w-full leading-normal">
                                <TableHeader/>
                                <TableBody/>
                            </table>
                            
                            <NavTools/>
                        </div>
                    </div>


                </div>
            </div>
        </body>
    )
}
