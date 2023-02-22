import styled from 'styled-components';

export const Li = styled.li`
	width: 100%;
	display: flex;
	align-items: center;
	padding: 13px 0;
	border-right: 1px solid #01384d4d;
	border-bottom: 1px solid #01384d4d;
	border-left: 1px solid #01384d4d;
`;

export const NameBox = styled.div`
	width: 200px;
	text-align: center;
`;

export const ToifaBox = styled.div`
	width: 120px;
	text-align: center;
`;

export const PriceBox = styled.div`
	width: 180px;
	text-align: center;
`;

export const WeightBox = styled.div`
	width: 120px;
	text-align: center;
`;

export const SizeBox = styled.div`
	width: 160px;
	text-align: center;
`;

export const StatusBox = styled.div`
	width: 100px;
	text-align: center;
`;

export const Label = styled.label`
	position: relative;
	width: 45px;
	height: 24px;
`;

export const LabelSwitch = styled.label`
	position: relative;
	display: inline-block;
	width: 45px;
	height: 24px;
`;

export const Span = styled.span`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #ccc;
	transition: 0.4s;
	border-radius: 34px;
	&:before {
		position: absolute;
		content: '';
		height: 19px;
		width: 18px;
		top: 3px;
		left: 3px;
		bottom: 4px;
		background-color: #fff;
		transition: 0.4s;
		border-radius: 50%;
	}
`;

export const Text = styled.p`
	margin: 0;
	font-weight: 500;
	font-size: 15px;
	line-height: 18px;
	color: #000000;
`;

export const BtnDel = styled.button`
	margin-right: 28px;
	margin-left: 0;
	width: 34px;
	height: 34px;
	border-radius: 5px;
	background-color: #d61f1f1a;
	border: 1px solid transparent;
	cursor: pointer;
`;

export const BtnEdit = styled.button`
	margin-right: 10px;
	margin-left: auto;
	width: 34px;
	height: 34px;
	border-radius: 5px;
	background-color: #01384d1a;
	border: 1px solid transparent;
	cursor: pointer;
`;

export const Modaltitle = styled.h3`
	margin-top: 0;
	margin-bottom: 22px;
	text-align: center;
	font-weight: 500;
	font-size: 15px;
	line-height: 18px;
	color: #000000;
`;

export const BtnBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: end;
`;

export const NoBtn = styled.button`
	padding: 9px 20px;
	margin-right: 10px;
	font-weight: 600;
	font-size: 14px;
	line-height: 17px;
	color: #000000;
	background-color: transparent;
	border: none;
	cursor: pointer;
`;

export const YesBtn = styled.button`
	padding: 9px 20px;
	font-weight: 600;
	font-size: 14px;
	line-height: 17px;
	color: #d61f1f;
	background-color: #d61f1f1a;
	border-radius: 5px;
	border: none;
	cursor: pointer;
`;

export const CloseBtn = styled.button`
	display: block;
	width: 30px;
	height: 30px;
	margin-right: 0;
	margin-left: auto;
	background-color: #01384d;
	border: none;
`;

export const Box = styled.div`
	padding: 0 25px 25px 25px;
`;

export const Input = styled.input`
	width: 100%;
	margin-top: 10px;
	margin-bottom: 25px;
	padding: 12px 15px;
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	&::placeholder {
		color: #000000;
		opacity: 0.4;
	}
`;

export const Select = styled.select`
	width: 100%;
	margin-top: 10px;
	margin-bottom: 25px;
	padding: 12px 15px;
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 5px;
`;

export const InputLast = styled.input`
	width: 100%;
	margin-top: 10px;
	padding: 12px 15px;
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	&::placeholder {
		color: #000000;
		opacity: 0.4;
	}
`;

export const Wrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 25px;
`;
export const TextCheckBox = styled.p`
	margin: 0;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #000000;
`;

export const CheckBoxWrapper = styled.div`
	position: relative;
	right: 0;
	left: 0;
`;

export const LabelCheckbox = styled.label`
	position: relative;
	display: inline-block;
	width: 40px;
	height: 21px;
`;

export const EditModalTitle = styled.h3`
	margin-top: 0;
	margin-bottom: 25px;
	font-weight: 600;
	font-size: 18px;
	line-height: 22px;
`;

export const CheckBox = styled.input`
	opacity: 0;
	width: 0;
	height: 0;
	&:checked + ${Span} {
		background-color: #12af1833;
	}
	&:checked + ${Span}::before {
		transform: translateX(19px);
		background-color: #12af18;
	}
`;

export const AddBtn = styled.button`
	width: 100%;
	display: block;
	margin-top: 53px;
	margin-bottom: 0;
	padding: 14px;
	font-weight: 600;
	font-size: 14px;
	line-height: 17px;
	color: #ffffff;
	background-color: #01384d;
	border: none;
	border-radius: 7px;
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
`;

export const LabelTextArea = styled.label`
	display: block;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #000000;
`;

export const TextArea = styled.textarea`
	padding: 10px;
	width: 100%;
	height: 127px;
	margin-top: 10px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	resize: none;
`;

export const InputBox = styled.div`
	width: 100%;
	max-width: 220px;
`;

export const SpanFile = styled.span`
	position: absolute;
	width: 100%;
	height: 100%;
	cursor: pointer;
`;

export const CaruselBox = styled.div`
	width: 230px;
	height: 230px;
	border-radius: 8px;
	background-color: #01384d1d;
`;

export const CaruselItem = styled.div`
	display: block;
	width: 100%;
	height: 100%;
`;

export const LabelCheck = styled.label`
	position: absolute;
	top: 5px;
	right: 7px;
	display: block;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #000000;
`;

export const CheckBoxPrice = styled.input`
	position: absolute;
	width: 26px;
	height: 26px;
	top: 27px;
	left: -28px;
`;

export const LabelImg = styled.label`
	display: block;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #000000;
`;
