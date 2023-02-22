import React, { useState } from 'react';
import {
	BtnEdit,
	BtnDel,
	Li,
	Text,
	Modaltitle,
	BtnBox,
	YesBtn,
	NoBtn,
	MatnBox,
	LocationBox,
	LocBox,
} from './ManzilItem.style';
import { MdDelete, MdEdit } from 'react-icons/md';
import { IconContext } from 'react-icons';
import Modal from 'react-modal';
import { BsGeoAltFill } from 'react-icons/bs';

export const ManzilItem = ({ item, setIsChanged }) => {
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

	return (
		<Li>
			<LocationBox>
				<Text>{item.location}</Text>
			</LocationBox>
			<MatnBox>
				<Text>{item.destination}</Text>
			</MatnBox>
			<LocBox>
				<Text>
					<BsGeoAltFill
						style={{ width: '18px', height: '18px', color: '#D61F1F' }}
					/>
				</Text>
			</LocBox>

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
					<YesBtn type='button'>Yes</YesBtn>
				</BtnBox>
			</Modal>
			<Modal
				isOpen={modalOpen}
				onRequestClose={closeModalEdit}
				style={customStyles}
				contentLabel='Example Modal'
			>
				<Modaltitle>Tahrirlash</Modaltitle>
				<BtnBox>
					<NoBtn type='button' onClick={closeModalEdit}>
						Yo'q
					</NoBtn>
					<YesBtn type='button'>Yes</YesBtn>
				</BtnBox>
			</Modal>
		</Li>
	);
};
