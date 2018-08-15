import React, { Component } from 'react';
import axios from "axios";
import './portfolioItem.scss';

class PortfolioItem extends Component {
	state = {};

	componentDidMount() {
		let self = this;
		axios.get('//www.timpalac.com/wordpress/wp-json/wp/v2/posts/' + this.props.id + '?_embed').then(function (response) {
			self.setState({image: response.data._embedded['wp:featuredmedia'][0].source_url});
		}).catch(function (error) {
			console.log(error);
		});
	}
	render() {
		return (
			<div className="portfolio-item col-sm-12 col-md-4 pb-4">
				<p className="border img-wrapper"><img src={this.state.image} alt={this.props.name} className="img-fluid" /></p>
				<h3>{this.props.name}</h3>
				<p>{this.props.description}</p>
			</div>
		);
	}
}

export default PortfolioItem;