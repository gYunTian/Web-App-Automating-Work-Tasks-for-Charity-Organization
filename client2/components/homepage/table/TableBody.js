import classnames from 'classnames';

export default function TableBody({ page, prepareRow }) {

  return (
    <tbody>
      {page.map((row, i) => {

        let bg = 'bg-gray-100'
        if (i % 2 == 0) { bg = 'bg-gray-100' }
        else { bg = 'bg-white' }
        
        prepareRow(row);
        return (
          <tr {...row.getRowProps()} id={row.cells[0].value} className={classnames(bg, "border hover:bg-gray-400 flex lg:table-row flex-wrap mb-1 mt-1 lg:mb-0")}>
            {row.cells.map(cell => {
              if (cell.column.Header == "Stock lvl" && cell.row.original.delivery) {

                let cl = cell.value < 14 ? cell.value < 5 ? "bg-red-400" : "bg-yellow-400" : "bg-green-400"
                let tl = cell.value < 14 ? cell.value < 5 ? "text-red-800" : "text-yellow-800" : "text-green-800"

                return <td className="px-5 py-5 lg:table-cell" {...cell.getCellProps()}>
                  <span className={classnames(tl,"relative block text-center px-2 py-2 font-semibold leading-tight")}>
                      <span aria-hidden className={classnames(cl,"absolute inset-0 opacity-50 rounded-full")}></span>
                      <span className="relative">
                          <p>{cell.value < 14 ? cell.value < 5 ? "Low" : "Medium" : "High"}</p>
                      </span>
                  </span>
                  <p className="relative block text-center px-2 py-2 text-semi-bold">{cell.row.original.delivery}</p>
                </td>;   
              }
              else if (cell.column.Header == "Dietary restrictions") {
                return <td className="px-5 py-5 lg:table-cell" {...cell.getCellProps()}>
                  {
                    typeof(cell.value) != "undefined" || cell.value != null || cell.value != "" ? 
                      <p className="text-center text-red-900 underline font-semibold">
                      {cell.value}
                      </p>
                    :
                    <p className="text-center text-gray-900">
                      {"None"}
                    </p>
                  } 
                </td>;
              }
              else if (cell.column.Header != "Id") {
                return <td className="px-5 py-5 lg:table-cell" {...cell.getCellProps()}>
                  {
                    typeof(cell.value) == "undefined" || cell.value == null || cell.value == "" ? 
                    <p className="text-center text-gray-900 underline">None</p>
                    : 
                    <p className="text-center text-gray-900">
                      {/* {cell.render("Cell")} */}
                      {typeof(cell.value) == "undefined" || cell.value == null || cell.value == "" ? "None" : cell.value}
                    </p>  
                  }
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
