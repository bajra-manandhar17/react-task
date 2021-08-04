import { Form, Button, Col, Row } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

//Creating a Form for adding new User and also adding the users to the list
const EditUser = ({ thisUser }) => {
	//updateUser from UserContext
	const { updateUser } = useContext(UserContext);

	// Need id in the UserContext
	const id = thisUser.id;

	//Get the information for User.js
	const [name, setName] = useState(thisUser.name);
	const [email, setEmail] = useState(thisUser.email);
	const [phone, setPhone] = useState(thisUser.phone);
	const [dob, setDob] = useState(thisUser.dob);
	const [city, setCity] = useState(thisUser.city);
	const [district, setDistrict] = useState(thisUser.district);
	const [province, setProvince] = useState(thisUser.province);

	//Get information of updated user
	const updatedUser = { id, name, email, phone, dob, city, district, province };

	//Handle submit function
	const handleSubmit = (e) => {
		e.preventDefault();
		updateUser(id, updatedUser);
	};

	// Add variables as value in the from to see these details
	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group>
				<Form.Control
					type='text'
					placeholder='Name *'
					name='name'
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
			</Form.Group>
			<Form.Group>
				<Form.Control
					type='email'
					placeholder='Email Address *'
					name='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
			</Form.Group>
			<Form.Group>
				<Form.Control
					type='number'
					placeholder='Phone Number *'
					name='phone'
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					required
				/>
			</Form.Group>
			<Form.Group>
				<Form.Control
					type='text'
					placeholder='DOB (dd/mm/yyyy)*'
					name='dob'
					value={dob}
					onChange={(e) => setDob(e.target.value)}
					required
				/>
			</Form.Group>
			<Row className='mb-3'>
				<Form.Group as={Col}>
					<Form.Control
						type='text'
						placeholder='City  *'
						name='city'
						value={city}
						onChange={(e) => setCity(e.target.value)}
						required
					/>
				</Form.Group>
				<Form.Group as={Col}>
					<Form.Control
						type='text'
						placeholder='District  *'
						name='district'
						value={district}
						onChange={(e) => setDistrict(e.target.value)}
						required
					/>
				</Form.Group>
			</Row>
			<Form.Group>
				<Form.Control
					as='select'
					name='province'
					value={province}
					onChange={(e) => setProvince(e.target.value)}
					custom
				>
					<option value='1'>Province 1</option>
					<option value='2'>Province 2</option>
					<option value='3'>Province 3</option>
					<option value='4'>Province 4</option>
					<option value='5'>Province 5</option>
					<option value='6'>Province 6</option>
					<option value='7'>Province 7</option>
				</Form.Control>
			</Form.Group>

			<Button variant='success' type='submit' block>
				Edit
			</Button>
		</Form>
	);
};

export default EditUser;
