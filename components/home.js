import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PortfolioItem from './portfolioItem';

class Home extends Component {
	state = {};

	createMarkup(htmlContent) {
		return {
			__html: htmlContent
		}
	}

	componentDidMount() {
		let self = this;
		axios.get('//www.timpalac.com/wordpress/wp-json/wp/v2/pages/2').then(function (response) {
			self.setState({title: response.data.title.rendered, content: response.data.content.rendered});
			self.setState({portfolioTitle: response.data.acf.portfolio_title, portfolioContent: response.data.acf.portfolio_text, items: response.data.acf.portfolio_items.sort((a,b) => a.ID > b.ID).map((item) =>
					<PortfolioItem key={item.ID} id={item.ID} name={item.post_title} description={item.post_content} />
				)});
		}).catch(function (error) {
			console.log(error);
		});
	}

	render() {
		return (
			<div className="content">
				<section>
					<div className="container-fluid">
						<h1>{this.state.title}</h1>
						<div className="lead" dangerouslySetInnerHTML={this.createMarkup(this.state.content)} />
						<p><a href="mailto:tim@timpalac.com" className="btn btn-lg btn-success"><FontAwesomeIcon icon="comment" /> Send me a message</a></p>
					</div>
				</section>

				<section className="pt-4">
					<div className="container-fluid">
						<h2>{this.state.portfolioTitle}</h2>
						<div dangerouslySetInnerHTML={this.createMarkup(this.state.portfolioContent)} />
						<div className="portfolio row">
							{this.state.items}
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Home;
