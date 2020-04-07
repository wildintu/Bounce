import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './scss/app';
import HomePage from './Components/HomePage';
import ClassRoom from './Components/ClassRoom';
import Business from './Components/Business';
import GroupProject from './Components/GroupProject';
import Idea from './Components/Idea';

const App: React.FC<AppProps> = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
				<Route exact path ="/classroom">
					<ClassRoom />
				</Route>
				<Route exact path ="/business">
					<Business />
				</Route>
				<Route exact path ="/groupproject">
					<GroupProject />
				</Route>
				<Route exact path ="/idea">
					<Idea />
				</Route>
			</Switch>
		</BrowserRouter>
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
