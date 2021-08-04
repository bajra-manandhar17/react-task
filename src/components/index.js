import { Route, Switch } from 'react-router';
import UserList from './UserList';
import AddUser from './AddUser';

const Index = ({ match }) => {
	const { path } = match;

	return (
		<div>
			<Switch>
				<Route exact path={path} component={UserList}></Route>
				<Route path={`${path}/add`} component={AddUser}></Route>
			</Switch>
		</div>
	);
};

export default Index;
