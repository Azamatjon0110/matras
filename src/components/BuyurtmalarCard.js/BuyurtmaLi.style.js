import styled from 'styled-components';

export const Li = styled.li`
	width: 100%;
	display: flex;
	padding: 15px 0;
	border-right: 1px solid #01384d4d;
	border-bottom: 1px solid #01384d4d;
	border-left: 1px solid #01384d4d;
`;

export const IDBox = styled.div`
	width: 80px;
	text-align: center;
`;

export const NameBox = styled.div`
	width: 270px;
	text-align: center;
	overflow-x: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;

export const PhoneBox = styled.div`
	width: 180px;
	text-align: center;
`;

export const TypeBox = styled.div`
	width: 300px;
	text-align: center;
`;
export const CountBox = styled.div`
	width: 150px;
	text-align: center;
`;
export const SwitchBox = styled.div`
	width: 255px;
	text-align: center;
`;
export const Text = styled.p`
	margin: 0;
	font-weight: 500;
	font-size: 15px;
	line-height: 18px;
	color: #000000;
`;

export const CheckBoxWrapper = styled.div`
	position: relative;
	right: 0;
	left: 0;
`;

export const Label = styled.label`
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
		height: 18px;
		width: 18px;
		top: 3px;
		left: 4px;
		bottom: 4px;
		background-color: #fff;
		transition: 0.4s;
		border-radius: 50%;
	}
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
