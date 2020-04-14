import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './scss/app';
import HomePage from './Components/HomePage';
import ClassRoom from './Components/ClassRoom';
import Business from './Components/Business';
import GroupProject from './Components/GroupProject';
import Idea from './Components/Idea';
import Form from './Components/Forum';
import Diagram from './Components/diagram';
import Bar from './Components/Subcomponents/Bar';
import Collaboration from './Components/Collaboration'; 


const App: React.FC<AppProps> = () => {
	return (
		<div>
		<BrowserRouter>
			<Bar />
			<Switch>
				<Route exact path="/" component = { HomePage } />
				<Route exact path ="/classroom" component = { ClassRoom } />
				<Route exact path ="/business" component = { Business } />
				<Route exact path ="/groupproject" component = { GroupProject } />
				<Route exact path ="/idea" component = { Idea } />
				<Route exact path="/form" component = { Form } />
				<Route exact path="/diagram" component = { Diagram } />
				<Route exact path="/collaboration" component = { Collaboration} />
			</Switch>
		</BrowserRouter>
		</div>
	)
}

export interface AppProps {}


// class App extends React.Component<IAppProps, IAppState> {
// 	constructor(props: IAppProps) {
// 		super(props);
// 		this.state = {
// 			name: null
// 		};
// 	}

// 	async componentDidMount() {
// 		try {
// 			let r = await fetch('/api/hello');
// 			let name = await r.json();
// 			this.setState({ name });
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}

// 	render() {
// 		return (
// 			<main className="container my-5">
// 				<h1 className="text-primary text-center">Hello {this.state.name}!</h1>
// 			</main>
// 		);
// 	}
// }

// export interface IAppProps {}

// export interface IAppState {
// 	name: string;
// }

export default App;
