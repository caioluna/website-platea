import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Content, Nav } from './styles'

import plateaCircleLogo from '../../assets/platea_circle_logo.svg'

export default function Navbar() {
	const [openMenu, setOpenMenu] = useState(false)

	const handleOpenCloseMenu = () => {
		setOpenMenu(!openMenu)
	}

	useEffect(() => {
		const menuTimer = setInterval(() => {
			setOpenMenu(false)
		}, 6000)
		return () => clearInterval(menuTimer)
	}, [openMenu])

	return (
		<Container>
			<Content>
				<div className='logo'>
					<button onClick={handleOpenCloseMenu}>
						<img src={plateaCircleLogo} alt='Platea Logo' />
					</button>
					<Nav>
						<ul>
							<div id='left' className={openMenu ? 'open' : ''}>
								<li>
									<NavLink to='/about'>Sobre</NavLink>
								</li>
								<li>
									<NavLink to='/services'>Serviços</NavLink>
								</li>
							</div>
							<div id='right' className={openMenu ? 'open' : ''}>
								<li>
									<NavLink to='/cases'>Cases</NavLink>
								</li>
								<li>
									<NavLink to='/contact'>Contato</NavLink>
								</li>
							</div>
						</ul>
					</Nav>
				</div>
			</Content>
		</Container>
	)
}
