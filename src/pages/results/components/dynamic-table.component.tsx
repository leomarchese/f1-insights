/* eslint-disable @typescript-eslint/no-explicit-any */
import { Column, TableData } from '../types';

interface DynamicTableProps<T> {
  columns: Column<T>[];
  data: TableData<T>;
}

const DynamicTable = <T extends object>({ data, columns }: DynamicTableProps<T>) => {
  return (
    <table className="table-auto -mx-10 md:mx-0">
      <thead className="bg-white border-b border-gray-200">
        <tr className="text-[14px] font-normal">
          {columns.map((col, index) => (
            <th key={index} className={`p-4 text-left ${col.hideOnMobile ? 'hidden md:table-cell' : ''}`}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => {
          const bgClass = rowIndex % 2 === 0 ? 'bg-white' : 'bg-f1-grey-10';
          return (
            <tr key={rowIndex} className={`text-[15px] font-titillium ${bgClass} group/column`}>
              {columns.map((col, colIndex) => {
                const cellData: any = typeof col.accessor === 'function' ? col.accessor(row) : row[col.accessor];
                return (
                  <td key={colIndex} className={`p-5 ${col.hideOnMobile ? 'hidden md:table-cell' : ''}`}>
                    <span>{cellData}</span>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DynamicTable;
