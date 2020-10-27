import SearchFilter from "./SearchFilter";
import { columns } from './Init';
import { useTable, useSortBy, useFilters, useGlobalFilter, usePagination } from "react-table";
import React from "react";
import classnames from 'classnames';
import { KeyboardArrowUp, KeyboardArrowDown} from '@material-ui/icons';


//https://www.tailwindtoolbox.com/components/responsive-table
//https://stackoverflow.com/questions/60304981/where-to-put-component-did-mount-in-my-next-js-file

//https://blog.logrocket.com/building-styling-tables-react-table-v7/
//https://codesandbox.io/s/react-table-7-sort-cpvwe?file=/src/RTable.js
//https://medium.com/@blaiseiradukunda/react-table-7-tutorial-3d8ba6ac8b16


export default function Table({ odata }) {

  let count = odata.length;
  let data = odata;
  // console.log(data);
  
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
    console.log(pageCount);

    return (
      <div>
      <SearchFilter setFilter={setGlobalFilter} goPrev={previousPage} pageCount={pageCount} pageSize={pageSize} setPageSize={setPageSize}
      canPrev={canPreviousPage} goNext={nextPage} canNext={canNextPage} pageIndex={pageIndex} pageOptionsLength={pageOptions.length} />
      
      <table {...getTableProps()} className="w-full table-fixed">
      
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())} className="px-4 py-2 h-12 hover:bg-gray-400 text-center bg-gray-600 text-left text-xs font-semibold 
              text-gray-800 uppercase tracking-wider lg:w-auto border border-b block lg:table-cell relative lg:static lg:mb-10">
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? <KeyboardArrowDown/> : <KeyboardArrowUp/>) : ""}
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
            <tr {...row.getRowProps()} id={i} className={classnames(bg, "border hover:bg-gray-400 flex lg:table-row flex-wrap mb-1 mt-1 lg:mb-0")}>
              {row.cells.map(cell => {
                return <td className="px-5 py-5 lg:table-cell" {...cell.getCellProps()}>
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
      
      <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
          <span className="text-xs xs:text-sm text-gray-900">
              Retrieved {count} Entries
          </span>
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
