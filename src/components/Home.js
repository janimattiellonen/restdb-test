import React, { Component } from 'react';
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
								{this.renderImage(disc.image)}

								<div className="disc-info">
									<p className="weight">
										{this.renderWeight(disc.weight)}<br/>
										<span className="type">{disc.type}</span>
									</p>

									<h2>{disc.name}</h2>

									<p className="manufacturer">{disc.manufacturer}</p>

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

	renderWeight(weight) {
		return weight > 0 ? weight + "g" : 'n/a';
	}

	renderImage(imageUrl) {
		return imageUrl 
		? <img src={'https://testdb-8e20.restdb.io/media/' + imageUrl + '?s=o'} />
		: <img src="/images/unknown.png" />
	}
	renderAttribute(attribute) {
		return attribute.length !== 0 ? attribute : 'n/a';
	}
};
