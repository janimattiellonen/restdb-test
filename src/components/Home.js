import React, { Component } from 'react';
import _ from 'lodash';

import Stats from './Stats';
import NormalView from './NormalView';
import TableView from './TableView';

export default class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			mode: 'normal'
		};
	}

	render() {
		const { mode } = this.props.location.query;
		const { type } = this.props.params;

		let discs = this.filter(this.props.discs, type);
		let renderMode = this.getMode(mode) == 'normal' ? this.renderNormalView.bind(this, discs) : this.renderTableView.bind(this, discs);

		return (
			<div className="container">
				<h1>My discs</h1>

				<Stats mode={this.getMode(mode)} discs={this.props.discs} type={this.getType(type)}/>

				{renderMode()}

			</div>
		);
	}	
	getType(type) {
		return type ? type : 'all';
	}

	getMode(mode) {
		return mode != 'normal' && mode != 'table' ? 'normal' : mode;
	}

	renderNormalView(discs) {
		return (
			<NormalView discs={discs} />
		)
	}

	renderTableView(discs) {		
		return (
			<TableView discs={discs} />
		)
	}

	filter(discs, type) {
		if (!type || type == 'all') {
			return discs;
		}

		if (type == 'lost') {
			return discs.filter(disc => disc.missing == true);
		}
		
		return discs.filter(disc => disc.type == type);
	}


};
