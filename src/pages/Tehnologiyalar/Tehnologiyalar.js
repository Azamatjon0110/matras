import React, { useEffect, useRef, useState } from 'react';
import {
	AddBtn,
	Box,
	BtnAdd,
	BtnWrap,
	CheckBox,
	CheckBoxWrapper,
	CloseBtn,
	EditModalTitle,
	HeaderTop,
	HeaderTopWrap,
	Input,
	InputBox,
	Label,
	LabelCheckbox,
	List,
	MatnBox,
	NameBox,
	Span,
	Table,
	TextCheckBox,
	Th,
	TheadRow,
	User,
	VideoBox,
	Wr,
	Wrap,
	WrapperFirst,
	WrapperSecond,
	WrapperThird,
} from './Tehnologiyalar.style';
import Modal from 'react-modal';
import { IconContext } from 'react-icons';
import { MdClose } from 'react-icons/md';
import { Tehnologiya } from '../../components/Tehnologiya/Tehnologiya';
import { useSelector } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

export const Tehnologiyalar = () => {
	const state = useSelector((state) => state);
	const [isChanged, setIsChanged] = useState(false);
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
			width: '515px',
			maxWidth: '515px',
			height: '360px',
			padding: '0',
			top: '0',
			left: '0',
			right: '0',
			bottom: '0',
			margin: 'auto',
		},
	};
	const [modalOpenAdd, setOpenAdd] = useState(false);
	const [technology, setTechnology] = useState([]);

	function openModalAdd() {
		setOpenAdd(true);
	}
	function closeModalAdd() {
		setOpenAdd(false);
	}

	const nameRef = useRef();
	const linkRef = useRef();
	const thubnailRef = useRef();
	const descRef = useRef();

	const getTech = () => {
		axios
			.get('http://localhost:1212/admin/technology', {
				headers: {
					Authorization: token,
				},
			})
			.then((res) => setTechnology(res.data))
			.catch((err) => console.log(err));
	};

	const submit = (evt) => {
		evt.preventDefault();
		axios
			.post(
				'http://localhost:1212/admin/technology',
				{
					name: nameRef.current.value,
					thumbnail: thubnailRef.current.value,
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
				setOpenAdd(false);
				setIsChanged(!isChanged);
				success();
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getTech();
	}, [isChanged]);

	return (
		<HeaderTop>
			<HeaderTopWrap>
				<User>John Doe</User>
			</HeaderTopWrap>
			<Wr>
				<Table>
					<TheadRow>
						<NameBox>
							<Th>Nomlari</Th>
						</NameBox>
						<MatnBox>
							<Th>Matn</Th>
						</MatnBox>
						<VideoBox>
							<Th>Video</Th>
						</VideoBox>
					</TheadRow>
					<List>
						{technology.map((item) => (
							<Tehnologiya
								key={item.id}
								item={item}
								setIsChanged={setIsChanged}
							/>
						))}
					</List>
				</Table>
				<BtnWrap>
					<BtnAdd type='button' onClick={openModalAdd}>
						Qo'shish
					</BtnAdd>
				</BtnWrap>
			</Wr>
			<ToastContainer />
			<Modal
				isOpen={modalOpenAdd}
				onRequestClose={closeModalAdd}
				style={customStyleEdit}
				contentLabel='Example Modal'
			>
				<IconContext.Provider value={{ size: '158px', color: '#fff' }}>
					<CloseBtn onClick={closeModalAdd}>
						<MdClose size='10px' />
					</CloseBtn>
				</IconContext.Provider>

				<Box>
					<form onSubmit={submit}>
						<EditModalTitle>Qo'shish</EditModalTitle>
						<WrapperFirst>
							<InputBox>
								<Label>Nomi</Label>
								<Input type='text' placeholder='masalan:' ref={nameRef} />
							</InputBox>
							<InputBox>
								<Label>
									Rasm
									<Input type='text' ref={thubnailRef} />
								</Label>
							</InputBox>
						</WrapperFirst>
						<WrapperSecond>
							<InputBox>
								<Label>Nomi</Label>
								<Input type='text' placeholder='masalan:' ref={descRef} />
							</InputBox>
							<InputBox>
								<Label>
									Video
									<Input type='text' ref={linkRef} />
								</Label>
							</InputBox>
						</WrapperSecond>
						<WrapperThird>
							<Wrap>
								<TextCheckBox>Navinla</TextCheckBox>
								<CheckBoxWrapper>
									<LabelCheckbox>
										<CheckBox type='checkbox' />
										<Span className='slider round'></Span>
									</LabelCheckbox>
								</CheckBoxWrapper>
							</Wrap>
							<Wrap>
								<AddBtn type='submit'>Qo'shish</AddBtn>
							</Wrap>
						</WrapperThird>
					</form>
				</Box>
			</Modal>
		</HeaderTop>
	);
};
