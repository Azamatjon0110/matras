import React, { useRef, useState } from 'react';
import {
	BtnEdit,
	BtnDel,
	CategoryBox,
	Li,
	Text,
	Modaltitle,
	BtnBox,
	YesBtn,
	NoBtn,
	Input,
	EditModalTitle,
} from './Toifa.style';
import { MdDelete, MdEdit } from 'react-icons/md';
import { IconContext } from 'react-icons';
import Modal from 'react-modal';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { toast } from 'react-toastify';

export const Toifa = ({ item, setIsChanged }) => {
	const state = useSelector((state) => state);
	const token = state.token.token;
	const toifaRef = useRef();
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
	Modal.setAppElement('#root');
	const customStyles = {
		overlay: {
			backgroundColor: 'rgba(0,0,0,0.3)',
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

	const customStyle = {
		overlay: {
			backgroundColor: 'rgba(0,0,0,0.3)',
		},
		content: {
			width: '100%',
			maxWidth: '340px',
			height: '190px',
			padding: '25px 24px 20px 24px',
			top: '0',
			left: '0',
			right: '0',
			bottom: '0',
			margin: 'auto',
		},
	};
	const [modalIsOpen, setIsOpen] = useState(false);
	const [modalOpen, setOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
	}

	function openModalEdit() {
		setOpen(true);
	}
	function closeModalEdit() {
		setOpen(false);
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
			})
			.catch((err) => console.log(err));
	};
	const editCategory = (evt) => {
		evt.preventDefault();
		axios
			.put(
				`http://localhost:1212/admin/categories/${item.id}`,
				{
					category: toifaRef.current.value,
					isActive: true,
				},
				{
					headers: {
						Authorization: token,
					},
				}
			)
			.then((res) => {
				setOpen(false);
				console.log(res);
				setIsChanged(true);
			})
			.catch((err) => console.log(err));
	};

	return (
		<Li>
			<CategoryBox>
				<Text>{item.category}</Text>
			</CategoryBox>
			<IconContext.Provider
				value={{
					color: '#000',
					size: '21px',
				}}
			>
				<BtnEdit onClick={openModalEdit}>
					<MdEdit />
				</BtnEdit>
			</IconContext.Provider>

			<IconContext.Provider
				value={{
					color: '#D61F1F',
					size: '21px',
				}}
			>
				<BtnDel onClick={openModal}>
					<MdDelete />
				</BtnDel>
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
					<YesBtn
						type='button'
						onClick={() => {
							closeModal();
							deleteCategory();
						}}
					>
						Yes
					</YesBtn>
				</BtnBox>
			</Modal>
			<Modal
				isOpen={modalOpen}
				onRequestClose={closeModalEdit}
				style={customStyle}
				contentLabel='Example Modal'
			>
				<form onSubmit={editCategory}>
					<EditModalTitle>Tahrirlash</EditModalTitle>
					<Input type='text' defaultValue={item.category} ref={toifaRef} />
					<BtnBox>
						<YesBtn type='submit'>Save</YesBtn>
					</BtnBox>
				</form>
			</Modal>
		</Li>
	);
};
