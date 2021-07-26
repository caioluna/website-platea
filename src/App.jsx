import { GlobalStyle } from './styles/global';

import Header from './components/Header';

import Home from './pages/Home/index';
import Agency from './pages/Agency';
import Clients from './pages/Clients';

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
		</>
	);
}
