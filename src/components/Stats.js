import React, { Component } from 'react';
import { List } from 'immutable';
import _ from 'lodash';

export default class Stats extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { discs } = this.props;

		return (
			<div className="disc-stats">
				<div className="row">
					Discs: {discs.count()} <br/>

					<p>Disc types:</p>

					<ul>
						{this.getDiscTypes().map((disc, i) => {
							return (
								<li key={i}>{disc.type}</li>
							)
						})}
					</ul>
				</div>
			</div>
		)
	}

	getDiscTypes() {
		const { discs } = this.props;
		console.log("types: " + JSON.stringify(_.uniqBy(discs.toArray(), 'type')));
		return List(_.uniqBy(discs.toArray(), 'type')).sortBy(disc => disc.type);
	}
}

Stats.defaultProps = {
    discs: List()
};