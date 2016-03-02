import React, { Component } from 'react';

export default class Home extends Component {

	render() {
		const {discs} = this.props;

		return (
			<div className="container">
				<h1>Home</h1>

				{discs.map(disc => {
					return (
						<div>
							Material: {disc.material}<br/>
						</div>
					)
				})}
			</div>
		);
	}	
};
