import styled from 'styled-components';
import Person from '../../assets/images/person.svg';

export const LoginTitle = styled.h2`
	margin-top: 5px;
	margin-bottom: 40px;
	font-weight: 700;
	font-size: 20px;
	line-height: 24px;
	text-align: center;
	color: #01384d;
`;
export const LoginBox = styled.div`
	width: 100%;
	max-width: 330px;
	margin: auto;
	margin-top: 157px;
	padding: 30px;
	text-align: center;
	border: 1px solid #01364b4d;
	border-radius: 10px;
`;

export const Label = styled.label`
	background-image: url(${Person});
	background-size: 20px 20px;
	background-repeat: no-repeat;
	background-position: left;
`;

export const LoginInput = styled.input`
	width: 100%;
	display: block;
	margin-bottom: 13px;
	padding: 15px 20px;
	border: 1px solid #01384d;
	border-radius: 7px;

	&::placeholder {
		font-weight: 400;
		font-size: 14px;
		line-height: 17px;
		content: '';
	}
`;
export const LoginPassword = styled.input`
	width: 100%;
	display: block;
	margin-bottom: 35px;
	padding: 15px 20px;
	border: 1px solid #01384d;
	border-radius: 7px;

	&::placeholder {
		font-weight: 400;
		font-size: 14px;
		line-height: 17px;
		content: '';
	}
`;

export const Btn = styled.button`
	display: block;
	width: 100%;
	padding: 18px 0;
	color: #fff;
	background-color: #01364b80;
	border: none;
	border-radius: 7px;
	cursor: pointer;
`;
