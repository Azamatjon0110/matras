import React, { useState } from 'react';
import {
	Btn,
	BtnBox,
	CheckBox,
	DateBox,
	IDBox,
	Label,
	Li,
	Modaltitle,
	NoBtn,
	PhoneBox,
	Span,
	SwitchBox,
	Text,
	YesBtn,
} from './Customer.style';

import { MdDelete } from 'react-icons/md';
import { IconContext } from 'react-icons';
import Modal from 'react-modal';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { toast } from 'react-toastify';

export const Customer = ({ item, setIsChanged }) => {
	const [modalIsOpen, setIsOpen] = useState(false);

	const state = useSelector((state) => state);
	const token = state.token.token;
	const error = () =>
		toast.error('Deleted!', {
			position: 'bottom-right',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});
	const customStyles = {
		overlay: {
			backgroundColor: 'rgba(0,0,0,0.6)',
		},
		content: {
			width: '100%',
			maxWidth: '340px',
			height: '130px',
			padding: '25px 24px 20px 24px',
			top: '0',
			left: '0',
			right: '0',
			bottom: '0',
			margin: 'auto',
		},
	};
	function openModal() {
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
	}

	const deleteCategory = () => {
		axios
			.delete(`http://localhost:1212/admin/categories/${item.id}`, {
				headers: {
					Authorization: token,
				},
			})
			.then((res) => {
				error();
				setIsChanged(true);
				closeModal();
			})
			.catch((err) => console.log(err));
	};
	return (
		<Li>
			<IDBox>
				<Text>1</Text>
			</IDBox>
			<DateBox>
				<Text>12:13-12.05.2021</Text>
			</DateBox>
			<PhoneBox>
				<Text>+998 90 151 12 23</Text>
			</PhoneBox>
			<SwitchBox>
				<Label class='switch'>
					<CheckBox type='checkbox' />
					<Span class='slider round'></Span>
				</Label>
			</SwitchBox>
			<IconContext.Provider
				value={{
					color: '#D61F1F',
					size: '21px',
				}}
			>
				<Btn onClick={openModal}>
					<MdDelete />
				</Btn>
			</IconContext.Provider>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel='Example Modal'
			>
				<Modaltitle>Haqiqatdan ham o’chirmoqchimisiz?</Modaltitle>
				<BtnBox>
					<NoBtn type='button' onClick={closeModal}>
						Yo'q
					</NoBtn>
					<YesBtn type='button' onClick={deleteCategory}>
						Yes
					</YesBtn>
				</BtnBox>
			</Modal>
		</Li>
	);
};
