import { useState } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { GlobalStyle } from './styles/global'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Cases from './pages/Cases'
import ContactModal from './components/ContactModal'
import Services from './pages/Services'
import PageNotFound from './pages/PageNotFound'

const client = new ApolloClient({
	uri: `https://graphql.contentful.com/content/v1/spaces/1deh8mza5ax6/environments/master`,
	headers: {
		AcceptEncoding: 'gzip, deflate, br',
		Accept: 'application/json',
		Connection: 'keep-alive',
		ContentType: 'application/json',
		Origin: 'https://contentful-graphql-playground-app.netlify.app',
		DNT: '1',
		Authorization: 'Bearer DLNj3PG5fftvUUqcCQWBwVyiXKbTZBqKvU2CxQPm1Po',
	},
	cache: new InMemoryCache(),
})

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
					<ApolloProvider client={client}>
						<Switch location={location}>
							<Route path='/' component={Home} exact />
							<Route path='/about' component={About} exact />
							<Route path='/services' component={Services} exact />
							<Route path='/cases' component={Cases} exact />
							<Route path='*' component={PageNotFound} exact />
						</Switch>
					</ApolloProvider>
				</AnimatePresence>
			</AnimateSharedLayout>

			<ContactModal
				isOpen={isContactModalOpen}
				onRequestClose={handleCloseContactModal}
				handleCloseContactModal={handleCloseContactModal}
			/>

			<GlobalStyle />
		</>
	)
}
