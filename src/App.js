import { Route, Switch, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Index from './components';
import ListPage from './components/ListPage';
import UserContextProvider from './context/UserContext';

function App() {
	const history = useHistory();
	const handleClick = () => history.push('/list');

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
					<Button onClick={handleClick}>View List</Button>
				</div>
			</UserContextProvider>
		</Switch>
	);
}

export default App;
