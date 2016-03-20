import React, { Component } from 'react';
import _ from 'lodash';

import Stats from './Stats';
import NormalView from './NormalView';
import TableView from './TableView';
import SwipeView from './SwipeView';
import { List } from 'immutable';
import SmartSearch from 'smart-search';


export default class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			mode: 'normal',
			discs: List()
		};
	}

	render() {
		const { mode } = this.props.location.query;
		const { type } = this.props.params;

		let discs = this.filter(this.state.discs, type);
		let renderMode = null;

		switch (mode) {
			case 'table':
				console.log("here1");
				renderMode = this.renderTableView.bind(this);
				break;
			case 'swipe':
				console.log("here2");
				renderMode = this.renderSwipeView.bind(this);
				break;
			case 'normal':
			default:
				console.log("here3");
				renderMode = this.renderNormalView.bind(this);
				break;
		}

		return (
			<div className="container">
				<h1>My discs</h1>

				<Stats onFreeSearch={::this.freeSearch} mode={mode} discs={this.props.discs} type={this.getType(type)}/>

				{renderMode()}

			</div>
		);
	}	
	getType(type) {
		return type ? type : 'all';
	}

	renderNormalView() {
		const { discs } = this.state;

		return (
			<NormalView discs={discs} />
		)
	}

	renderTableView() {
		const { discs } = this.state;		
		return (
			<TableView discs={discs} location={this.props.location} />
		)
	}

	renderSwipeView() {
		const { discs } = this.state;

		return (
			<SwipeView discs={discs} location={this.props.location} />
		)
	}

	filter(discs, type, term) {
		if (term) {
			let patterns = [term];
			let fields = ['name'];
			let results = SmartSearch(discs, patterns, fields, {maxInsertions: 2});

			return List(results).map(a => a.entry);
		}
		if (!type || type == 'all') {
			return discs;
		}

		if (type == 'lost') {
			return discs.filter(disc => disc.missing == true);
		}
		
		if (type == 'available') {
			return discs.filter(disc => disc.missing != true);
		}
		
		return discs.filter(disc => disc.type == type);
	}

	freeSearch(term) {
		if (term && term.length > 0) {
			this.setState({
				discs: this.filter(this.props.discs, null, term)
			});
		}
	}



	componentWillReceiveProps(nextProps) {
		if (nextProps.discs) {
			const { mode } = nextProps.location.query;
			const { type } = nextProps.params;

			let discs = this.filter(nextProps.discs, type);

			this.setState({
				discs: discs
			});
		}
	}

};
