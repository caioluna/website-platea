import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'

import Loading from '../../components/Loading'
import CloseButton from '../../components/CloseButton'
import GeoForm from '../../components/GeoForm'

import { Container, Content, Header, PhotoContainer } from '../Cases/styles'

const PHOTOS = gql`
	query GetPhotos {
		photos {
			id
			title
			description
			tags
			image {
				formats
			}
		}
	}
`

const container = {
	show: {
		transition: {
			delayChildren: 0.8,
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

const descriptionVariants = {
	hide: { bottom: -200 },
	show: {
		bottom: 0,
		transition: {
			duration: 0.4,
		},
	},
}

export default function Cases() {
	const [show] = useState(false)
	const { loading, error, data } = useQuery(PHOTOS)
	const [searchWord, setSearchWord] = useState('')

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
					{data.photos
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
										src={`https://strapi-3v35.onrender.com${photo.image.formats.small.url}`}
										alt={photo.title}
									/>
									<motion.div
										className='hover-container'
										initial={false}
										animate={show ? 'show' : 'hide'}
										whileHover='show'
									>
										<motion.span
											className='description'
											variants={descriptionVariants}
										>
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
										</motion.span>
									</motion.div>
								</motion.div>
							)
						})}
				</PhotoContainer>
			</Content>
		</Container>
	)
}
