import React, { useEffect, useState } from 'react'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'

import { NavLink } from 'react-router-dom'
import { Container, Content, Nav } from './styles'

import plateaCircleLogo from '../../assets/platea_circle_logo.svg'

export default function Navbar() {
	const [openMenu, setOpenMenu] = useState(false)

	const handleOpenCloseMenu = () => {
		console.log('opened')
		setOpenMenu(!openMenu)
	}

	useEffect(() => {
		const menuTimer = setInterval(() => {
			setOpenMenu(false)
		}, 8000)
		return () => clearInterval(menuTimer)
	}, [openMenu])

	return (
		<Container>
			<Content>
				<AnimateSharedLayout>
					<div className='logo'>
						<motion.button
							layout
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
										{openMenu && (
											<motion.div
												className='wrap'
												layout
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
										{openMenu && (
											<motion.div
												className='wrap'
												layout
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
				</AnimateSharedLayout>
			</Content>
		</Container>
	)
}
