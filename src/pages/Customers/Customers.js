import React, { useState, useEffect, useRef } from 'react';
import { Customer } from '../../components/Customer.js/Customer';
import {
	Form,
	HeaderTop,
	HeaderTopWrap,
	IDBox,
	Input,
	List,
	NameBox,
	PhoneBox,
	SwitchBox,
	Table,
	Th,
	TheadRow,
	User,
} from './Customers.style';

import axios from 'axios';
import { useSelector } from 'react-redux';

export const Customers = () => {
	const state = useSelector((state) => state);
	const token = state.token.token;
	const [customers, setCustomers] = useState([]);
	const [isChanged, setIsChanged] = useState(false);
	const customref = useRef();

	const submit = (evt) => {
		evt.preventDefault();
	};

	const getCategory = () => {
		axios
			.get('http://localhost:1212/admin/customers', {
				headers: {
					Authorization: token,
				},
			})
			.then((res) => {
				if (res.status === 200) {
					setCustomers(res.data);
				}
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		// getCategory();
	}, [isChanged]);
	return (
		<HeaderTop>
			<HeaderTopWrap>
				<Form omSubmit={submit}>
					<Input type='text' placeholder='User' ref={customref} />
				</Form>
				<User>John Doe</User>
			</HeaderTopWrap>
			<Table>
				<TheadRow>
					<IDBox>
						<Th>ID</Th>
					</IDBox>
					<NameBox>
						<Th>Sana</Th>
					</NameBox>
					<PhoneBox>
						<Th>Telefon raqami</Th>
					</PhoneBox>
					<SwitchBox>
						<Th>Qayta aloqa</Th>
					</SwitchBox>
				</TheadRow>
				<List>
					{customers.map((item) => (
						<Customer setIsChanged={setIsChanged} key={item.id} item={item} />
					))}
				</List>
			</Table>
		</HeaderTop>
	);
};
