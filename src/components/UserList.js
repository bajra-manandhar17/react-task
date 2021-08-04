import { useContext, useState, useEffect } from 'react';
import { Alert, Button, Modal } from 'react-bootstrap';
import { UserContext } from '../context/UserContext';
import User from './User';
import AddUser from './AddUser';

const UserList = () => {
	//Context hook for giving the information
	const { users } = useContext(UserContext);

	// useState and functions to show and close the modal
	const [show, setShow] = useState(false);

	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	// useState for Alert Function
	const [alert, setAlert] = useState(false);
	const handleAlert = () => {
		setAlert(true);
		setTimeout(() => {
			setAlert(false);
		}, 2000);
	};

	//UseEffect Hook for automatically closing the modal after submitting the button
	useEffect(() => {
		handleClose();
		return () => {
			handleAlert();
		};
	}, [users]);

	return (
		// React Fragment to solve the parent-child error
		<>
			{/*Web header layout*/}
			<div className='table-title'>
				<div className='row'>
					<div className='col-sm-6'>
						<h2>
							<b>User List</b>
						</h2>
					</div>
					<div className='col-sm-6'>
						<Button
							onClick={handleShow}
							className='btn btn-dark'
							data-toggle='modal'
						>
							<i className='material-icons'>&#xE7fe;</i>{' '}
							<span>
								<b>Add User</b>
							</span>
						</Button>
					</div>
				</div>
			</div>

			{/* Alert layout */}
			<Alert show={alert} variant='success' onClose={() => setAlert(false)}>
				User List Has Been Updated!
			</Alert>

			{/* table layout */}
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

			{/* Modal popup */}
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add User</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<AddUser />
				</Modal.Body>
			</Modal>
		</>
	);
};

export default UserList;
