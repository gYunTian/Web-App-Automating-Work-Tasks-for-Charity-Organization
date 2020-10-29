import classnames from 'classnames';

export default function TableBody({ page, prepareRow }) {

  // let data = page.original;
  // console.log(page);
  
  // const Body = () => {
  //   {page.map((row, i) => {
  //     return (
  //       <tbody>
  //         <tr {...row.getRowProps()} id={i} className={classnames(bg, "border hover:bg-gray-400 flex lg:table-row flex-wrap mb-1 mt-1 lg:mb-0")}>

  //         </tr>
  //       </tbody>
  //     );   
  //   }
  // }

  return (
    <tbody>
      {page.map((row, i) => {

        let bg = 'bg-gray-100'
        if (i % 2 == 0) { bg = 'bg-gray-100' }
        else { bg = 'bg-white' }
        
        prepareRow(row);
        // console.log(row.cells[0].value);
        
        return (
          <tr {...row.getRowProps()} id={row.cells[0].value} className={classnames(bg, "border hover:bg-gray-400 flex lg:table-row flex-wrap mb-1 mt-1 lg:mb-0")}>
            {row.cells.map(cell => {
              if (cell.column.Header == "Stocks") {
                console.log(cell.value);

              }
              if (cell.column.Header != "Id") {
                return <td className="px-5 py-5 lg:table-cell" {...cell.getCellProps()}>
                  <p className="text-center text-gray-900">
                    {/* {cell.render("Cell")} */}
                    {typeof(cell.value) == "undefined" || cell.value == null || cell.value == "" ? "None" : cell.value}
                  </p>  
                </td>;
              }
              // kill off id td
              else {
                return <td className="hidden" key={cell.value}></td>
              }
            })}
            
          </tr>
        );
        
      })}
  </tbody>
  );
}
