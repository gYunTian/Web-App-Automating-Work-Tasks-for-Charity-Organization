import Header from '../components/homepage/header/Header';
import SubHeader from '../components/homepage/header/SubHeader';
import Footer from '../components/front/Footer';
import Table from '../components/homepage/table/Table';
import withAuth from '../hocs/withAuth';
import { getName, getRole, useIsAuthenticated } from '../providers/Auth';

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
				<Table odata={data} />
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
	try {
		const response = await fetch(
			//"https://smucf-dev-ebs-g1t3-srv.cfapps.us10.hana.ondemand.com/api/Beneficiary"
			'https://smucf-dev-ebs-g1t3-srv.cfapps.us10.hana.ondemand.com/api/Beneficiary?$expand=regionID,Stocks'
		);
		var data = await response.json();
		data = data.value;
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
	let order = [
		'id',
		'house',
		'biscuit',
		'Egg',
		'vege',
		'rice',
		'canned',
		'beverage',
		'instant',
		'bread',
	];
	let today = new Date();
	today = today.getMonth() + '/' + today.getDate() + '/' + today.getFullYear();

	for (var i = 0; i < data.length; i++) {
		// if have stock
		if (data[i].Stocks.length != 0) {
			let innerData = {
				id: data[i].beneficiaryID,
				house: data[i].householdSize,
			};
			let ordered = {};
			for (var k = 0; k < data[i].Stocks.length; k++) {
				innerData[data[i].Stocks[k].stock_stockID] =
					data[i].Stocks[k].stockCount;
			}

			// ordering
			for (var k = 0; k < order.length; k++) {
				ordered[order[k]] =
					typeof innerData[order[k]] == 'undefined' ? 0 : innerData[order[k]];
			}
			stocks.data.push(ordered);
			data[i].delivery = today;
		}
		// console.log(data[i]);
	}

	console.log('Querying prediction api');
	let options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(stocks),
	};
	var prediction;

	try {
		// let prediction = await fetch("http://127.0.0.1:5000/api/predict", options);
		let prediction = await fetch(
			'https://g1t3-foodstock-quick-wallaby-xx.cfapps.us10.hana.ondemand.com/api/predict',
			options
		);
		prediction = await prediction.json();
		var map = new Map();
		for (var i = 0; i < prediction.length; i++) {
			map.set(prediction[i]['id'], prediction[i]['result']);
		}

		for (let i = 0; i < data.length; i++) {
			// if have stock
			if (data[i].Stocks.length != 0) {
				data[i].stock = map.get(data[i].beneficiaryID);
			}
			// console.log(data[i]);
		}
	} catch (error) {
		console.log('Error posting to prediction api');
		// console.log(error);
	}

	console.log('Sucessfully fetched data');
	return {
		props: {
			data,
		},
		revalidate: 3600,
	};
}
