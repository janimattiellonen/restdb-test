import React, { Component } from 'react';
import { List } from 'immutable';
import {Link} from 'react-router';
import _ from 'lodash';

export default class Stats extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { discs, mode, type } = this.props;

		return (
			<div className="disc-search">
				<p>Discs: {discs.count()}</p>

				<h2>View mode:</h2>

				<ul>
					<li><Link to={'/discs/' + type + '?mode=normal'}>Normal</Link></li>
					<li><Link to={'/discs/' + type + '?mode=table'}>Table</Link></li>
				</ul>

				<h2>Filter:</h2>
				<ul>
					<li key="all-discs"><Link to={"/discs/all?mode=" + mode}>All ({discs.count()})</Link></li>
					<li key="lost-discs"><Link to={"/discs/lost?mode=" + mode}>Lost ({this.getLostDiscCount()})</Link></li> 
					{this.getDiscTypes().map((disc, i) => {
						return (
							<li key={i}><Link to={'/discs/' + disc.type + '?mode=' + mode}>{disc.type} ({this.getDiscTypeCount(disc.type)})</Link></li>
						)
					})}
				</ul>
			</div>
		)
	}

	getDiscTypes() {
		const { discs } = this.props;

		return List(_.uniqBy(discs.toArray(), 'type')).sortBy(disc => disc.type);
	}

	getLostDiscCount() {
		const { discs } = this.props;

		return discs.filter(disc => disc.missing == true).count();
	}

	getDiscTypeCount(type) {
		const { discs } = this.props;

		return discs.filter(disc => disc.type == type).count();
	}
}

Stats.defaultProps = {
    discs: List()
};