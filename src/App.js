import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { Login } from './pages/Login/Login';
import { useSelector } from 'react-redux';
import { Home } from './pages/Home/Home';
function App() {
	const state = useSelector((state) => state);
	const navigate = useNavigate();
	const token = state.token.token;
	// const token = localStorage.getItem('token');
	// if (!token) {
	// 	navigate('/login');
	// } else {
	// 	navigate('/buyruqlar');
	// }

	return (
		<>
			<Routes>
				<Route path='/*' element={<Home />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</>
	);
}

export default App;
