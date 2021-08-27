import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useQuery } from '@apollo/client'

import Loading from '../../components/Loading'
import CloseButton from '../../components/CloseButton'
import GeoForm from '../../components/GeoForm'

import { Container, Content, Header, PhotoContainer } from '../Cases/styles'

import { PrismicLink } from 'apollo-link-prismic'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import gql from 'graphql-tag'

const client = new ApolloClient({
	link: PrismicLink({
		uri: `${process.env.PRISMIC_ENDPOINT}/graphql`,
		accessToken: process.env.PRISMIC_API_ACCESS_TOKEN,
		repositoryName: 'photo',
	}),
	cache: new InMemoryCache(),
})

client
	.query({
		query: gql`
			{
				allPhotos {
					edges {
						node {
							title
							image
							tags
						}
					}
				}
			}
		`,
	})
	.then(response => {
		console.log(response)
	})
	.catch(error => {
		console.error(error)
	})

const PHOTO = gql`
	{
		allPhotos {
			edges {
				node {
					title
					image
					tags
				}
			}
		}
	}
`

const container = {
	show: {
		transition: {
			delayChildren: 0.4,
			staggerChildren: 0.2,
		},
	},
}

const photoVariants = {
	hidden: {
		opacity: 0,
		y: 50,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			duration: 1,
		},
	},
}

const titleVariants = {
	hidden: {
		opacity: 0,
		x: 300,
		rotate: -90,
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			duration: 1,
		},
	},
}

const inputVariants = {
	hidden: {
		opacity: 0,
		x: -300,
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			duration: 1,
		},
	},
}

export default function Cases({ client }) {
	const { loading, error, data } = useQuery(PHOTO)
	const [searchWord, setSearchWord] = useState('')

	console.log(data)
	if (loading) return <Loading />
	if (error) return console.log(error)

	return (
		<Container
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { ease: 'easeInOut', duration: 0.5 } }}
			exit={{ opacity: 0 }}
		>
			<CloseButton />

			<GeoForm />
			<Content>
				<Header>
					<motion.label
						variants={inputVariants}
						initial='hidden'
						animate='show'
						htmlFor='searchField'
					>
						<input
							value={searchWord}
							onChange={event => setSearchWord(event.target.value)}
							id='searchField'
							type='text'
							placeholder='Filtrar por tags...'
						/>
					</motion.label>
				</Header>
				<div className='title-wrapper'>
					<motion.h1 variants={titleVariants} initial='hidden' animate='show'>
						Cases
					</motion.h1>
				</div>
				<PhotoContainer variants={container} initial='hidden' animate='show'>
					{data
						.filter(value => {
							if (searchWord === '') return value
							return value.tags.includes(searchWord.toLowerCase())
						})
						.map(photo => {
							return (
								<motion.div
									key={photo.id}
									className='item'
									variants={photoVariants}
								>
									<img
										src={`http://localhost:1337${photo.image.formats.small.url}`}
										alt={photo.title}
									/>
									<span className='description'>
										<h4>{photo.title}</h4>
										<div className='hashtag'>
											{photo.tags.split(',').map((tag, id) => {
												return (
													<span key={id} className='hash'>
														#{tag.trim()}
													</span>
												)
											})}
										</div>
									</span>
								</motion.div>
							)
						})}
				</PhotoContainer>
			</Content>
		</Container>
	)
}
