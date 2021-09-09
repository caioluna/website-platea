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

const APP_ID = 'platea-app-loiaj'
const client = new ApolloClient({
	uri: `https://platea-strapi.herokuapp.com/graphql`,
	// uri: `https://realm.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`,
	// headers: {
	// 	Authorization:
	// 		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlBsYXRlYSIsImlhdCI6MTYxNzMxMzQyMCwiZXhwIjoxNjQ4ODQ5NDIwLCJhdWQiOiJwbGF0ZWEtYXBwLWxvaWFqIn0.-y9i5bRRtfbMr1w4vY_qNtZO_JrF7cU4pS2cUTri1XA',
	// },
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
