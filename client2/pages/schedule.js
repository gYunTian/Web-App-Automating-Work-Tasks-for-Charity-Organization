import Header from '../components/homepage/header/Header';
import SubHeader from '../components/homepage/header/SubHeader';
import Footer from '../components/front/Footer';
import Table from '../components/homepage/table/Table';
import withAuth from '../hocs/withAuth';
import { getName, getRole, useIsAuthenticated, useAuth } from '../providers/Auth';
import Title from '../components/schedule/Title'
import ScheduleForm from '../components/schedule/ScheduleForm'
import ScheduleList from '../components/schedule/ScheduleList'
import ScheduleListContextProvider from '../components/schedule/context/ScheduleListContext'


// use back with auth
export default withAuth(function Home({ data }) {
	console.log('one');
	
	const isAuthenticated = useIsAuthenticated();
	const name = getName();
	const role = getRole();

	return (
		<div className='flex flex-col h-screen'>
			<Header />
			<SubHeader name={name} role={role} />
			<div className='antialiased bg-gray-200 flex-grow' >

			<div className='container mx-auto px-4 sm:px-8 mt-18 flex-grow h-full'>
			<div className='py-8 flex-grow flex-col flex justify-center bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 mt-4 h-auto'>
				<ScheduleListContextProvider>
					<Title />
					<div className = "main">  
						<ScheduleForm />       
						<ScheduleList />

					</div>
				</ScheduleListContextProvider>
				</div>
				</div>

			</div>
 			<Footer />
 		</div>
	);
});

