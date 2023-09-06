// headings Array of strings
// rows : Array of Arrays of Strings
// emptyState to be displayed when the rows variable is of length zero

export function Table({ headings, rows, emptyState }) {
    if (rows.length) {
        return (
            <table className="w-formWidth m-auto mt-10">
                <thead>
                    <tr className="py-2.5">
                        {headings.map(heading => (
                            <th className="py-2.5 border-solid border-gray-300 border text-center bg-gray-200">{heading}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map(row => {
                        return (
                            <tr>
                                {row.map(cell => (
                                    <td className="py-2.5 border-solid border-gray-300 border text-center">
                                        {cell}
                                    </td>))
                                }
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    } else {
        return emptyState;
    }
}