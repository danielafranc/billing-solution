import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'wbse', headerName: 'WBSE Number', width: 115 },
  { field: 'projectProfile', headerName: 'Project Profile', width: 115 },
  { field: 'lineItems', headerName: 'Line Items- Material Code', width: 200 },
  { field: 'materialSales', headerName: 'Material Sales', width: 130 },
  { field: 'quantity', headerName: 'Quantity', width: 100 },
  { field: 'materialCodeType', headerName: 'Material Code Type', width: 150 },
  { field: 'amount', headerName: 'Amount', width: 100 },
  { field: 'tax', headerName: 'Tax', width: 90 },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
];

const rows = [
    { id: 1, wbse: 'WBSE-001', projectProfile: 'Project A', lineItems: 'ABC123', materialSales: 'MaterialX', quantity: 100, materialCodeType: 'TypeA', amount: '$500', tax: '$50' },
    { id: 2, wbse: 'WBSE-002', projectProfile: 'Project B', lineItems: 'DEF456', materialSales: 'MaterialY', quantity: 200, materialCodeType: 'TypeB', amount: '$800', tax: '$80' },
    { id: 3, wbse: 'WBSE-003', projectProfile: 'Project C', lineItems: 'GHI789', materialSales: 'MaterialZ', quantity: 150, materialCodeType: 'TypeA', amount: '$600', tax: '$60' },
    { id: 4, wbse: 'WBSE-004', projectProfile: 'Project D', lineItems: 'JKL012', materialSales: 'MaterialW', quantity: 120, materialCodeType: 'TypeC', amount: '$700', tax: '$70' },
    { id: 5, wbse: 'WBSE-003', projectProfile: 'Project C', lineItems: 'GHI789', materialSales: 'MaterialZ', quantity: 150, materialCodeType: 'TypeA', amount: '$600', tax: '$60' },
    { id: 6, wbse: 'WBSE-004', projectProfile: 'Project D', lineItems: 'JKL012', materialSales: 'MaterialW', quantity: 120, materialCodeType: 'TypeC', amount: '$700', tax: '$70' },
  ];
export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}