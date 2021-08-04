import { useState, useEffect, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const UserContext = createContext();

const UserContextProvider = (props) => {
	// Initial Information
	const [users, setUsers] = useState([
		{
			id: uuidv4(), //Random id generated
			name: 'Bajra Manandhar',
			email: 'manandhar.bajra24@gmail.com',
			phone: 9860809199,
			dob: '30/04/2001',
			city: 'Kathmandu',
			district: 'Kathmandu',
			province: 3,
		},
	]);

	// Initial values to the local storage
	useEffect(() => {
		setUsers(JSON.parse(localStorage.getItem('users')));
	}, []);

	useEffect(() => {
		localStorage.setItem('users', JSON.stringify(users));
	});

	//send functionality for gathering user data
	const addUser = (name, email, phone, dob, city, district, province) => {
		setUsers([
			...users,
			{
				id: uuidv4(),
				name,
				email,
				phone,
				dob,
				city,
				district,
				province,
			},
		]);
	};

	// Function to Delete Users
	const deleteUser = (id) => {
		setUsers(users.filter((user) => user.id !== id));
	};

	// Funciton to Update Users
	const updateUser = (id, updatedUser) => {
		setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
	};

	// Sending information as value of the provider
	return (
		<UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
