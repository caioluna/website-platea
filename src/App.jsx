import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import { GlobalStyle } from './styles/global'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import About from './pages/About'
import Cases from './pages/Cases'
import Contact from './pages/Contact'
import Services from './pages/Services'

import PageNotFound from './pages/PageNotFound'

const client = new ApolloClient({
	uri: 'http://localhost:1337/graphql',
	cache: new InMemoryCache(),
})

export default function App() {
	const location = useLocation()

	return (
		<>
			<Navbar />

			<AnimateSharedLayout type='crossfade'>
				<AnimatePresence exitBeforeEnter>
					<ApolloProvider client={client}>
						<Switch location={location}>
							<Route path='/' component={Home} exact />
							<Route path='/about' component={About} exact />
							<Route path='/services' component={Services} exact />
							<Route path='/cases' component={Cases} exact />
							<Route path='/contact' component={Contact} exact />
							<Route path='*' component={PageNotFound} exact />
						</Switch>
					</ApolloProvider>
				</AnimatePresence>
			</AnimateSharedLayout>

			<GlobalStyle />
		</>
	)
}
