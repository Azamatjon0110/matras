import React, { useEffect, useState } from 'react';
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
	ToifaBox,
	PriceBox,
	WeightBox,
	SizeBox,
	StatusBox,
	Label,
	CheckBox,
	Span,
	CloseBtn,
	Box,
	EditModalTitle,
	Wrapper,
	CaruselBox,
	CaruselItem,
	LabelImg,
	SpanFile,
	InputBox,
	Select,
	Input,
	InputLast,
	LabelCheck,
	CheckBoxPrice,
	LabelTextArea,
	TextArea,
	Wrap,
	TextCheckBox,
	CheckBoxWrapper,
	LabelCheckbox,
	AddBtn,
	LabelSwitch,
} from './Mahsulot.style';
import { MdClose, MdDelete, MdEdit } from 'react-icons/md';
import { IconContext } from 'react-icons';
import Modal from 'react-modal';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { useForm } from 'react-hook-form';

export const Mahsulot = ({ item, setIsChanged }) => {
	const state = useSelector((state) => state);
	const token = state.token.token;
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
	const customStyleEdit = {
		overlay: {
			backgroundColor: 'rgba(0,0,0,0.3)',
		},
		content: {
			width: '100%',
			maxWidth: '1090px',
			height: '460px',
			padding: '0',
			top: '0',
			left: '0',
			right: '0',
			bottom: '0',
			margin: 'auto',
		},
	};

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

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	// const handleChange = (evt) => {
	// 	setCategotyValue(evt.target.value);
	// };

	const [modalIsOpen, setIsOpen] = useState(false);
	const [modalOpen, setOpen] = useState(false);
	const [change, setChange] = useState(false);
	const { register, handleSubmit } = useForm();
	const [category, setCategory] = useState([]);
	const [categoryValue, setCategotyValue] = useState('');

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

	const getCategory = () => {
		axios
			.get('http://localhost:1212/admin/categories', {
				headers: {
					Authorization: token,
				},
			})
			.then((res) => {
				setCategory(res.data);
			})
			.catch((err) => console.log(err));
	};

	console.log(categoryValue);
	const deleteProduct = () => {
		axios
			.delete(`http://localhost:1212/admin/products/${item.id}`, {
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
	const editProduct = (data) => {
		const formData = new FormData();
		// console.log(categoryValue);
		formData.append('name', data.name);
		formData.append('category');
		formData.append('weight', data.weight);
		formData.append('cost', data.cost);
		formData.append('size', data.size);
		formData.append('capacity', data.capacity);
		formData.append('newCost', data.newCost);
		formData.append('discount', data.discount);
		formData.append('new', data.new);
		formData.append('body', data.body);
		formData.append('warranty', data.warranty);
		formData.append('images', data.image1[0]);
		formData.append('images', data.image2[0]);
		formData.append('images', data.image3[0]);
		formData.append('isActive', true);
		axios
			.put(`http://localhost:1212/admin/products/${data.category}`, formData, {
				headers: {
					Authorization: token,
				},
			})
			.then((res) => {
				if (res.status === 201) {
					closeModalEdit();
					success();
				}
			})
			.catch((err) => {
				console.log(err);
				error();
			});
	};

	useEffect(() => {
		getCategory();
		console.log(item);
	}, []);

	return (
		<Li>
			<NameBox>
				<Text>{item.name}</Text>
			</NameBox>
			<ToifaBox>
				<Text>{item.category}</Text>
			</ToifaBox>
			<PriceBox>
				<Text>{item.cost} so’m</Text>
			</PriceBox>
			<WeightBox>
				<Text>{item.weight}</Text>
			</WeightBox>
			<SizeBox>
				<Text>{item.size}</Text>
			</SizeBox>
			<StatusBox>
				<LabelSwitch className='switch'>
					<CheckBox type='checkbox' />
					<Span className='slider round'></Span>
				</LabelSwitch>
			</StatusBox>
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
					<YesBtn type='button' onClick={deleteProduct}>
						Yes
					</YesBtn>
				</BtnBox>
			</Modal>
			<Modal
				isOpen={modalOpen}
				onRequestClose={closeModalEdit}
				style={customStyleEdit}
				contentLabel='Example Modal'
			>
				<IconContext.Provider value={{ size: '158px', color: '#fff' }}>
					<CloseBtn onClick={closeModalEdit}>
						<MdClose size='10px' />
					</CloseBtn>
				</IconContext.Provider>

				<Box>
					<form onSubmit={handleSubmit(editProduct)}>
						<EditModalTitle>Tahrirlash</EditModalTitle>
						<Wrapper>
							<CaruselBox>
								<Slider {...settings}>
									<CaruselItem>
										<LabelImg>
											<input
												type='file'
												className='visually-hidden'
												{...register('image1')}
											/>
											<SpanFile></SpanFile>
										</LabelImg>
									</CaruselItem>
									<CaruselItem>
										<LabelImg>
											<input
												type='file'
												className='visually-hidden'
												{...register('image2')}
											/>
											<SpanFile></SpanFile>
										</LabelImg>
									</CaruselItem>
									<CaruselItem>
										<LabelImg>
											<input
												type='file'
												className='visually-hidden'
												{...register('image3')}
											/>
											<SpanFile></SpanFile>
										</LabelImg>
									</CaruselItem>
								</Slider>
							</CaruselBox>
							<InputBox>
								<Label>
									Toifalar
									<Select
										{...register('category')}
										onChange={(evt) => {
											setCategotyValue(evt.target);
										}}
									>
										{category.map((item) => (
											<option key={item.id} value={item.id}>
												{item.category}
											</option>
										))}
									</Select>
								</Label>
								<Label>
									Tovar nomi
									<Input
										placeholder='masalan: Lux Soft Memory'
										{...register('name')}
									/>
								</Label>
								<Label>
									Narxi
									<Input
										placeholder='masalan: 20 000'
										{...register('cost')}
										type='number'
									/>
								</Label>
								<Label>
									Yuklama
									<InputLast
										placeholder='masalan: 200 kg'
										{...register('weight')}
										type='number'
									/>
								</Label>
							</InputBox>
							<InputBox>
								<Label>
									Razmeri
									<Input
										placeholder='masalan: 200 x 140 x 40'
										{...register('size')}
									/>
								</Label>
								<Label>
									Kafolat
									<Input
										placeholder='masalan: 1 yil'
										{...register('warranty')}
										type='number'
									/>
								</Label>
								<Label>
									Sig'm
									<Input placeholder='masalan: 2' {...register('capacity')} />
								</Label>
								<Label>
									Aksiyadagi Narxi
									<InputLast
										placeholder='masalan: 1 200 000'
										{...register('newCost')}
										type='number'
									/>
									<LabelCheck>
										<input className='visually-hidden' type='checkbox' />
										<CheckBoxPrice type='checkbox' {...register('discount')} />
									</LabelCheck>
								</Label>
							</InputBox>
							<InputBox>
								<LabelTextArea>
									Matn
									<TextArea {...register('body')} />
								</LabelTextArea>
								<Wrap>
									<TextCheckBox>New</TextCheckBox>
									<CheckBoxWrapper>
										<LabelSwitch>
											<CheckBox
												type='checkbox'
												onChange={() => {
													setChange((previousChange) => !previousChange);
												}}
												{...register('new')}
											/>
											<Span className='slider round'></Span>
										</LabelSwitch>
									</CheckBoxWrapper>
								</Wrap>
								<Wrap>
									<TextCheckBox>Active</TextCheckBox>
									<CheckBoxWrapper>
										<LabelSwitch>
											<CheckBox
												type='checkbox'
												onChange={() => {
													setChange((change) => !change);
												}}
												{...register('isActive')}
											/>
											<Span className='slider round'></Span>
										</LabelSwitch>
									</CheckBoxWrapper>
								</Wrap>
								<AddBtn type='submit'>Saqlash</AddBtn>
							</InputBox>
						</Wrapper>
					</form>
				</Box>
			</Modal>
		</Li>
	);
};
