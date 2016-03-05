import React, { Component } from 'react';
import { List } from 'immutable';
import {Link} from 'react-router';
import _ from 'lodash';

export default class Stats extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { discs } = this.props;

		return (
			<div className="disc-search">
				<p>Discs: {discs.count()}</p>

				<ul>
					<li key="all-discs"><Link to="/discs">All</Link></li> 
					{this.getDiscTypes().map((disc, i) => {
						return (
							<li key={i}><Link to={'/discs/' + disc.type}>{disc.type} ({this.getDiscTypeCount(disc.type)})</Link></li>
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

	getDiscTypeCount(type) {
		const { discs } = this.props;

		return discs.filter(disc => disc.type == type).count();
	}
}

Stats.defaultProps = {
    discs: List()
};