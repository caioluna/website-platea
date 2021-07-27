import { GlobalStyle } from './styles/global';

import Header from './components/Header';

import Home from './pages/Home';
import Cases from './pages/Cases';
import Contact from './pages/Contact';

import Footer from './components/Footer';
import PageNotFound from './components/Footer';

import { Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

export default function App() {
	return (
		<>
			<Header />

			<AnimatePresence>
				<Switch>
					<Route path='/' component={Home} exact />
					<Route path='/cases' component={Cases} exact />
					<Route path='/contato' component={Contact} exact />
					<Route path='*' component={PageNotFound} exact />
				</Switch>
			</AnimatePresence>

			<Footer />

			<GlobalStyle />
		</>
	);
}
