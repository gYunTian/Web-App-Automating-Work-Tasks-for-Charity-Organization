<<<<<<< HEAD

import Header from '../components/homepage/header/Header';
import SubHeader from '../components/homepage/header/SubHeader';
import Footer from '../components/front/Footer';
import withAuth from '../hocs/withAuth';
import { getName, getRole, useIsAuthenticated, useAuth } from '../providers/Auth';
import Table from "../components/schedule/index"

=======
import Footer from '../components/front/Footer';
import Header from '../components/homepage/header/Header';
import SubHeader from '../components/homepage/header/SubHeader';
import ScheduleListContextProvider from '../components/schedule/context/ScheduleListContext';
import ScheduleForm from '../components/schedule/ScheduleForm';
import ScheduleList from '../components/schedule/ScheduleList';
import Title from '../components/schedule/Title';
import withAuth from '../hocs/withAuth';
import { getName, getRole, useIsAuthenticated } from '../providers/Auth';
>>>>>>> baef070d943c761b93c37347191b7ef816358fe6

// use back with auth
export default withAuth(function Home({ data }) {
	console.log('one');
	
	const isAuthenticated = useIsAuthenticated();
	const name = getName();
	const role = getRole();

	return (
		<div className='flex flex-col h-screen'>
			<Header name={name} role={role} />
			<SubHeader name={name} role={role} />
<<<<<<< HEAD
			<Table />
=======
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
>>>>>>> baef070d943c761b93c37347191b7ef816358fe6
 			<Footer />
 		</div>
	);
});

export async function getStaticProps() {

	console.log('attempting to fetch data');
	//fetch odata
	try {
		const response = await fetch(
			'https://smucf-dev-ebs-g1t3-srv.cfapps.us10.hana.ondemand.com/api/Schedule'
		);
		var data = await response.json();
		data = data.value;
		console.log(data);
	} catch (error) {
		let data = {};
		console.log('Error fetching odata');
		return {
			props: {
				data,
			},
			revalidate: 3600,
		};
	}

	// final object for prediction
	let stocks = {
		data: [],
	};

	return {
		props: {
			data,
		},
		revalidate: 3600,
	};
}