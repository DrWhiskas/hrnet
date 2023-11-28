import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from '../features/store.js';
import '../style/form.css';
import  statesData from'../media/states.js'
import Modal from './Modal.jsx';

export default function Form() {
	
	const dispatch = useDispatch()
	const newData = useSelector((state) => state.employee)


	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		birthDate: '',
		start: '',
		street: '',
		city: '',
		state: '',
		zipCode: '',
		department: '',
	});
	const [isModalOpen, setIsModalOpen] = useState(false)

	function closeModal(){
		setIsModalOpen(false)
	}
	function openModal(){
		setIsModalOpen(true)
	}

	function handleSubmit(e){
		e.preventDefault()
		
		const isFormValid = Object.values(formData).every(
			(value) => value.trim() !== ''
		);
		if(isFormValid){
			dispatch(addEmployee(formData));
			openModal()
		}else{
			alert('Pas remplis')
		}          
	}
	console.log(newData);


	return (
		<section className="form">
			<form className="form__content" onSubmit={handleSubmit} >
				<h2 className="form__content__header">Create</h2>
				<label htmlFor="firstName">Firstname</label>
				<input
					type="text"
					id="firstName"
					name="firstName"
					value={formData.firstName}
					onChange={(e) =>
						setFormData({ ...formData, firstName: e.target.value })
					}
				/>
				<label htmlFor="lastName">Lastname</label>
				<input
					type="text"
					id="lastName"
					name="lastName"
					value={formData.lastName}
					onChange={(e) =>
						setFormData({ ...formData, lastName: e.target.value })
					}
				/>
				<label htmlFor="birthDate">Date of Birth</label>
				<input
					type="date"
					id="birthDate"
					name="birthDate"
					value={formData.birthDate}
					onChange={(e) =>
						setFormData({ ...formData, birthDate: e.target.value })
					}
				/>
				<label htmlFor="start">Start Date</label>
				<input
					type="date"
					id="start"
					name="start"
					value={formData.start}
					onChange={(e) => setFormData({ ...formData, start: e.target.value })}
				/>
				<h3 className="form__address">Address</h3>
				<label htmlFor="street">Street</label>
				<input
					type="text"
					name="street"
					id="street"
					value={formData.street}
					onChange={(e) => setFormData({ ...formData, street: e.target.value })}
				/>
				<label htmlFor="street">City</label>
				<input
					type="text"
					name="city"
					id="city"
					value={formData.city}
					onChange={(e) => setFormData({ ...formData, city: e.target.value })}
				/>
				<label htmlFor="state">State</label>
				<select
					name="State"
					id="state"
					value={formData.state}
					onChange={(e) => setFormData({ ...formData, state: e.target.value })}
				>
                    <option value=''></option>
                    {statesData.map((state, index) =>(
                        <option key={index}>{state.name}</option>
                    ))}
                </select>
				<label htmlFor="zip-code">Zip Code</label>
				<input
					type="number"
					name="zip-code"
					id="zip-code"
					value={formData.zipCode}
					onChange={(e) =>
						setFormData({ ...formData, zipCode: e.target.value })
					}
				/>

				<label htmlFor="department">Department</label>
				<select
					name="department"
					id="department"
					value={formData.department}
					onChange={(e) =>
						setFormData({ ...formData, department: e.target.value })
					}
				>
					<option value=''></option>
					<option>Sales</option>
					<option>Marketing</option>
					<option>Engineering</option>
					<option>Human Resources</option>
					<option>Legal</option>
				</select>
				<button type='submit' className="button">
					Save
				</button>
			</form>
			{isModalOpen && (
				<Modal
					closeModal={closeModal}
					messageModal='Employee Created !'
				/>
			)}
		</section>
	);
}
