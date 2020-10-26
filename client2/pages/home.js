//https://dashboard.fauna.com/?first_session=true

import Header from "../components/homepage/header/Header";
import SubHeader from "../components/homepage/header/SubHeader";
import Footer from "../components/front/Footer";
import Table from "../components/homepage/table/Table";
import withAuth from "../hocs/withAuth";
import { useAuth } from "../providers/Auth";
import LoadingOverlay from 'react-loading-overlay';

// use back with auth
export default function Home({ data }) {
  
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <SubHeader />
      
      <div className="antialiased bg-gray-200 flex-grow">
          <Table odata={data} />
      </div>
    
      <Footer />
    </div>
  );
}

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
  console.log("attempting to fetch data");
  
  //fetch odata
  const response = await fetch(
    //"https://smucf-dev-ebs-g1t3-srv.cfapps.us10.hana.ondemand.com/api/Beneficiary"
    "https://smucf-dev-ebs-g1t3-srv.cfapps.us10.hana.ondemand.com/api/Beneficiary?$expand=regionID,Stocks"
  );
  var data = await response.json();
  data = data.value;

  console.log("Sucessfully fetched data");
  return {
    props: {
      data,
    },
  };
}
