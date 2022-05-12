import React from 'react';
import ReactDOM from 'react-dom';

import AppComponent from './AppComponent';

class CustomElement extends HTMLElement {
	constructor() {
		super();

		const root = document.createElement('div');

		ReactDOM.render(
			<AppComponent/>, 
			root
		);

		this.appendChild(root);
	}

	connectedCallback() {
	}

	disconnectedCallback() {
	}

}

if (customElements.get('spotify-request-element')) {
	console.log(
		'Skipping registration for <spotify-request-element> (already registered)'
	);
} else {
	customElements.define('spotify-request-element', CustomElement);
}
