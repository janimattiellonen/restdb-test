import React, { Component } from 'react';
import _ from 'lodash';

import Stats from './Stats';
import NormalView from './NormalView';
import TableView from './TableView';

export default class Home extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { type } = this.props.params;

		let discs = this.filter(this.props.discs, type);

		return (
			<div className="container">
				<h1>My discs</h1>

				<Stats discs={this.props.discs} />

				<TableView discs={discs} />

				<NormalView discs={discs} />
			</div>
		);
	}	

	filter(discs, type) {
		if (!type) {
			return discs;
		}

		if (type == 'lost') {
			return discs.filter(disc => disc.missing == true);
		}
		
		return discs.filter(disc => disc.type == type);
	}


};
