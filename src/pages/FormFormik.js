import React, {useState} from "react";
import {Button} from "antd";
import {Form} from "formik-antd";
import {Formik} from "formik";
import * as Yup from "yup";
import {ErrorValidator} from "../components/Error/Error";

import "formik-antd/es/input/style";
import InputItem from "../components/Input/CustomInput";
import {CardName} from "../components/NameCard";

export const FormFormik = () => {
	const [vals, setVals] = useState({});
	const [allValues, setAllValues] = useState([]);

	const SignupSchema = Yup.object().shape({
		firstName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
		lastName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
		email: Yup.string().email("Invalid email").required("Required"),
	});

	const nameProps = () => {
		return {
			name: "firstName",
			type: "text",
			placeholder: "name",
			label: "Name",
		};
	};

	const lastNameProps = () => {
		return {
			name: "lastName",
			type: "text",
			placeholder: "Last Name",
			label: "Last Name",
		};
	};

	const emailProps = () => {
		return {
			name: "email",
			type: "email",
			placeholder: "Email",
			label: "Email",
		};
	};

	const addNewChild = (newValue) => {
		let newChild = {
			...newValue,
			occupation: "Developer",
			status: "active",
		};
		let newValues = [...allValues, newChild];
		setAllValues(newValues);
	};

	return (
		<div>
			<h1>Add a new Dev to your team.</h1>
			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					email: "",
				}}
				validationSchema={SignupSchema}
				onSubmit={(values) => {
					setVals(values);
					addNewChild(values);
				}}
			>
				{({errors, touched}) => (
					<Form>
						<InputItem {...nameProps()} />
						<ErrorValidator err={errors.firstName} touch={touched.firstName} />

						<InputItem {...lastNameProps()} />
						<ErrorValidator err={errors.lastName} touch={touched.lastName} />

						<InputItem {...emailProps()} />
						<ErrorValidator err={errors.email} touch={touched.email} />

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>

			<ul>
				{allValues.map((item) => (
					<li>
						<CardName {...item} />
					</li>
				))}
			</ul>
		</div>
	);
};
