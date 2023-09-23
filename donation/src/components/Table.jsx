// headings Array of strings
// rows : Array of Arrays of Strings
// emptyState to be displayed when the rows variable is of length zero

export function Table({ headings, data, emptyState }) {
  const rows = data.map((row) => {
    return (
      <tr>
        {row.map((cell) => (
          <td className="py-2.5 border-solid border-gray-300 border text-center">
            {cell}
          </td>
        ))}
      </tr>
    );
  });

  const headingElements = headings.map((heading) => (
    <th className="py-2.5 border-solid border-gray-300 border text-center bg-gray-200">
      {heading}
    </th>
  ));

  if (rows.length) {
    return (
      <table className="w-full max-w-narrowWidth m-auto mt-10">
        <thead>
          <tr className="py-2.5">{headingElements}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  } else {
    return emptyState;
  }
}
