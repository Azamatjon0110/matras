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

export const Input = styled.input`
	width: 100%;
	margin-top: 10px;
	margin-bottom: 16px;
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

export const NameBox = styled.div`
	width: 180px;
	text-align: center;
	overflow-x: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;

export const MatnBox = styled.div`
	width: 180px;
	text-align: center;
	overflow-x: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;

export const VideoBox = styled.div`
	width: 180px;
	text-align: center;
`;

export const Label = styled.label`
	width: 100%;
	max-width: 340px;
	display: block;
`;

export const Span = styled.span`
	display: block;
	width: 100%;
	padding: 12px 15px;
	height: 40px;
	margin-top: 10px;
	margin-bottom: 16px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 5px;
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
