import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { useTable, useSortBy } from "react-table";
import '../style/table.css'

export default function Table(){
	const employeeData = useSelector((state) => state.employee.employee)
	const data = React.useMemo(() => employeeData, [employeeData]);
	const columns = React.useMemo(
		() => [
			{
				Header: 'FirstName',
				accessor: 'firstName',
				sortType: 'alphanumeric',
			},
			{
				Header: 'Last Name',
				accessor: 'lastName',
				sortType: 'alphanumeric',
			},
			{
				Header: 'Birthdate',
				accessor: 'birthDate',
				sortType: 'alphanumeric',
			},
			{
				Header: 'Start Date',
				accessor: 'start',
				sortType: 'alphanumeric',
			},
			{
				Header: 'Street',
				accessor: 'street',
				sortType: 'alphanumeric',
			},
			{
				Header: 'City',
				accessor: 'city',
				sortType: 'alphanumeric',
			},
			{
				Header: 'State',
				accessor: 'state',
				sortType: 'alphanumeric',
			},
			{
				Header: 'Zip Code',
				accessor: 'zipCode',
				sortType: 'alphanumeric',
			},
			{
				Header: 'Department',
				accessor: 'department',
				sortType: 'alphanumeric',
			},
		],
		[]
	);
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({ columns, data }, useSortBy);
    return (
			<div className="table">
				<input type="text" name="oui" id="" />
				<div className="table__containers">
					<table {...getTableProps()}>
						<thead>
							{headerGroups.map((headerGroup) => (
								<tr {...headerGroup.getHeaderGroupProps()}>
									{headerGroup.headers.map((column) => (
										<th
											{...column.getHeaderProps(column.getSortByToggleProps())}
										>
											{column.render('Header')}
											<span>
												{column.isSorted ? column.isSortedDesc ? '🔼':  '🔽': '🔼'}
											</span>
										</th>
									))}
								</tr>
							))}
						</thead>
						<tbody {...getTableBodyProps()}>
							{rows.map((row) => {
								prepareRow(row);
								return (
									<tr {...row.getRowProps()}>
										{row.cells.map((cell) => (
											<td {...cell.getCellProps()}> {cell.render('Cell')} </td>
										))}
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		);
}