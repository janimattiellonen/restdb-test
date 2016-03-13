import React, { Component } from 'react';
import { List } from 'immutable';
import _ from 'lodash';
import Stats from './Stats';
import classNames from 'classnames';
import {Link} from 'react-router';

export default class TableView extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		let direction = this.props.location.query.direction;
		const discs = this.sort(this.props.discs, this.props.location.query.sortBy, direction);

		direction = this.flipDirection(direction);

		return (
			<div>
				<table className="discs-table">
					<thead>
						<tr>
							<th>#</th>
							<th className="col-name">Name</th>
							<th className="col-type"><Link to={this.getUrl('type', direction)}>Type</Link></th>
							<th><Link to={this.getUrl('manufacturer', direction)}>Manufacturer</Link></th>
							<th><Link to={this.getUrl('material', direction)}>Material</Link></th>
							<th><Link to={this.getUrl('weight', direction)}>Weight</Link></th>
							<th><Link to={this.getUrl('speed', direction)}>Sp</Link></th>
							<th><Link to={this.getUrl('glide', direction)}>Gl</Link></th>
							<th><Link to={this.getUrl('stability', direction)}>St</Link></th>
							<th><Link to={this.getUrl('fade', direction)}>Fa</Link></th>
							<th><Link to={this.getUrl('missing', direction)}>Lost</Link></th>
							<th className="col-missing-description">Missing description</th>
						</tr>
					</thead>

					<tbody>
						{discs.map((disc, i) => {
							return this.renderRow(disc, i)
						})}
					</tbody>

					<tfoot>

					</tfoot>

				</table>
			</div>
		)
	}

	sort(discs, sortBy = null, direction = 'desc') {
		if (!sortBy) {
			return discs;
		}

		return List(_.orderBy(discs.toArray(), [sortBy], [direction]));
	}

	flipDirection(direction) {
		if (null == direction || direction == 'asc') {
			return 'desc';
		} else {
			return 'asc';
		}
	}

	getUrl(sortBy, direction = 'desc') {
		return this.props.location.pathname + '?mode=' + this.props.location.query.mode + '&sortBy=' + sortBy + '&direction=' + direction;
	}

	renderRow(disc, i) {
		return (
			<tr key={i}  className={classNames({'lost': disc.missing})}>
				<td>{i + 1}</td>
				<td>{disc.name}</td>
				<td>{disc.type}</td>
				<td>{disc.manufacturer}</td>
				<td>{disc.material}</td>
				<td>{disc.weight}</td>
				<td>{disc.speed}</td>
				<td>{disc.glide}</td>
				<td>{disc.stability}</td>
				<td>{disc.fade}</td>
				<td>{disc.missing}</td>
				<td>{disc.missing_description}</td>
			</tr>
		)
	}
}