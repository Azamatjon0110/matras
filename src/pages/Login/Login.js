import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../redux/token/tokenAction';

import { ToastContainer, toast } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.min.css';
import { useDispatch } from 'react-redux';
import './login.styled.js';
import {
	Btn,
	LoginBox,
	LoginInput,
	LoginPassword,
	LoginTitle,
} from './login.styled.js';

export const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const error = () =>
		toast.error('🦄 Error', {
			position: 'bottom-right',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});
	const { reset, handleSubmit, register } = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const submit = () => {
		axios
			.post('http://localhost:1212/admin/login', {
				userName: 'admin',
				password: 'admin',
			})
			.then((res) => {
				console.log(res);
				if (res.status === 200) {
					localStorage.setItem('token', res.data.token);
					dispatch(getToken(localStorage.getItem('token')));
					navigate('/buyurtmalar');
					reset();
				}
			})
			.catch((err) => {
				console.log(err);
				error();
			});
	};

	return (
		<div className='container'>
			<LoginBox>
				<LoginTitle>Kirish</LoginTitle>
				<form onSubmit={handleSubmit(submit)}>
					<LoginInput
						placeholder='Login'
						{...register('login', { required: 'true' })}
					/>

					<LoginPassword
						{...register('password', { required: 'true' })}
						type='password'
						placeholder='Password'
					/>
					<Btn type='submit'>Kirish</Btn>
				</form>
			</LoginBox>
			<ToastContainer />
		</div>
	);
};
