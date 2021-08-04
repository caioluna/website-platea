import { GlobalStyle } from './styles/global'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import About from './pages/About'
import Cases from './pages/Cases'
import Contact from './pages/Contact'
import Services from './pages/Services'

import PageNotFound from './pages/PageNotFound'

import { Switch, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

export default function App() {
	return (
		<>
			<Navbar />

			<AnimatePresence>
				<Switch>
					<Route path='/' component={Home} exact />
					<Route path='/about' component={About} exact />
					<Route path='/services' component={Services} exact />
					<Route path='/cases' component={Cases} exact />
					<Route path='/contact' component={Contact} exact />
					<Route path='*' component={PageNotFound} exact />
				</Switch>
			</AnimatePresence>

			<GlobalStyle />
		</>
	)
}
