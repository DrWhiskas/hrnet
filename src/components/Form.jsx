import React, { useState } from "react";
import '../style/form.css'

export default function Form(){

    return (
             <>
			<section className="form">
				<form className="form__content">
                    <h2 className="form__content__header">Create</h2>
					<label htmlFor="firstName">Firstname</label>
					<input
						type="text"
						id="firstName"
						name="firstName"

					/>
					<label htmlFor="lastName">Lastname</label>
					<input
						type="text"
						id="lastName"
						name="lastName"

					/>
					<label htmlFor="birthDate">Date of Birth</label>
					<input
						type="date"
						id="birthDate"
						name="birthDate"
		
					/>
					<label htmlFor="start">Start Date</label>
					<input
						type="date"
						id="start"
						name="start"
			
					/>
                    <h3 className="form__address">Address</h3>
                    <label htmlFor="street">Street</label>
                    <input 
                        type="text"
                        name="street"
                        id="street" 
                   
                    />
                    <label htmlFor="street">City</label>
                    <input 
                        type="text"
                        name="city"
                        id="city" 
                  
                    />
                    <label htmlFor="state">State</label>
                    <select 
                        name="State" 
                        id="state"
                    >
                    </select>
                    <label htmlFor="zip-code">Zip Code</label>
                    <input 
                        type="number" 
                        name="zip-code" 
                        id="zip-code" />

                    <label htmlFor="department">Department</label>
                    <select 
                        name="department" 
                        id="department"
                    >
                            <option>Sales</option>
                            <option>Marketing</option>
                            <option>Engineering</option>
                            <option>Human Resources</option>
                            <option>Legal</option>
                    </select>
                    <button className="button">Save</button>
				</form>
                
			</section>
            </>
		);
}