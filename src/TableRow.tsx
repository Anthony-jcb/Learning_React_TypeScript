function TableRow({data}:{data: { id: number; name: string; stars: number }}) {
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.stars}</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  );
}

export default TableRow;