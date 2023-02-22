import React from 'react';
import {
	CheckBox,
	CountBox,
	IDBox,
	Label,
	Li,
	NameBox,
	PhoneBox,
	Span,
	SwitchBox,
	Text,
	TypeBox,
} from './BuyurtmaLi.style';

export const BuyurtmaLi = () => {
	return (
		<Li>
			<IDBox>
				<Text>1</Text>
			</IDBox>
			<NameBox>
				<Text>Azamatjon Abdurazaqov</Text>
			</NameBox>
			<PhoneBox>
				<Text>+998 90 151 12 23</Text>
			</PhoneBox>
			<TypeBox>
				<Text>Ortopedik Eko matras</Text>
			</TypeBox>
			<CountBox>
				<Text>5</Text>
			</CountBox>
			<SwitchBox>
				<Label class='switch'>
					<CheckBox type='checkbox' />
					<Span class='slider round'></Span>
				</Label>
			</SwitchBox>
		</Li>
	);
};
