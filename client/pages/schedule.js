import Header from '../components/homepage/header/Header';
import SubHeader from '../components/homepage/header/SubHeader';
import Footer from '../components/front/Footer';
import withAuth from '../hocs/withAuth';
import { getName, getRole, useIsAuthenticated, useAuth } from '../providers/Auth';
import Table from "../components/schedule/index"


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
			<Table />
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