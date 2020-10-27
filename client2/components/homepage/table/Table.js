import SearchFilter from "./SearchFilter";
import NavTools from "./NavTools";
import { columns } from './Init';
import { useTable, useSortBy, useFilters, useGlobalFilter, usePagination } from "react-table";
import React from "react";
import classnames from 'classnames';

//https://www.tailwindtoolbox.com/components/responsive-table
//https://stackoverflow.com/questions/60304981/where-to-put-component-did-mount-in-my-next-js-file

//https://blog.logrocket.com/building-styling-tables-react-table-v7/
//https://codesandbox.io/s/react-table-7-sort-cpvwe?file=/src/RTable.js
//https://medium.com/@blaiseiradukunda/react-table-7-tutorial-3d8ba6ac8b16


export default function Table({ odata }) {
  let data = odata;
  
  const Table = ({ columns, data }) => {
    const filterTypes = React.useMemo(
      () => ({
        text: (rows, id, filterValue) => {
          return rows.filter(row => {
            const rowValue = row.values[id];
            return rowValue !== undefined
              ? String(rowValue)
                  .toLowerCase()
                  .startsWith(String(filterValue).toLowerCase())
              : true;
          });
        }
      }),
      []
    );
  
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      setGlobalFilter,
      page,
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      setPageSize,
      state: { pageIndex, pageSize },

    } = useTable({
      columns,
      data,
      filterTypes,
      initialState: { pageIndex: 0 }

    },
      useFilters,
      useGlobalFilter,
      useSortBy,
      usePagination
    );
    
    return (
      <div>
      <SearchFilter setFilter={setGlobalFilter} />
      
      <table {...getTableProps()} className="w-full table">
      
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())} className="hover:bg-gray-400 text-center px-5 py-3 bg-gray-600 text-left text-xs font-semibold 
              text-gray-800 uppercase tracking-wider w-full lg:w-auto text-center border border-b block lg:table-cell relative lg:static lg:mb-10">
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
        
        {page.map((row, i) => {
          let bg = 'bg-gray-100'
          if (i % 2 == 0) { bg = 'bg-gray-100' }
          else { bg = 'bg-white' }
          
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} id={i} className={classnames(bg, "border hover:bg-gray-400 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0")}>
              {row.cells.map(cell => {
                return <td className="px-5 py-5 w-full lg:w-auto text-center block lg:table-cell relative lg:static" {...cell.getCellProps()}>
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
      <NavTools/>

      <div>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>

      </div>
    );
  };

  return (
    
    <div className="container mx-auto px-4 sm:px-8 mt-18">
      <div className="py-8 flex-grow flex-col flex justify-center bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 mt-4">

          <h2 className="text-2xl font-semibold leading-tigh text-left">
            Beneficiaries Data
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
  console.log("attempting to fetch data");
  
  //fetch odata
  const response = await fetch(
    "https://smucf-dev-ebs-g1t3-srv.cfapps.us10.hana.ondemand.com/api/Beneficiary?$expand=regionID,Stocks"
  );
  var data = await response.json();
  Odata = data.value;

  console.log("Sucessfully fetched data");
  return {
    props: {
      Odata,
    },
  };
}
