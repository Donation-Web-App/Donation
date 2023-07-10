/** @format */

import React, {useState} from "react";
import input from "../components/input";


// INPUT FIELD DATA


	const data = [
		{
			type: "text",
			name: "firstname",
            placeholder: "First Name",
        
		},
		{
			type: "text",
			name: "lastname",
            placeholder: "Last Name",
         
		},
		{
			type: "email",
			name: "email",
            placeholder: "E-mail",
         
		},
		{
			type: "password",
			name: "password",
            placeholder: "Password",
         
		},
		{
			type: "password",
			name: "confirm password",
            placeholder: "Confirm Password",
         
		},
		
];

    


function login() {

    const [value, setValue] = useState('');
   const handleChange = (e) => {
			e.preventDefault();
			setValue(...value, [(data.name = e.target.value)]);
		};
    return (
			<>
				{data.map((item) => {
					<input
						type={item.type}
						name={item.name}
						placeholder={item.placeholder}
						onChange={handleChange}
						value={data.name}
					/>;
				})}
			</>
		);
}
