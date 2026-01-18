import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useDebtees } from './useDebtees';

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
};

const columnHelper = createColumnHelper<Debtee>();

const columns = [
  columnHelper.accessor('debteeName', { header: 'Debtee' }),
  columnHelper.accessor('contactFirstName', { header: 'First Name' }),
  columnHelper.accessor('contactLastName', { header: 'Last Name' }),
  columnHelper.accessor('contactNumber', { header: 'Phone' }),
  columnHelper.accessor('billingCity', { header: 'City' }),
  columnHelper.accessor('billingState', { header: 'State' }),
];

const DebteeTable = () => {
  const { data = [], isLoading, isError } = useDebtees();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) return <p>Loading debtees…</p>;
  if (isError) return <p>Error loading debtees</p>;

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                {flexRender(
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
  );
};

export default DebteeTable;
