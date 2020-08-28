import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Search = (props) => {
      
	return (
		<div>
			<input type="text" placeholder="search..." onChange={(e) => props.searchBox(e.target.value)} />
		</div>
	);
};

export default Search;
