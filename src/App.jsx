import { GlobalStyle } from './styles/global';

import Header from './components/Header';

import Home from './pages/Home/index';
import Agency from './components/Agency';
import Clients from './components/Clients';
import Services from './components/Services';

import Footer from './components/Footer';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
	return (
		<>
			<GlobalStyle />

			<Header />

			<Home />
			<Agency />
			<Clients />
			<Services />

			<Footer />
		</>
	);
}
