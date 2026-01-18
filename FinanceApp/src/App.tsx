import { useState } from 'react'
import './App.css'
import { createColumnHelper, useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';

type Debtee = {
  id: number;
  debteeName: string;
  contactFirstName: string;
  contactLastName: string;
  contactNumber: string;
  billingAddress: string;
  billingCity: string;
  billingState: string;
  billingZipCode: number;
}

const columnHelper = createColumnHelper<Debtee>();
  const columns = [
    columnHelper.accessor("debteeName", {
      header: "Debtee Name",
      cell: info => info.getValue()
    }),
    columnHelper.accessor("contactFirstName", {
      header: "Contact First Name",
      cell: info => info.getValue()
    }),
    columnHelper.accessor("contactLastName", {
      header: "Contact Last Name",
      cell: info => info.getValue()
    }),
    columnHelper.accessor("contactNumber", {
      header: "Contact Number",
      cell: info => info.getValue()
    }),
    columnHelper.accessor("billingAddress", {
      header: "Billing Address",
      cell: info => info.getValue()
    }),
    columnHelper.accessor("billingCity", {
      header: "Billing City",
      cell: info => info.getValue()
    }),
    columnHelper.accessor("billingState", {
      header: "Billing State",
      cell: info => info.getValue()
    }),
    columnHelper.accessor("billingZipCode", {
      header: "Billing Zip Code",
      cell: info => info.getValue()
    })
  ];
 
function App() {
  const [debtees, setDebtees] = useState<Debtee[]>([]);
  const [debteeName, setDebteeName] = useState(''); 
  const [contactFirstName, setContactFirstName] = useState(''); 
  const [contactLastName, setContactLastName] = useState(''); 
  const [contactNumber, setContactNumber] = useState(''); 
  const [billingAddress, setBillingAddress] = useState(''); 
  const [billingCity, setBillingCity] = useState(''); 
  const [billingState, setBillingState] = useState(''); 
  const [billingZipCode, setBillingZipCode] = useState(0); 

  const addDebtee = (newDebtee : Debtee) => {
    setDebtees(prevDebtees => [...prevDebtees, newDebtee]);
  };

  const handleAddDebtee = () => {
    addDebtee({
      id: Date.now(),
      debteeName: debteeName,
      contactFirstName: contactFirstName,
      contactLastName: contactLastName,
      contactNumber: contactNumber,
      billingAddress: billingAddress,
      billingCity: billingCity,
      billingState: billingState,
      billingZipCode: billingZipCode
    });

    setDebteeName('');
    setContactFirstName('');
    setContactLastName('');
    setContactNumber('');
    setBillingAddress('');
    setBillingCity('');
    setBillingState('');
    setBillingZipCode(0);
  };

  const table = useReactTable({
    data: debtees,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  console.log("Number of rows to render:", table.getRowModel().rows.length);

  return (
    <>
      <div>
        <input
          type='text'
          placeholder='Debtee Name'
          value={debteeName}
          onChange={e => setDebteeName(e.target.value)}
        />
      </div>
      <div>
        <input 
          type='text' 
          placeholder='Contact First Name' 
          value={contactFirstName}
          onChange={e => setContactFirstName(e.target.value)}
        />
      </div>
      <div>
        <input 
          type='text' 
          placeholder='Contact Last Name' 
          value={contactLastName}
          onChange={e => setContactLastName(e.target.value)}
        />
      </div>
      <div>
        <input 
          type='text' 
          placeholder='Contact Number' 
          value={contactNumber}
          onChange={e => setContactNumber(e.target.value)}
        />
      </div><div>
        <input 
          type='text' 
          placeholder='Billing Address' 
          value={billingAddress}
          onChange={e => setBillingAddress(e.target.value)}
        />
      </div><div>
        <input 
          type='text' 
          placeholder='Billing City' 
          value={billingCity}
          onChange={e => setBillingCity(e.target.value)}
        />
      </div><div>
        <input 
          type='text' 
          placeholder='Billing State' 
          value={billingState}
          onChange={e => setBillingState(e.target.value)}
        />
      </div><div>
        <input 
          type='number' 
          placeholder='Billing Zip Code' 
          value={billingZipCode}
          onChange={e => setBillingZipCode(e.target.valueAsNumber)}
        />
      </div>
      <div>
        <button onClick={handleAddDebtee}>Add Debtee</button>
      </div>
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder 
                    ? null 
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
