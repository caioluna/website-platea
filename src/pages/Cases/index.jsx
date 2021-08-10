import { motion } from 'framer-motion'
import React from 'react'
import { useQuery, gql } from '@apollo/client'

import CloseButton from '../../components/CloseButton'
import GeoForm from '../../components/GeoForm'

import {
	Container,
	Content,
	Header,
	PhotoContainer,
	Loading,
} from '../Cases/styles'

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

export default function Cases() {
	const { loading, error, data } = useQuery(PHOTOS)

	if (loading) return <Loading>Loading...</Loading>
	if (error) return <p>Error...</p>

	return (
		<Container
			as={motion.main}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<CloseButton />
			<GeoForm />
			<Content>
				<Header>
					<form action=''>
						<label htmlFor=''>
							<input type='text' placeholder='Filtrar' />
							<button>Buscar</button>
						</label>
					</form>
				</Header>
				<div className='title-wrapper'>
					<h1>Cases</h1>
				</div>
				<PhotoContainer>
					{data.photos.map(photo => {
						return (
							<div
								key={photo.id}
								className='item'
								onMouseMove={e => {
									const itemDescription =
										document.querySelectorAll('.description')

									let x = e.clientX
									let y = e.clientY

									for (let each of itemDescription) {
										each.style.left = x + 'px'
										each.style.top = y + 'px'
									}
								}}
							>
								<img
									src={`http://localhost:1337${photo.image.formats.small.url}`}
									alt={`imagem de`}
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
