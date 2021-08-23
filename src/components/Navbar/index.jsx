import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { NavLink } from 'react-router-dom'
import { Container, Content, Nav } from './styles'

import plateaCircleLogo from '../../assets/platea_circle_logo.svg'

export default function Navbar() {
	const [isOpen, setOpenMenu] = useState(false)

	const handleOpenCloseMenu = () => {
		setOpenMenu(!isOpen)
	}

	useEffect(() => {
		const menuTimer = setInterval(() => {
			setOpenMenu(false)
		}, 8000)
		return () => clearInterval(menuTimer)
	}, [isOpen])

	return (
		<Container>
			<Content>
				<div className='logo'>
					<motion.button
						onClick={handleOpenCloseMenu}
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.9 }}
					>
						<img src={plateaCircleLogo} alt='Platea Logo' />
					</motion.button>

					<Nav>
						<ul>
							<div id='left'>
								<AnimatePresence exitBeforeEnter>
									{isOpen && (
										<motion.div
											className='wrap'
											initial={{ x: 180, opacity: 0 }}
											animate={{ x: -45, opacity: 1 }}
											exit={{ x: 180, opacity: 0 }}
											transition={{ type: 'spring', damping: 16 }}
										>
											<li>
												<NavLink to='/about'>Sobre</NavLink>
											</li>
											<li>
												<NavLink to='/services'>Serviços</NavLink>
											</li>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
							<div id='right'>
								<AnimatePresence exitBeforeEnter>
									{isOpen && (
										<motion.div
											className='wrap'
											initial={{ x: -180, opacity: 0 }}
											animate={{ x: 45, opacity: 1 }}
											exit={{ x: -180, opacity: 0 }}
											transition={{ type: 'spring', damping: 16 }}
										>
											<li>
												<NavLink to='/cases'>Cases</NavLink>
											</li>
											<li>
												<NavLink to='/contact'>Contato</NavLink>
											</li>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						</ul>
					</Nav>
				</div>
			</Content>
		</Container>
	)
}
