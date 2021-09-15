import { useState } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { GlobalStyle } from './styles/global'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Cases from './pages/Cases'
import ContactModal from './components/ContactModal'
import Services from './pages/Services'
import PageNotFound from './pages/PageNotFound'

export default function App() {
	const [isContactModalOpen, setIsContentModalOpen] = useState(false)

	const handleCloseContactModal = () => setIsContentModalOpen(false)
	const handleOpenContactModal = () => setIsContentModalOpen(true)

	const location = useLocation()

	return (
		<>
			<Navbar openModal={handleOpenContactModal} />

			<AnimateSharedLayout type='crossfade'>
				<AnimatePresence exitBeforeEnter>
					<Switch location={location}>
						<Route path='/' component={Home} exact />
						<Route path='/about' component={About} exact />
						<Route path='/services' component={Services} exact />
						<Route path='/cases' component={Cases} exact />
						<Route path='*' component={PageNotFound} exact />
					</Switch>
				</AnimatePresence>
			</AnimateSharedLayout>

			<AnimatePresence>
				{isContactModalOpen && (
					<ContactModal
						isOpen={isContactModalOpen}
						onRequestClose={handleCloseContactModal}
						handleCloseContactModal={handleCloseContactModal}
					/>
				)}
			</AnimatePresence>

			<GlobalStyle />
		</>
	)
}
