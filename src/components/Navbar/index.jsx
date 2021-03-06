import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { NavLink } from 'react-router-dom'
import { Container, Content, MobileNav, Nav } from './styles'

import plateaCircleLogo from '../../assets/platea_circle_logo.svg'
import { MdMenu, MdHome } from 'react-icons/md'

const menuButtonVariants = {
	initial: { opacity: 0 },
	animate: {
		opacity: [1, 0],
		scale: [1, 1.5],
		transition: { repeat: Infinity, duration: 1.5, delay: 1 },
	},
}

const container = {
	animate: {
		transition: {
			staggerChildren: 0.1,
			staggerDirection: 1,
		},
	},
	exit: {
		transition: {
			staggerChildren: 0.2,
		},
	},
}

const mobileNavVariants = {
	initial: {
		opacity: 0,
		scale: 0.5,
	},
	animate: {
		opacity: 1,
		scale: [1.2, 1],
		transition: {
			type: 'spring',
		},
	},
	hide: {
		opacity: 0,
		transition: {
			type: 'spring',
			duration: 3,
		},
	},
}

export default function Navbar({ openModal }) {
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
					{/* menu button */}
					<motion.button
						className='logo-button'
						onClick={handleOpenCloseMenu}
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.9 }}
					>
						<img src={plateaCircleLogo} alt='Platea Logo' />
					</motion.button>
					{/* menu animation background */}
					<motion.div
						className='button-bg-animate'
						variants={menuButtonVariants}
						initial='initial'
						animate='animate'
					/>
					{/* navigation area */}
					<Nav
						as={motion.nav}
						initial={{ backgroundColor: 'rgb(33, 33, 33, 0)' }}
						animate={
							isOpen
								? { backgroundColor: 'rgb(33, 33, 33, 1)' }
								: { backgroundColor: 'rgb(33, 33, 33, 0)' }
						}
					>
						<ul>
							<motion.div id='left'>
								{isOpen && (
									<motion.div
										className='wrap'
										initial={{ x: 180, opacity: 0 }}
										animate={{ x: -45, opacity: 1 }}
										exit={{ x: 180, opacity: 0 }}
										transition={{ type: 'spring', damping: 16 }}
									>
										<li>
											<NavLink to='/about' onClick={() => setOpenMenu(false)}>
												Sobre
											</NavLink>
										</li>
										<li>
											<NavLink
												to='/services'
												onClick={() => setOpenMenu(false)}
											>
												Servi??os
											</NavLink>
										</li>
									</motion.div>
								)}
							</motion.div>
							<div id='right'>
								{isOpen && (
									<motion.div
										className='wrap'
										initial={{ x: -180, opacity: 0 }}
										animate={{ x: 45, opacity: 1 }}
										exit={{ x: -180, opacity: 0 }}
										transition={{ type: 'spring', damping: 16 }}
									>
										<li>
											<NavLink to='/cases' onClick={() => setOpenMenu(false)}>
												Cases
											</NavLink>
										</li>
										<li>
											<button onClick={openModal}>Contato</button>
										</li>
									</motion.div>
								)}
							</div>
						</ul>
					</Nav>
					{/* mobile menu */}
					<button
						className='mobile-nav-button'
						onClick={handleOpenCloseMenu}
						whileTap={{ scale: 0.9 }}
					>
						<MdMenu />
					</button>
					<AnimatePresence>
						{isOpen && (
							<MobileNav
								as={motion.div}
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { type: 'spring' },
								}}
								exit={{ opacity: 0 }}
							>
								<motion.div
									className='overlay'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
								></motion.div>
								<motion.ul
									variants={container}
									initial='initial'
									animate='animate'
								>
									<motion.li className='home-menu-button'>
										<NavLink to='/' onClick={() => setOpenMenu(false)}>
											<MdHome />
										</NavLink>
									</motion.li>
									<motion.li variants={mobileNavVariants}>
										<NavLink to='/about' onClick={() => setOpenMenu(false)}>
											Sobre
										</NavLink>
									</motion.li>
									<motion.li variants={mobileNavVariants}>
										<NavLink to='/services' onClick={() => setOpenMenu(false)}>
											Servi??os
										</NavLink>
									</motion.li>
									<motion.li variants={mobileNavVariants}>
										<NavLink to='/cases' onClick={() => setOpenMenu(false)}>
											Cases
										</NavLink>
									</motion.li>
									<motion.li variants={mobileNavVariants}>
										<button className='mobile-button' onClick={openModal}>
											Contato
										</button>
									</motion.li>
								</motion.ul>
							</MobileNav>
						)}
					</AnimatePresence>
				</div>
			</Content>
		</Container>
	)
}
