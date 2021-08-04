import { UserContext } from '../context/UserContext';
import { useContext } from 'react';
import User from './User';

const ListPage = () => {
	const { users } = useContext(UserContext);

	return (
		<>
			<div className='table-title'>
				<div className='row'>
					<div className='col-sm-6'>
						<h2>
							<b>Profiles</b>
						</h2>
					</div>
				</div>
			</div>
			<table className='table table-striped table-hover'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Phone Number</th>
						<th>Date Of Birth</th>
						<th>City</th>
						<th>District</th>
						<th>Province</th>
						<th>Country</th>
					</tr>
				</thead>
				<tbody>
					{/*User is array so map file is used to send the information individually*/}
					{/*Sorting the values in increasing order*/}
					{users
						.sort((a, b) => (a.name < b.name ? -1 : 1))
						.map((user) => (
							<tr key={user.id}>
								<User user={user} /> {/*sending as a user Prop*/}
							</tr>
						))}
				</tbody>
			</table>
		</>
	);
};

export default ListPage;
