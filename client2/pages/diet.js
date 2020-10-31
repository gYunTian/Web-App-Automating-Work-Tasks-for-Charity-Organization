import Header from '../components/homepage/header/Header';
import SubHeader from '../components/homepage/header/SubHeader';
import Footer from '../components/front/Footer';
import withAuth from '../hocs/withAuth';
import { getName, getRole, useIsAuthenticated } from '../providers/Auth';
import Basket from '../components/foodbasket/Basket';

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

			<div className='antialiased bg-gray-200 flex-grow'>
				<Basket data={data} />
			</div>

			<Footer />
		</div>
	);
});

// To-do: Cache request data
// https://stackoverflow.com/questions/62005208/api-caching-for-next-js
export async function getStaticProps() {
	// stop fetch is not authenticated
	// if (!useAuth.isAuthenticated) {
	//   console.log('not authenticated, stopped fetch, return empty payload')
	//   var data = {};
	//   return {
	//     props: {
	//       data,
	//     },
	//   };
	// }
	console.log('attempting to fetch data');

	//fetch odata
	const response = await fetch(
		'https://smucf-dev-ebs-g1t3-srv.cfapps.us10.hana.ondemand.com/api/Basket?$expand=stocks'
	);
	var data = await response.json();
	data = data.value;

	console.log('Sucessfully fetched data');
	console.log(data);
	return {
		props: {
			data,
		},
		revalidate: 3600,
	};
}
