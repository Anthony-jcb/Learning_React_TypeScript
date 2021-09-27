import TableRow from "./TableRow";

function Table({data}: {data: { id: number; name: string; stars: number }[];}) {
  return (
    <div>
      <h3>Data table</h3>
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>STARS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {
            data.length === 0
            ? <tr><td colSpan={3}>No data</td></tr>
            : data.map((el) => <TableRow data={el} key={el.id+el.stars} />)
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
