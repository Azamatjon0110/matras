import React, { useState } from 'react';
// import { HeaderLeft, Img, List, LogoLink, Navlink } from './Header.styled';
import Logo from '../../assets/images/logo.svg';
import './Header.scss';
import { IconContext } from 'react-icons';
import { BsGeoAltFill, BsPersonFill } from 'react-icons/bs';
import { FaTools } from 'react-icons/fa';
import { IoMdCart } from 'react-icons/io';
import { AiFillHome } from 'react-icons/ai';
import { HiViewBoards } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
	return (
		<header className='site-header'>
			<div className='header-left'>
				<Link className='logo-link' to='buyurtmalar'>
					<img className='logo-img' src={Logo} alt='Logo img' />
				</Link>
				<IconContext.Provider
					value={{
						color: '#fff',
						size: '20px',
					}}
				>
					<nav>
						<ul className='nav-list'>
							<li className='nav-item'>
								<NavLink
									className={({ isActive }) =>
										isActive ? 'nav-link unselected' : 'nav-link'
									}
									to='buyurtmalar'
								>
									<AiFillHome /> Buyurtmalar
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									className={({ isActive }) =>
										isActive ? ' unselected nav-link' : 'nav-link'
									}
									to='customers'
								>
									<BsPersonFill /> Customers
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									className={({ isActive }) =>
										isActive ? ' unselected nav-link' : 'nav-link'
									}
									to='toifalar'
								>
									<HiViewBoards /> Toifalar
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									style={{}}
									className={({ isActive }) =>
										isActive ? ' unselected nav-link' : 'nav-link'
									}
									to='mahsulotlar'
								>
									<IoMdCart /> Mahsulotlar
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									className={({ isActive }) =>
										isActive ? ' unselected nav-link' : 'nav-link'
									}
									to='texnologiyalar'
								>
									<FaTools /> Texnologiyalar
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									className={({ isActive }) =>
										isActive ? ' unselected nav-link' : 'nav-link'
									}
									to='manzil'
								>
									<BsGeoAltFill /> Manzil
								</NavLink>
							</li>
						</ul>
					</nav>
				</IconContext.Provider>
			</div>
		</header>
	);
};
