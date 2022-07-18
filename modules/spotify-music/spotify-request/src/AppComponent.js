import React from 'react';
import ReactDOM from 'react-dom';
import ListContainer from './components/List/ListContainer';
import SearchContainer from './components/Search/SearchContainer';

export default function AppComponent(props) {
	return (
		<div className='mx-auto container mt-3'>
			<SearchContainer />
			<ListContainer />
		</div>
	);
}
