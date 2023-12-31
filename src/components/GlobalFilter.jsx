import React from 'react';

export default function GlobalFilter({ filter, setFilter }) {
	return (
		<span>
			Search: {' '}
			<input
				onChange={(e) => setFilter(e.target.value)}
			/>
		</span>
	);
}
