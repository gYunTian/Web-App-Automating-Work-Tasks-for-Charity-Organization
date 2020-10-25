export default function TableRow({ data, index }) {

  let unit = /#[0-9]+-[0-9]+/.exec(data.address);
  data.address = data.address.replace(unit, "");

  let block = /blk\s*[0-9]+|block\s*[0-9]+/.exec(data.address.toLowerCase());
  data.address = data.address.replace(block, "");

  let street = data.address;

  console.log('unit: '+unit);
  console.log('block: '+block);
  console.log('street: '+street);

  /**
   * profile
   * - race, religion, dietary, no children, num working adult, per capita income, household size
   * 
   * 
   */
  
  return (
    <tr >
      <td className="px-5 py-5 border bg-white text-sm">
        <p className="text-center text-gray-900 whitespace-no-wrap">data.regionID</p>
      </td>

      <td className="px-5 py-5 border bg-white text-sm">
        <p className="text-center text-gray-900 whitespace-no-wrap">{street}</p>
      </td>

      <td className="px-5 py-5 border bg-white text-sm">
        <p className="text-center text-gray-900 whitespace-no-wrap">{block}</p>
      </td>

      <td className="px-5 py-5 border bg-white text-sm">
        <p className="text-center text-gray-900 whitespace-no-wrap"> Jan 21, 2020 </p>
      </td>

      <td className="px-5 py-5 border bg-white text-sm">
        <p className="text-center text-gray-900 whitespace-no-wrap"> Test </p>
      </td>

      <td className="px-5 py-5 border bg-white text-sm">
        <p className="text-center text-gray-900 whitespace-no-wrap"> Test </p>
      </td>

      <td className="px-5 py-5 border bg-white text-sm">
        <p className="text-center text-gray-900 whitespace-no-wrap"> Test </p>
      </td>
    </tr>
  );
}

{
  /* <td className="px-5 py-5 border bg-white text-sm">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                            <img className="w-full h-full rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80" alt="" />
                        </div>
                        <div className="ml-3">
                            <p className="text-center text-gray-900 whitespace-no-wrap"> Vera Carpenter </p>
                        </div>
                    </div>
                </td> */
}

{
  /* <td className="px-5 py-5 border bg-white text-sm">
                    <span
                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span aria-hidden
                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                        <span className="relative">Activo</span>
                    </span>
                </td> */
}
