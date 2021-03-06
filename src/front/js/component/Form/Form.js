import React from "react";
import { any, arrayOf, func, shape, string } from "prop-types";

import "./styles.scss";

const Form = ({ inputsType, buttonLabel, inputs, setInputs, onSubmit }) => {
	return (
		<div className="form">
			{inputsType.map(({ label, type, placeholder, width }, index) => (
				<div key={label + index} className="input-container" style={{ width: `${width}` }}>
					<label className="input-title">{label}</label>
					<input
						type={
							type === "password" || type === "repeatPassword"
								? "password"
								: type === "email"
									? "email"
									: "text"
						}
						placeholder={placeholder}
						className="form-control input"
						aria-label="Default"
						aria-describedby="inputGroup-sizing-default"
						value={inputs[type]}
						onChange={e => setInputs({ ...inputs, [type]: e.target.value })}
					/>
				</div>
			))}
			<button type="submit" className="btn btn-lg submit-button" onClick={onSubmit}>
				{buttonLabel}
			</button>
		</div>
	);
};

Form.propTypes = {
	inputsType: arrayOf(
		shape({
			type: string,
			placeholder: string,
			label: string,
			width: string
		})
	),
	buttonLabel: string,
	inputs: any,
	setInputs: any,
	onSubmit: func
};

export default Form;
