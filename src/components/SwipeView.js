import React, { Component } from 'react';
import { List } from 'immutable';
import _ from 'lodash';
import classNames from 'classnames';
import { Link } from 'react-router';
import ReactSwipe from 'react-swipe';

export default class SwipeView extends Component {

	next() {
		this.refs.ReactSwipe.swipe.next();
	}

	prev() {
		this.refs.ReactSwipe.swipe.prev();
	}

	render() {
		const { discs } = this.props;

		return (
			<div className="component swipe-container">
				<div className="disc-container">
					<ReactSwipe ref="ReactSwipe"
			            continuous={true}
			            key={discs.count()}
			        >
		            	{discs.map((disc, i) => {
		            		let src = 'https://testdb-8e20.restdb.io/media/' + disc.image + '?s=o';
			        		return (
			        			<div className="disc-wrapper2">
				        			<div className="arrow arrow-left"><a onClick={::this.prev}><span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></a></div>
				        			<div className="swipe-disc-container" key={i} data-href={src}><img src={src}/></div>
				        			<div className="arrow arrow-right"><a onClick={::this.next}><span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></a></div>
				        		</div>
			        		)
			        	})}
			    	</ReactSwipe>
			    </div>
			</div>
	    )
	}
}