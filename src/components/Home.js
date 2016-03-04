import React, { Component } from 'react';

import Stats from './Stats';

export default class Home extends Component {

	render() {
		const {discs} = this.props;

		return (
			<div className="container">
				<h1>My discs</h1>

				<Stats discs={discs} />

				<div className="discs">
					{discs.map(disc => {
						return (
							<div className="disc">
								{this.renderImage(disc.image)}

								<div className="disc-info">
									<p className="weight">
										{disc.weight}g<br/>
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

	renderImage(imageUrl) {
		return imageUrl 
		? <img src={'https://testdb-8e20.restdb.io/media/' + imageUrl + '?s=o'} />
		: <img src="/images/unknown.png" />
	}
	renderAttribute(attribute) {
		return attribute.length !== 0 ? attribute : 'n/a';
	}
};
