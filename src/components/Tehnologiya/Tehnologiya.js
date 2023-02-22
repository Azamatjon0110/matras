import React, { useRef, useState } from 'react';
import {
	BtnEdit,
	BtnDel,
	Li,
	Text,
	Modaltitle,
	BtnBox,
	YesBtn,
	NoBtn,
	NameBox,
	MatnBox,
	VideoBox,
	Input,
} from './Tehnologiya.style';
import { MdDelete, MdEdit } from 'react-icons/md';
import { IconContext } from 'react-icons';
import Modal from 'react-modal';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { EditModalTitle } from '../Toifa/Toifa.style';

export const Tehnologiya = ({ item, setIsChanged }) => {
	const state = useSelector((state) => state);
	const token = state.token.token;
	const customStyle = {
		overlay: {
			backgroundColor: 'rgba(0,0,0,0.3)',
		},
		content: {
			width: '100%',
			maxWidth: '340px',
			height: '387px',
			padding: '25px 24px 20px 24px',
			top: '0',
			left: '0',
			right: '0',
			bottom: '0',
			margin: 'auto',
		},
	};
	const customStyles = {
		overlay: {
			backgroundColor: 'rgba(0,0,0,0.6)',
		},
		content: {
			widText: '100%',
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
	const [modalIsOpen, setIsOpen] = useState(false);
	const [modalOpen, setOpen] = useState(false);

	const nameRef = useRef();
	const linkRef = useRef();
	const descRef = useRef();
	const thubRef = useRef();
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
	const error = () =>
		toast.error('Deleted!', {
			position: 'bottom-right',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});
	const deleteTech = () => {
		axios
			.delete(`http://localhost:1212/admin/technology/${item.id}`, {
				headers: {
					Authorization: token,
				},
			})
			.then((res) => {
				error();
				setIsOpen(false);
				setIsChanged(true);
			})
			.catch((err) => console.log(err));
	};
	const editTech = (evt) => {
		evt.preventDefault();
		axios
			.put(
				`http://localhost:1212/admin/technology/${item.id}`,
				{
					name: nameRef.current.value,
					thumbnail: thubRef.current.value,
					description: descRef.current.value,
					link: linkRef.current.value,
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
				setIsChanged(true);
			})
			.catch((err) => console.log(err));
	};

	return (
		<Li>
			<NameBox>
				<Text>{item.name}</Text>
			</NameBox>
			<MatnBox>
				<Text>{item.description} </Text>
			</MatnBox>
			<VideoBox>
				<Text>{item.link}</Text>
			</VideoBox>

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
					<YesBtn type='button' onClick={deleteTech}>
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
				<form onSubmit={editTech}>
					<EditModalTitle>Tahrirlash</EditModalTitle>
					<Input type='text' ref={nameRef} defaultValue={item.name} />
					<Input type='text' ref={linkRef} defaultValue={item.link} />
					<Input type='text' ref={descRef} defaultValue={item.description} />
					<Input type='text' ref={thubRef} defaultValue={item.thumbnail} />
					<BtnBox>
						<YesBtn type='submit'>Save</YesBtn>
					</BtnBox>
				</form>
			</Modal>
		</Li>
	);
};
