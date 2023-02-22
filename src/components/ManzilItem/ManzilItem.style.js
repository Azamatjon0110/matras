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

export const LocationBox = styled.div`
	width: 250px;
	text-align: center;
	overflow-x: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const MatnBox = styled.div`
	width: 200px;
	text-align: center;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow-x: hidden;
`;

export const LocBox = styled.div`
	width: 100px;
	text-align: center;
	overflow-x: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
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
		height: 19px;
		width: 18px;
		top: 2px;
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
