import { Form, Button, Col, Row } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

//Creating a Form for adding new User and also adding the users to the list
const AddUser = () => {
	//Context from UserContext
	const { addUser } = useContext(UserContext);

	//State set to empty
	const [newUser, setNewUser] = useState({
		name: '',
		email: '',
		phone: '',
		dob: '',
		city: '',
		district: '',
		province: '',
	});

	// function to fill the values
	const onInputChange = (e) => {
		setNewUser({ ...newUser, [e.target.name]: e.target.value });
	};

	const { name, email, phone, dob, city, district, province } = newUser;

	//Return changes after pressing the submit button
	const handleSubmit = (e) => {
		e.preventDefault();
		addUser(name, email, phone, dob, city, district, province);
	};
	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group>
				<Form.Control
					type='text'
					placeholder='Name *'
					name='name'
					value={name}
					onChange={(e) => onInputChange(e)}
					required
				/>
			</Form.Group>
			<Form.Group>
				<Form.Control
					type='email'
					placeholder='Email Address *'
					name='email'
					value={email}
					onChange={(e) => onInputChange(e)}
					required
				/>
			</Form.Group>
			<Form.Group>
				<Form.Control
					type='number'
					placeholder='Phone Number *'
					name='phone'
					value={phone}
					onChange={(e) => onInputChange(e)}
					required
				/>
			</Form.Group>
			<Form.Group>
				<Form.Control
					type='text'
					placeholder='DOB (dd/mm/yyyy)*'
					name='dob'
					value={dob}
					onChange={(e) => onInputChange(e)}
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
						onChange={(e) => onInputChange(e)}
						required
					/>
				</Form.Group>
				<Form.Group as={Col}>
					<Form.Control
						type='text'
						placeholder='District  *'
						name='district'
						value={district}
						onChange={(e) => onInputChange(e)}
						required
					/>
				</Form.Group>
			</Row>
			<Form.Group>
				<Form.Control
					as='select'
					name='province'
					value={province}
					onChange={(e) => onInputChange(e)}
					custom
				>
					<option>Input From the Field</option>
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
				Submit
			</Button>
		</Form>
	);
};

export default AddUser;
