import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import GlobalFilter from "./GlobalFilter";
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
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, setGlobalFilter } =
		useTable({ columns, data }, useGlobalFilter, useSortBy);

		const {globalFilter} = state
    return (
			<div className="table">
				<div className="table__containers">
					<GlobalFilter filter={globalFilter} setFilter= {setGlobalFilter} />
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