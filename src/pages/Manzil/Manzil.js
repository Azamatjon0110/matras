import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
	AddBtn,
	Box,
	BtnAdd,
	BtnWrap,
	CaruselBox,
	CaruselItem,
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
	LabelTextArea,
	List,
	LocationBox,
	LocBox,
	MatnBox,
	Span,
	SpanFile,
	Table,
	TextArea,
	TextCheckBox,
	Th,
	TheadRow,
	User,
	Wr,
	Wrap,
	Wrapper,
} from './Manzil.style';
import Modal from 'react-modal';
import { IconContext } from 'react-icons';
import { MdClose } from 'react-icons/md';
import Slider from 'react-slick';
import { ManzilItem } from '../../components/ManzilItem/ManzilItem';

import './Carusel.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

export const Manzil = () => {
	const state = useSelector((state) => state);
	const token = state.token.token;
	const [isChanged, setIsChanged] = useState(false);
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
	const error = () =>
		toast.danger('Success!', {
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
			backgroundColor: 'rgba(0,0,0,0.3)',
		},
		content: {
			width: '100%',
			maxWidth: '815px',
			height: '360px',
			padding: '0',
			top: '0',
			left: '0',
			right: '0',
			bottom: '0',
			margin: 'auto',
		},
	};

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	const { register, handleSubmit } = useForm();
	const [modalOpenAdd, setOpenAdd] = useState(false);
	const [locat, setLocat] = useState([]);
	function openModalAdd() {
		setOpenAdd(true);
	}
	function closeModalAdd() {
		setOpenAdd(false);
	}
	const getTech = () => {
		axios
			.get('http://localhost:1212/admin/address', {
				headers: {
					Authorization: token,
				},
			})
			.then((res) => {
				setLocat(res.data);
				console.log(res.data);
			})
			.catch((err) => console.log(err));
	};

	const submit = (data) => {
		const formData = new FormData();
		formData.append('location', data.loc_name);
		formData.append('destination', data.loc_desc);
		formData.append('geolocation', data.loc_url);
		formData.append('images', data.image1[0]);
		formData.append('images', data.image2[0]);
		formData.append('images', data.image3[0]);
		formData.append('isActive', true);
		axios
			.post('http://localhost:1212/admin/address', formData, {
				headers: {
					Authorization: token,
				},
			})
			.then((res) => {
				if (res.status === 201) {
					closeModalAdd();
					success();
				}
			})
			.catch((err) => {
				console.log(err);
				error();
			});
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
						<LocationBox>
							<Th>Manzil</Th>
						</LocationBox>
						<MatnBox>
							<Th>Matn</Th>
						</MatnBox>
						<LocBox>
							<Th>Location</Th>
						</LocBox>
					</TheadRow>
					<List>
						{locat.map((item) => (
							<ManzilItem
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
			<Modal
				isOpen={modalOpenAdd}
				onRequestClose={closeModalAdd}
				style={customStyleEdit}
				contentLabel='Example Modal'
				appElement={document.getElementById('app')}
			>
				<IconContext.Provider size='20px' value={{ color: '#fff' }}>
					<CloseBtn onClick={closeModalAdd}>
						<MdClose size='10px' />
					</CloseBtn>
				</IconContext.Provider>

				<Box>
					<form onSubmit={handleSubmit(submit)}>
						<EditModalTitle>Qo'shish</EditModalTitle>
						<Wrapper>
							<CaruselBox>
								<Slider {...settings}>
									<CaruselItem>
										<Label>
											<input
												type='file'
												name='location_first'
												className='visually-hidden'
												{...register('image2')}
											/>
											<SpanFile></SpanFile>
										</Label>
									</CaruselItem>
									<CaruselItem>
										<Label>
											<input
												type='file'
												name='location_second'
												className='visually-hidden'
												{...register('image3')}
											/>
											<SpanFile></SpanFile>
										</Label>
									</CaruselItem>
									<CaruselItem>
										<Label>
											<input
												type='file'
												name='location_third'
												className='visually-hidden'
												{...register('image1')}
											/>
											<SpanFile></SpanFile>
										</Label>
									</CaruselItem>
								</Slider>
							</CaruselBox>
							<InputBox>
								<Label>
									Manzil
									<Input {...register('loc_name')} type='text' />
								</Label>
								<Label>
									Location
									<Input {...register('loc_url')} type='text' />
								</Label>
								<Wrap>
									<TextCheckBox>Navinla</TextCheckBox>
									<CheckBoxWrapper>
										<LabelCheckbox>
											<CheckBox type='checkbox' />
											<Span className='slider round'></Span>
										</LabelCheckbox>
									</CheckBoxWrapper>
								</Wrap>
							</InputBox>
							<InputBox>
								<LabelTextArea>
									Matn
									<TextArea {...register('loc_desc')} />
								</LabelTextArea>
								<AddBtn type='submit'>Saqlash</AddBtn>
							</InputBox>
						</Wrapper>
					</form>
				</Box>
			</Modal>
			<ToastContainer />
		</HeaderTop>
	);
};
