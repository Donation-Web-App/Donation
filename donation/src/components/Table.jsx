// headings Array of strings
// rows : Array of Arrays of Strings
// emptyState to be displayed when the rows variable is of length zero

export function Table({ headings, data, emptyState }) {
  const tableBody = data.map((row) => {
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

  const tableHeading = (
    <tr className="py-2.5">
      {headings.map((heading) => (
        <th
          key={heading}
          className="py-2.5 border-solid border-gray-300 border text-center bg-gray-200"
        >
          {heading}
        </th>
      ))}
    </tr>
  );

  if (tableBody.length) {
    return (
      <table className="w-full max-w-narrowWidth m-auto mt-10">
        <thead>{tableHeading}</thead>
        <tbody>{tableBody}</tbody>
      </table>
    );
  } else {
    return emptyState;
  }
}
