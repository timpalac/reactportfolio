import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/home.js';
import Portfolio from './components/portfolio.js';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faComment, faLinkedinIn, faGithub);

class App extends Component {
	render() {
		return (
			<div className="App pt-4">
				<header>
					<div className="container-fluid">
						<ul className="nav nav-pills float-right">
							<li className="nav-item"><a className="nav-link" target="_blank" rel="noopener noreferrer" href="http://www.linkedin.com/in/timpalac"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a></li>
							<li className="nav-item"><a className="nav-link" target="_blank" rel="noopener noreferrer" href="https://github.com/timpalac"><FontAwesomeIcon icon={['fab', 'github']} /></a></li>
						</ul>
						<p className="App-title">Tim Palac</p>
					</div>
				</header>

				<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/portfolio/:id' component={Portfolio}/>
				</Switch>

				<footer>
					<ul className="nav flex-column flex-sm-row">
						<li className="nav-item"><a className="nav-link">Call me at 815.505.0730</a></li>
						<li className="nav-item"><a href="mailto:tim@timpalac.com" className="nav-link">Send me an email</a></li>
						<li className="nav-item"><a href="https://www.dropbox.com/s/bzy9v1stj98iqv3/Tim-Palac-Resume.docx?dl=0" className="nav-link">Download my resume</a></li>
					</ul>

				</footer>
			</div>
		)
	}
}

export default App;
