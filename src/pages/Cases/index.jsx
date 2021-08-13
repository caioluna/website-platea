import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import ReactPaginate from 'react-paginate'

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
	const [searchWord, setSearchWord] = useState('')
	const [pageNumber, setPageNumber] = useState(0)

	const photosPerPage = 8
	const pagesVisited = pageNumber * photosPerPage
	const dataCollection = data.photos

	const pageCount = Math.ceil(dataCollection.length / photosPerPage)
	const handlePageChange = ({ selected }) => {
		setPageNumber(selected)
	}

	if (loading) return <Loading>Loading...</Loading>
	if (error) return <p>Error.</p>

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
						.slice(pagesVisited, photosPerPage + pagesVisited)
						.map(photo => {
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
				<ReactPaginate
					previousLabel={'Voltar'}
					nextLabel={'Avançar'}
					pageCount={pageCount}
					onPageChange={handlePageChange}
				/>
			</Content>
		</Container>
	)
}
