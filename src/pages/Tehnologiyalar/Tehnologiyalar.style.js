import styled from 'styled-components';
import UserIcon from '../../assets/images/user.svg';

export const HeaderTop = styled.div`
	width: 100%;
	max-width: 100vw;
`;

export const HeaderTopWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: end;
	background-color: #01384d;
	padding: 19px;
	padding-right: 60px;
`;

export const User = styled.p`
	display: flex;
	align-items: center;
	margin: 0;
	font-weight: 600;
	font-size: 14px;
	line-height: 17px;
	color: #ffffff;
	&::before {
		content: '';
		display: block;
		margin-right: 10px;
		width: 35px;
		height: 35px;
		background-image: url(${UserIcon});
		background-repeat: no-repeat;
	}
`;

export const Table = styled.div`
	width: 100%;
	padding: 30px;
`;

export const TheadRow = styled.div`
	width: 100%;
	display: flex;
	padding: 15px 0;
	color: #fff;
	background-color: #01384d;
`;

export const Th = styled.p`
	margin: 0;
	font-weight: 600;
	font-size: 15px;
	line-height: 18px;
	color: #fff;
`;

export const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`;

export const NameBox = styled.div`
	width: 180px;
	text-align: center;
`;

export const MatnBox = styled.div`
	width: 180px;
	text-align: center;
`;

export const VideoBox = styled.div`
	width: 180px;
	text-align: center;
`;

export const Wr = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 85vh;
`;

export const BtnWrap = styled.div`
	display: flex;
	justify-content: end;
	align-items: stretch;
`;

export const BtnAdd = styled.button`
	display: inline-block;
	margin-right: 30px;
	padding: 11px 34px;
	font-weight: 600;
	font-size: 15px;
	line-height: 18px;
	color: #fff;
	background-color: #01384d;
	border-radius: 8px;
	border: none;
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

export const Label = styled.label`
	display: block;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #000000;
`;
export const File = styled.span`
	display: inline-block;
	width: 100%;
	margin-top: 10px;
	padding: 20px 15px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 5px;
`;
export const Input = styled.input`
	width: 100%;
	margin-top: 10px;
	padding: 12px 15px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	&::placeholder {
		color: #000000;
		opacity: 0.4;
	}
`;

export const WrapperFirst = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20px;
`;

export const WrapperSecond = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 40px;
`;

export const WrapperThird = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const InputBox = styled.div`
	width: 100%;
	max-width: 220px;
`;

export const Wrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	max-width: 220px;
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
	height: 20px;
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
		height: 14px;
		width: 14px;
		top: 3px;
		left: 4px;
		bottom: 4px;
		background-color: #fff;
		transition: 0.4s;
		border-radius: 50%;
	}
`;

export const EditModalTitle = styled.h3`
	margin-top: 0;
	margin-bottom: 30px;
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
	padding: 14px;
	font-weight: 600;
	font-size: 14px;
	line-height: 17px;
	color: #ffffff;
	background-color: #01384d;
	border: none;
	border-radius: 7px;
	cursor: pointer;
`;
