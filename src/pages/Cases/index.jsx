import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'

import CloseButton from '../../components/CloseButton'
import GeoForm from '../../components/GeoForm'

import {
	Container,
	Content,
	Header,
	Loading,
	PhotoContainer,
} from '../Cases/styles'

const PHOTOS = gql`
	{
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

export default function Cases() {
	const { loading, error, data } = useQuery(PHOTOS)
	const [searchWord, setSearchWord] = useState('')

	if (loading) return <Loading>Loading...</Loading>
	if (error) return console.log(error)

	return (
		<Container
			as={motion.main}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { ease: 'easeInOut', duration: 0.5 } }}
			exit={{ opacity: 0 }}
		>
			<CloseButton />

			<GeoForm />
			<Content>
				<Header>
					<label htmlFor='searchField'>
						<input
							value={searchWord}
							onChange={event => setSearchWord(event.target.value)}
							id='searchField'
							type='text'
							placeholder='Filtrar por tags...'
						/>
					</label>
				</Header>
				<div className='title-wrapper'>
					<h1>Cases</h1>
				</div>
				<PhotoContainer>
					{data.photos
						.filter(value => {
							if (searchWord === '') return value
							return value.tags.includes(searchWord.toLowerCase())
						})
						.map(photo => {
							return (
								<div key={photo.id} className='item'>
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
								</div>
							)
						})}
				</PhotoContainer>
			</Content>
		</Container>
	)
}
