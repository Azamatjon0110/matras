import React, { useState, useEffect } from 'react';
import { Toifa } from '../../components/Toifa/Toifa';
import {
	AddBtn,
	Box,
	BtnAdd,
	BtnWrap,
	CategoryBox,
	CheckBox,
	CheckBoxWrapper,
	CloseBtn,
	EditModalTitle,
	HeaderTop,
	HeaderTopWrap,
	Input,
	Label,
	LabelCheckbox,
	List,
	Span,
	Table,
	TextCheckBox,
	Th,
	TheadRow,
	User,
	Wr,
	Wrap,
} from './Toifalar.style';
import Modal from 'react-modal';
import { IconContext } from 'react-icons';
import { MdClose } from 'react-icons/md';
import { useRef } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';
Modal.setAppElement('#root');

export const Toifalar = () => {
	const state = useSelector((state) => state);
	const token = state.token.token;
	const success = () =>
		toast.success('Success!', {
			position: 'bottom-right',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});

	const customStyleEdit = {
		overlay: {
			backgroundColor: 'rgba(0,0,0,0.6)',
		},
		content: {
			width: '100%',
			maxWidth: '270px',
			height: '310px',
			padding: '0',
			top: '0',
			left: '0',
			right: '0',
			bottom: '0',
			margin: 'auto',
		},
	};
	const categoryRef = useRef();
	const [categories, setCategories] = useState([]);
	const [modalOpen, setOpen] = useState(false);
	const [isChanged, setIsChanged] = useState(false);
	function openModal() {
		setOpen(true);
	}
	function closeModal() {
		setOpen(false);
	}

	const submit = (evt) => {
		evt.preventDefault();
		axios
			.post(
				'http://localhost:1212/admin/categories',
				{
					category: categoryRef.current.value,
					isActive: true,
				},
				{
					headers: {
						Authorization: token,
					},
				}
			)
			.then((res) => {
				success();
				setIsChanged(true);
				categoryRef.current.value = '';
				setOpen(false);
			})
			.catch((err) => console.log(err));
	};

	const getCategory = () => {
		axios
			.get('http://localhost:1212/admin/categories', {
				headers: {
					Authorization: token,
				},
			})
			.then((res) => {
				if (res.status === 200) {
					setCategories(res.data);
				}
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getCategory();
	}, [isChanged]);

	return (
		<HeaderTop>
			<HeaderTopWrap>
				<User>John Doe</User>
			</HeaderTopWrap>
			<Wr>
				<Table>
					<TheadRow>
						<CategoryBox>
							<Th>Toifalar</Th>
						</CategoryBox>
					</TheadRow>
					<List>
						{categories.map((item) => (
							<Toifa key={item.id} item={item} setIsChanged={setIsChanged} />
						))}
					</List>
				</Table>
				<BtnWrap>
					<BtnAdd type='button' onClick={openModal}>
						Qo'shish
					</BtnAdd>
				</BtnWrap>
			</Wr>
			<Modal
				isOpen={modalOpen}
				onRequestClose={closeModal}
				style={customStyleEdit}
				contentLabel='Example Modal'
			>
				<IconContext.Provider value={{ size: '158px', color: '#fff' }}>
					<CloseBtn onClick={closeModal}>
						<MdClose size='10px' />
					</CloseBtn>
				</IconContext.Provider>

				<Box>
					<form onSubmit={submit}>
						<EditModalTitle>Qo'shish</EditModalTitle>
						<Label>Kategoriya nomi</Label>
						<Input
							type='text'
							placeholder='masalan Model B'
							ref={categoryRef}
						/>
						<Wrap>
							<TextCheckBox>Holat</TextCheckBox>
							<CheckBoxWrapper>
								<LabelCheckbox>
									<CheckBox type='checkbox' />
									<Span class='slider round'></Span>
								</LabelCheckbox>
							</CheckBoxWrapper>
						</Wrap>
						<AddBtn type='submit'>Qo'shish</AddBtn>
					</form>
				</Box>
			</Modal>
			<ToastContainer />
		</HeaderTop>
	);
};
