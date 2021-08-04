import { Route, Switch } from 'react-router-dom';
import Index from './components';
import ListPage from './components/ListPage';
import UserContextProvider from './context/UserContext';

function App() {
	return (
		<Switch>
			<UserContextProvider>
				<div className='container-xl'>
					<div className='table-response'>
						<div className='table-wrapper'>
							<Route path='/' component={Index} />
						</div>
					</div>
					<Route path='/list' component={ListPage} />
				</div>
			</UserContextProvider>
		</Switch>
	);
}

export default App;
