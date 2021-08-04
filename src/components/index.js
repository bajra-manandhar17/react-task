import { Route, Switch } from 'react-router';
import UserList from './UserList';
import AddUser from './AddUser';

const Index = () => {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={UserList} />
				<Route path='/add' component={AddUser} />
			</Switch>
		</div>
	);
};

export default Index;
