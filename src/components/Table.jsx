import React, { useState } from "react";

export default function Table(){
    return (
			<div className="table">
				<input
					type="text"
					placeholder="Recherche"
                    className="search-bar"
					
				/>
				<table>
					<thead>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Start Date</th>
							<th>Department</th>
							<th>Date of Birth</th>
							<th>Street</th>
							<th>City</th>
							<th>State</th>
							<th>Zip Code</th>
						</tr>
					</thead>
				</table>
			</div>
		);
}