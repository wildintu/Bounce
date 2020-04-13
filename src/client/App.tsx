import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './scss/app';
import HomePage from './Components/HomePage';
import ClassRoom from './Components/ClassRoom';
import Business from './Components/Business';
import GroupProject from './Components/GroupProject';
import Idea from './Components/Idea';
import Diagram from './Components/diagram';
import Bar from './Components/Subcomponents/Bar';
import Collaboration from './Components/Collaboration';
import PostMain from './Components/PostMain';

const App: React.FC<AppProps> = props => {
	return (
		<div>
		<Router>
			<Bar />
			<Switch>
				<Route exact path ="/classroom" component = { ClassRoom } />
				<Route exact path ="/business" component = { Business } />
				<Route exact path ="/groupproject" component = { GroupProject } />
				<Route exact path ="/idea" component = { Idea } />
				<Route exact path="/diagram" component = { Diagram } />
				<Route exact path="/collaboration/:id" component = { Collaboration } />
				<Route exact path="/post" component = { PostMain } />
				<Route path="/" component = { HomePage } />
			</Switch>
		</Router>
		</div>
	)
}

export interface AppProps {}

export default App;
