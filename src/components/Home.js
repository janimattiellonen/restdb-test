import React, { Component } from 'react';

export default class Home extends Component {

	render() {
		const {discs} = this.props;

		return (
			<div className="container">
				
				<div className="">
					<h1>My discs</h1>

					<p>{discs.count()}</p>
				</div>
				<div className="discs">
					{discs.map(disc => {
						return (
							<div className="disc">
								<img src="/images/lamankiekko.jpg" />

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
											<p>{disc.speed ? disc.speed : 'n/a'}</p>
										</div>
										<div className="attribute glide">
											<h3>Glide</h3>
											<p>{disc.glide ? disc.glide : 'n/a'}</p>
										</div>

										<div className="attribute stability">
											<h3>Stability</h3>
											<p>{disc.stability ? disc.stability : 'n/a'}</p>
										</div>

										<div className="attribute fade2">
											<h3>Fade</h3>
											<p>{disc.fade ? disc.fade : 'n/a'}</p>
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
};
