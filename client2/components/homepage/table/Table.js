// import SearchFilter from "./SearchFilter";
// import NavTools from "./NavTools";
import { columns } from './Init';
import { useTable, useSortBy } from "react-table";
import React from "react";
import classnames from 'classnames';

//https://www.tailwindtoolbox.com/components/responsive-table
//https://stackoverflow.com/questions/60304981/where-to-put-component-did-mount-in-my-next-js-file

export default function Table({ odata }) {
  let data = odata;

  const Table = ({ columns, data }) => {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow
    } = useTable(
      {
        columns,
        data
      },
      useSortBy
    );
    
    return (
      <table {...getTableProps()} className="table-auto border-collapse w-full lg:table-cell">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())} className="text-center px-5 py-3 border-b-2 border-gray-200 bg-blue-200 text-left text-xs font-bold text-gray-800 uppercase lg:w-auto text-center border border-b block lg:table-cell relative lg:static lg:mb-10">
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      
      <tbody {...getTableBodyProps()}>
        
        {rows.map((row, i) => {
          let bg = 'bg-gray-100'
          if (i % 2 == 0) { bg = 'bg-gray-100' }
          else { bg = 'bg-white' }
          
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} id={i} className={classnames(bg, "hover:bg-gray-400 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0")}>
              {row.cells.map(cell => {
                return <td className="px-5 py-5 border w-full lg:w-auto text-center border border-b block lg:table-cell relative lg:static" {...cell.getCellProps()}>
                  <p className="text-center text-gray-900">
                    {cell.render("Cell")}
                  </p>  
                  </td>;
              })}
            </tr>
          );
        })}
      </tbody>
      </table>
    );
  };

  return (
    
    <div className="container mx-auto px-4 sm:px-8 mt-18">
      <div className="py-8 flex-grow flex-col flex justify-center bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 mt-4">

          <h2 className="text-2xl font-semibold leading-tigh text-center mb-4">
            Beneficiaries
          </h2>

        <Table columns={columns} data={odata} />

        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden"></div>
        </div>
      </div>
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
    "https://smucf-dev-ebs-g1t3-srv.cfapps.us10.hana.ondemand.com/api/Beneficiary?$expand=regionID,Stocks"
  );
  var data = await response.json();
  data = data.value;

  console.log("Sucessfully fetched data");
  return {
    props: {
      Odata,
    },
  };
}
