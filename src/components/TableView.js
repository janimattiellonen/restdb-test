import React, { Component } from 'react';
import _ from 'lodash';
import Stats from './Stats';
import classNames from 'classnames';

export default class TableView extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { discs } = this.props;

		return (
			<div>
				<table className="discs-table">
					<thead>
						<tr>
							<th>#</th>
							<th className="col-name">Name</th>
							<th className="col-type">Type</th>
							<th>Manufacturer</th>
							<th>Material</th>
							<th>Weight</th>
							<th>Sp</th>
							<th>Gl</th>
							<th>St</th>
							<th>Fa</th>
							<th>Lost</th>
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