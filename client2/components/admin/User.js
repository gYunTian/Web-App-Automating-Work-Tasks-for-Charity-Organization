
export default function User({data}) {

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead >
        <tr>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Email
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            UserType
          </th>
          <th className="px-6 py-3 bg-gray-50"></th>
        </tr>
      </thead>

      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((row, i) => (

          <tr key={i} className="flex lg:table-row flex-wrap">
          <td className="px-6 py-4 whitespace-no-wrap">
            <div className="text-sm leading-5 text-gray-900">{row.name}</div>
          </td>

          <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
            <p>{row.email ? row.email : "None" }</p>
          </td>

          <td className="px-6 py-4 whitespace-no-wrap">
            {
              row.userType == "volunteer" ?     
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-green-800">
                {row.userType}
                </span>
              :
              row.userType == "Admin" ?  
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-200 text-blue-800">
                {row.userType}
                </span>
                :
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-red-800">
                {row.userType}
                </span>
            }
          </td>

          <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
            <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
          </td>
          </tr>
        ))}
      </tbody>

    </table>
  )
}