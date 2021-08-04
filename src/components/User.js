import { useContext, useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { UserContext } from '../context/UserContext';
import EditUser from './EditUser';

const User = ({ user }) => {
	//Context hook
	const { deleteUser } = useContext(UserContext);

	// useState and functions to show and close the modal
	const [show, setShow] = useState(false);

	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	//UseEffect Hook for automatically closing the modal after submitting the button
	useEffect(() => {
		handleClose();
	}, [user]);

	return (
		<>
			{/*Utilizing the sent user props*/}
			<td>{user.name}</td>
			<td>{user.email}</td>
			<td>{user.phone}</td>
			<td>{user.dob}</td>
			<td>{user.city}</td>
			<td>{user.district}</td>
			<td>{user.province}</td>
			<td>Nepal</td>
			<td>
				{' '}
				{/*Edit and Delete Modals*/}
				<button
					onClick={handleShow}
					className='btn text-warning btn-act'
					data-toggle='modal'
				>
					<i className='material-icons' data-toggle='tooltip' title='Edit'>
						&#xE254;
					</i>
				</button>
				<button
					onClick={() => deleteUser(user.id)}
					className='btn text-danger btn-act'
					data-toggle='modal'
				>
					<i className='material-icons' data-toggle='tooltip' title='Delete'>
						&#xEf66;
					</i>
				</button>
			</td>

			{/* Modal popup */}
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Edit User</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{/*Sending Information as thisUser to the EditForm*/}
					<EditUser thisUser={user} />
				</Modal.Body>
			</Modal>
		</>
	);
};

export default User;
