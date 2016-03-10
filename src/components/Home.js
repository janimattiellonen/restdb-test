import React, { Component } from 'react';
import _ from 'lodash';

import Stats from './Stats';

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

				<div className="discs">
					{discs.map( (disc, i) => {
						return (
							<div key={i} className="disc">
								<div className="image-div">
									{this.renderImage(disc)}

									{this.renderLostDisc(disc)}
								</div>
								

								<div className="disc-info">
									<h2>{disc.name}&nbsp;</h2>

									<p className="manufacturer">{disc.manufacturer} {disc.material}&nbsp;</p>


									<p className="type">{disc.type}{this.renderWeight(disc.weight)}</p>
									
									<div className="specs">
										<div className="attribute speed">
											<h3>Speed</h3>
											<p>{this.renderAttribute(disc.speed)}</p>
										</div>
										<div className="attribute glide">
											<h3>Glide</h3>
											<p>{this.renderAttribute(disc.glide)}</p>
										</div>

										<div className="attribute stability">
											<h3>Stability</h3>
											<p>{this.renderAttribute(disc.stability)}</p>
										</div>

										<div className="attribute fade2">
											<h3>Fade</h3>
											<p>{this.renderAttribute(disc.fade)}</p>
										</div>
									</div>	
								</div>
							</div>
						)
					})}
				</div>
			</div>
		);
	}	

	filter(discs, type) {
		if (!type) {
			return discs;
		}
		console.log("type: " + type);
		
		return discs.filter(disc => disc.type == type);
	}

	renderLostDisc(disc) {
		if (disc.missing) {
			return (
				<div className="lost-disc"><span>Lost disc</span></div>
			)
		}
	}

	renderWeight(weight) {
		return weight > 0 ? ', ' + weight + 'g' : '';
	}

	renderImage(disc) {

		if (_.isUndefined(disc.image) || disc.image == "") {
			return (
				<img src="/images/unknown.png" />
			)
		} 
		return (
			<img src={'https://testdb-8e20.restdb.io/media/' + disc.image + '?s=o'} />
		)
	}

	renderAttribute(attribute) {
		return attribute.length !== 0 ? attribute : 'n/a';
	}
};
