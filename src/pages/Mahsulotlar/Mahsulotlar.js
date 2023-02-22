import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import {
	AddBtn,
	Box,
	BtnAdd,
	BtnWrap,
	CaruselBox,
	CaruselItem,
	CheckBox,
	CheckBoxPrice,
	CheckBoxWrapper,
	CloseBtn,
	EditModalTitle,
	Form,
	HeaderTop,
	HeaderTopWrap,
	Input,
	InputBox,
	InputLast,
	InputSearch,
	Label,
	LabelCheck,
	LabelCheckbox,
	LabelImg,
	LabelTextArea,
	List,
	NameBox,
	PriceBox,
	Select,
	SizeBox,
	Span,
	SpanFile,
	StatusBox,
	Table,
	TextArea,
	TextCheckBox,
	Th,
	TheadRow,
	ToifaBox,
	User,
	WeightBox,
	Wr,
	Wrap,
	Wrapper,
} from './Mahsulotlar.style';
import Modal from 'react-modal';
import { IconContext } from 'react-icons';
import { MdClose } from 'react-icons/md';
import { Mahsulot } from '../../components/Mahsulot/Mahsulot';
import './Mahsulot.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

export const Mahsulotlar = () => {
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

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	const { register, handleSubmit } = useForm();
	const [modalOpenAdd, setOpenAdd] = useState(false);
	const [product, setProduct] = useState([]);
	const [category, setCategory] = useState([]);
	const [categoryValue, setCategotyValue] = useState('');
	const [change, setChange] = useState(false);
	function openModalAdd() {
		setOpenAdd(true);
	}
	function closeModalAdd() {
		setOpenAdd(false);
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

	const getProducts = () => {
		axios
			.get('http://localhost:1212/admin/products', {
				headers: {
					Authorization: token,
				},
			})
			.then((res) => {
				setProduct(res.data.products);
				console.log(res.data);
			})
			.catch((err) => console.log(err));
	};

	const handleChange = (evt) => {
		setCategotyValue(evt.target.value);
	};

	const submit = (data) => {
		const formData = new FormData();
		formData.append('name', data.name);
		formData.append('category', categoryValue);
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
		console.log(data);
		axios
			.post(`http://localhost:1212/admin/products/${data.category}`, formData, {
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
		getCategory();
		getProducts();
	}, [isChanged]);

	return (
		<HeaderTop>
			<HeaderTopWrap>
				<Form>
					<InputSearch type='text' placeholder='User' />
				</Form>
				<User>John Doe</User>
			</HeaderTopWrap>
			<Wr>
				<Table>
					<TheadRow>
						<NameBox>
							<Th>Mahsulot nomlari</Th>
						</NameBox>
						<ToifaBox>
							<Th>Toifa</Th>
						</ToifaBox>
						<PriceBox>
							<Th>Narxi</Th>
						</PriceBox>
						<WeightBox>
							<Th>Yuklama</Th>
						</WeightBox>
						<SizeBox>
							<Th>Razmeri</Th>
						</SizeBox>
						<StatusBox>
							<Th>Status</Th>
						</StatusBox>
					</TheadRow>
					<List>
						{product.map((item) => (
							<Mahsulot key={item.id} item={item} setIsChanged={setIsChanged} />
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
			>
				<IconContext.Provider value={{ size: '158px', color: '#fff' }}>
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
									<Select {...register('category')} onChange={handleChange}>
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
										<LabelCheckbox>
											<CheckBox
												type='checkbox'
												onChange={() => {
													setChange((previousChange) => !previousChange);
												}}
												{...register('new')}
											/>
											<Span className='slider round'></Span>
										</LabelCheckbox>
									</CheckBoxWrapper>
								</Wrap>
								<Wrap>
									<TextCheckBox>Active</TextCheckBox>
									<CheckBoxWrapper>
										<LabelCheckbox>
											<CheckBox
												type='checkbox'
												onChange={() => {
													setChange((previousChange) => !previousChange);
												}}
												{...register('isActive')}
											/>
											<Span className='slider round'></Span>
										</LabelCheckbox>
									</CheckBoxWrapper>
								</Wrap>
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
