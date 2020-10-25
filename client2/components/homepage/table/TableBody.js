import TableRow from './TableRow';

export default function TableBody({ data }) {
  console.log("from tablebody");
  console.log(data);

  return (
    <tbody>
        {   
            data.map((beneficiary, index) => (
                <TableRow key={beneficiary.beneficiaryID} id={index} data={beneficiary} index={index} />
            ))
        }
    </tbody>
  );
}
