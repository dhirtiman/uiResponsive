import React, { useState } from 'react';
import Papa from 'papaparse';

interface Row {
  [key: string]: string;
}

export default function CsvVisualizer() {
  const [data, setData] = useState<Row[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const [search, setSearch] = useState('');

  // Handle CSV upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: result => {
        const parsedData = result.data as Row[];
        setData(parsedData);
        setHeaders(Object.keys(parsedData[0]));
      },
    });
  };

  // Filtered rows
  const filteredData = data.filter(row =>
    Object.values(row).some(value =>
      value.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-6xl rounded-2xl bg-white p-6 shadow-lg">
        <h1 className="mb-4 text-2xl font-bold">📊 CSV Visualizer</h1>

        {/* Upload */}
        <input
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          className="mb-4"
        />

        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="mb-4 w-full rounded-lg border p-2"
        />

        {/* Table */}
        {filteredData.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-300 text-sm">
              <thead className="bg-gray-200">
                <tr>
                  {headers.map(header => (
                    <th key={header} className="border px-3 py-2 text-left">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    {headers.map(header => (
                      <td key={header} className="border px-3 py-2">
                        {/* Detect URLs */}
                        {row[header]?.startsWith('http') ? (
                          <a
                            href={row[header]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                          >
                            {row[header]}
                          </a>
                        ) : (
                          row[header]
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500">Upload a CSV file to see results.</p>
        )}
      </div>
    </div>
  );
}
