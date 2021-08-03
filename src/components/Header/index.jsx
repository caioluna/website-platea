import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Content, Nav } from './styles'

import plateaCircleLogo from '../../assets/platea_circle_logo.svg'

export default function Header() {
	const [openCloseMenu, setOpenCloseMenu] = useState(false)

	const handleOpenCloseMenu = () => {
		setOpenCloseMenu(!openCloseMenu)
	}

	return (
		<Container>
			<Content>
				<div className='logo'>
					<button to='#' onClick={handleOpenCloseMenu}>
						<img src={plateaCircleLogo} alt='Platea Logo' />
					</button>
					<Nav>
						<ul>
							<div id='left' className={openCloseMenu ? 'open' : ''}>
								<li>
									<NavLink to=''>Sobre</NavLink>
								</li>
								<li>
									<NavLink to=''>Serviços</NavLink>
								</li>
							</div>
							<div id='right' className={openCloseMenu ? 'open' : ''}>
								<li>
									<NavLink to=''>Cases</NavLink>
								</li>
								<li>
									<NavLink to=''>Contato</NavLink>
								</li>
							</div>
						</ul>
					</Nav>
				</div>
			</Content>
		</Container>
	)
}
