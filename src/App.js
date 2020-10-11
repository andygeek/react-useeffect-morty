import React, { useState, useEffect } from 'react';

export const App = () => {
	const [resourceType, setResourceType] = useState('character');
	const [items, setItems] = useState([])
	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/${resourceType}`)
			.then((response) => response.json())
			.then((json) => setItems(json.results));
	}, [resourceType]);
	return (
		<>
			<div>
				<button onClick={() => setResourceType('character')}>Character</button>
				<button onClick={() => setResourceType('location')}>Location</button>
				<button onClick={() => setResourceType('episode')}>Episode</button>
			</div>
			<h1>{resourceType}</h1>
			{
				items.map(item => (
					<pre key={item.id}>{JSON.stringify(item)}</pre>
				))
			}
		</>
	);
};
