import styled from 'styled-components';
import Search from '../../assets/images/search.svg';
import UserIcon from '../../assets/images/user.svg';

export const HeaderTop = styled.div`
	width: 100%;
	max-width: 100vw;
`;

export const HeaderTopWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #01384d;
	padding: 15px;
	padding-right: 60px;
`;

export const Form = styled.form`
	width: 100%;
	max-width: 400px;
`;

export const Input = styled.input`
	width: 100%;
	padding: 12px 20px;
	font-weight: 500;
	font-size: 13px;
	line-height: 16px;
	color: #000000;
	border-radius: 7px;
	background-image: url(${Search});
	background-size: 22px;
	background-repeat: no-repeat;
	background-position: center right 22px;
	&::placeholder {
		opacity: 0.5;
	}
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

export const Th = styled.div`
	padding: 0 30px;
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

export const IDBox = styled.div`
	width: 80px;
	text-align: center;
`;

export const NameBox = styled.div`
	width: 270px;
	text-align: center;
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
