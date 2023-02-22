import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Customers } from '../Customers/Customers';
import { Buyurtmalar } from '../Buyurtmalar/Buyurtmalar';
import { Wrap } from './Home.style';
import { Toifalar } from '../Toifalar/Toifalar';
import { Manzil } from '../Manzil/Manzil';
import { Tehnologiyalar } from '../Tehnologiyalar/Tehnologiyalar';
import { Mahsulotlar } from '../Mahsulotlar/Mahsulotlar';

export const Home = () => {
	const navigate = useNavigate();
	const token = localStorage.getItem('token');

	// useEffect(() => {
	// 	if (!token) {
	// 		navigate('/login');
	// 	} else {
	// 		navigate('/buyurtmalar');
	// 	}
	// });
	return (
		<>
			<Wrap>
				<Header />
				<Routes>
					<Route path='buyurtmalar' element={<Buyurtmalar />} />
					<Route path='customers' element={<Customers />} />
					<Route path='toifalar' element={<Toifalar />} />
					<Route path='mahsulotlar' element={<Mahsulotlar />} />
					<Route path='texnologiyalar' element={<Tehnologiyalar />} />
					<Route path='manzil' element={<Manzil />} />
				</Routes>
			</Wrap>
		</>
	);
};
