import SearchFilter from "./SearchFilter";
import NavTools from "./NavTools";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import React from "react";
import { useTable } from "react-table";

//https://www.tailwindtoolbox.com/components/responsive-table
//https://stackoverflow.com/questions/60304981/where-to-put-component-did-mount-in-my-next-js-file

export default function Table({ Odata }) {

  const Table = ({ columns, data }) => {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({
      columns,
      data,
    });

    return (
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
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
      
        <Table columns={columns} data={data} />

        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden"></div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="container mx-auto px-4 sm:px-8 flex-grow">
  //     <div className="py-8 flex-grow">
  //       <div>
  //         <h2 className="text-2xl font-semibold leading-tight">
  //           Beneficiaries
  //         </h2>
  //       </div>

  //       {/* <SearchFilter /> */}

  //       <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
  //         <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
  //           {/* <table className="min-w-full leading-normal">
  //               <TableHeader />
  //               <TableBody data={data} />
  //             </table> */}
  //           <table id="example" className="stripe hover w-full pt-4 pb-4">
  //             <thead>
  //               <tr>
  //                 <th data-priority="1">Name</th>
  //                 <th data-priority="2">Position</th>
  //                 <th data-priority="3">Office</th>
  //                 <th data-priority="4">Age</th>
  //                 <th data-priority="5">Start date</th>
  //                 <th data-priority="6">Salary</th>
  //               </tr>
  //             </thead>
  //             <tbody>
  //               <tr>
  //                 <td>Tiger Nixon</td>
  //                 <td>System Architect</td>
  //                 <td>Edinburgh</td>
  //                 <td>61</td>
  //                 <td>2011/04/25</td>
  //                 <td>$320,800</td>
  //               </tr>
  //               <tr>
  //                 <td>Donna Snider</td>
  //                 <td>Customer Support</td>
  //                 <td>New York</td>
  //                 <td>27</td>
  //                 <td>2011/01/25</td>
  //                 <td>$112,000</td>
  //               </tr>
  //             </tbody>
  //           </table>
  //           {/* <NavTools /> */}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

const columns = [
  {
    Header: "Region",
    accessor: "region",
  },
  {
    Header: "Street",
    accessor: "street",
  },
  {
    Header: "Blk No",
    accessor: "blk",
  },
  {
    Header: "Unit No",
    accessor: "unit",
  },
  {
    Header: "Profile",
    accessor: "profile",
  },
  {
    Header: "Stock lvl",
    accessor: "stock",
  },
  {
    Header: "Org",
    accessor: "org",
  },
];

const data = [
  {
    region: "Central",
    street: "Dhoby",
    blk: 20,
    unit: 20,
    profile: "profile",
    stock: "low",
    org: "Org",
  },
  {
    region: "West",
    street: "Jurong",
    blk: 20,
    unit: 20,
    profile: "profile",
    stock: "low",
    org: "Org",
  },
  {
    region: "South",
    street: "Marine Parade",
    blk: 20,
    unit: 20,
    profile: "profile",
    stock: "low",
    org: "Org",
  },
  {
    region: "East",
    street: "Tampines",
    blk: 20,
    unit: 20,
    profile: "profile",
    stock: "low",
    org: "Org",
  },
  {
    region: "North",
    street: "Woodlands",
    blk: 20,
    unit: 20,
    profile: "profile",
    stock: "low",
    org: "Org",
  },
];
