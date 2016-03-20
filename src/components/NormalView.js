import React, { Component } from 'react';
import _ from 'lodash';
import Stats from './Stats';
import classNames from 'classnames';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

export default class NormalView extends Component {

	render() {
		const { discs } = this.props;

		return (
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
		)
	}

	renderTooltip(disc, element) {
		if (!disc.missing_description || disc.missing_description.length == 0) {
			return element;
		}

		const tooltip = (
		  	<Tooltip id={"tooltip-disc-" + disc.id}>
		  		<span>{disc.missing_description}</span>
		  	</Tooltip>
		);

		return (
			<OverlayTrigger placement="bottom" overlay={tooltip}>
				{element}
			</OverlayTrigger>
		)
	}

	renderLostDisc(disc) {
		if (disc.missing) {
			let element = (<div className="lost-disc"><span>Lost disc</span></div>);
			return this.renderTooltip(disc, element);
		}
	}

	renderWeight(weight) {
		return weight > 0 ? ', ' + weight + 'g' : '';
	}

	renderImage(disc) {
		const tooltip = (
		  	<Tooltip id={"tooltip-disc-" + disc.id}>
		  		<span>{disc.missing_description}</span>
		  	</Tooltip>
		);

		let element = null;

		if (_.isUndefined(disc.image) || disc.image == "") {
			element = (<img src="/images/unknown.png" />);
		} else {
			let src = 'https://testdb-8e20.restdb.io/media/' + disc.image + '?s=o';
			element = <img src={src} />;
		}

		return this.renderTooltip(disc, element);
	}

	renderAttribute(attribute) {
		return attribute.length !== 0 ? attribute : 'n/a';
	}
}