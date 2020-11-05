//https://github.com/SAPConversationalAI/Webchat

import Header from '../components/homepage/header/Header';
import SubHeader from '../components/homepage/header/SubHeader';
import Footer from '../components/front/Footer';
import Side from '../components/Admin/Side';
import withAuth from '../hocs/withAuth';
import { getName, getRole, useIsAuthenticated, useAuth } from '../providers/Auth';


// use back with auth
export default withAuth(function Admin({ userData, restockData, requestData }) {

	const isAuthenticated = useIsAuthenticated();
	const name = getName();
	const role = getRole();

	return (
		<div className='flex flex-col h-screen'>	

			<Header />

			<SubHeader name={name} role={role} />
			
			<div className='antialiased bg-gray-200 flex-grow'>
				<div className='container mx-auto px-4 sm:px-8 mt-18'>
          <div className='py-8 flex-grow flex-col flex justify-center bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 mt-4'>
            <Side userData={userData} restockData={restockData} requestData={requestData} />
          </div>
				</div>

			</div>

			<Footer />
		</div>
	);
});

export async function getStaticProps() {

  let userData = await fetchUserData();
  let restockData = await fetchRestockData();
  let requestData = await fetchRequestData();

	return {
		props: {
      userData,
      restockData,
      requestData,
		},
		revalidate: 3600,
	};

}


export async function fetchUserData() {
	try {
		const response = await fetch(
			'https://smucf-dev-ebs-g1t3-srv.cfapps.us10.hana.ondemand.com/api/User'
		);
		var data = await response.json();
		data = data.value;
	} catch (error) {
		let data = {};
		console.log('Error fetching odata');
	}
	return data;
}

export async function fetchRestockData() {
	try {
		const response = await fetch(
			"https://smucf-dev-ebs-g1t3-srv.cfapps.us10.hana.ondemand.com/api/ToReview?$filter=contains(status,%27restock%27)"
		);
		var data = await response.json();
		data = data.value;
	} catch (error) {
		let data = {};
		console.log('Error fetching odata');
	}
	return data;
}

export async function fetchRequestData() {
	try {
		const response = await fetch(
			"https://smucf-dev-ebs-g1t3-srv.cfapps.us10.hana.ondemand.com/api/ToReview?$filter=contains(status,%27request%27)"
		);
		var data = await response.json();
		data = data.value;
	} catch (error) {
		let data = {};
		console.log('Error fetching odata');
	}
	return data;
}