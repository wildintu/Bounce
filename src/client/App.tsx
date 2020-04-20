import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './scss/app';
import HomePage from './Components/HomePage';
import Bar from './Components/Subcomponents/Bar';
import Collaboration from './Components/Collaboration';
import PostMain from './Components/PostMain';
import PostInput from './Components/PostInput';
// import About from './Components/About';


const App: React.FC<AppProps> = props => {
	return (
		<div>
		<Router>
			<Bar />
			<Switch>
				<Route exact path="/collaboration/:sessionid" component = { Collaboration } />
				<Route exact path="/post" component = { PostMain } />
				<Route exact path="/collaboration/:sessionid/input/:inputid" component = { PostInput } />
				<Route path="/" component = { HomePage } />
			</Switch>
		</Router>
		</div>
	)
}

export interface AppProps {}

export default App;
