import React, { Component } from 'react';

class Portfolio extends Component {
	render() {
		return (
			<div className="content">
				<div className="container-fluid">
					<h1>Work Sample</h1>
					{this.props.match.params.id}
				</div>
			</div>
		);
	}
}

export default Portfolio;
