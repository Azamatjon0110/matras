import React from 'react';
import { BuyurtmaLi } from '../../components/BuyurtmalarCard.js/BuyurtmaLi';
import {
	CountBox,
	Form,
	HeaderTop,
	HeaderTopWrap,
	IDBox,
	Input,
	List,
	NameBox,
	PhoneBox,
	SwitchBox,
	Table,
	Th,
	TheadRow,
	TypeBox,
	User,
} from './Buyurtmalar.style';

export const Buyurtmalar = () => {
	return (
		<HeaderTop>
			<HeaderTopWrap>
				<Form>
					<Input type='text' placeholder='User' />
				</Form>
				<User>John Doe</User>
			</HeaderTopWrap>
			<Table>
				<TheadRow>
					<IDBox>
						<Th>ID</Th>
					</IDBox>
					<NameBox>
						<Th>Ismi</Th>
					</NameBox>
					<PhoneBox>
						<Th>Telefon raqami</Th>
					</PhoneBox>
					<TypeBox>
						<Th>Mahsulot nomlari</Th>
					</TypeBox>
					<CountBox>
						<Th>Miqdor</Th>
					</CountBox>
					<SwitchBox>
						<Th>Qayta aloqa</Th>
					</SwitchBox>
				</TheadRow>
				<List>
					<BuyurtmaLi />
				</List>
			</Table>
		</HeaderTop>
	);
};
