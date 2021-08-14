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
	const [pageNumber, setPageNumber] = useState(0)

	if (loading) return <Loading>Loading...</Loading>
	if (error) return console.log(error)

	const photosPerPage = 8
	const pagesVisited = pageNumber * photosPerPage
	const pageCount = data.photos.length / photosPerPage

	const handlePageChange = ({ selected }) => {
		setPageNumber(selected)
	}

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
					previousLabel={
						<svg
							width='15'
							height='24'
							viewBox='0 0 15 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M0 2.544L9.456 12L0 21.456L2.544 24L14.544 12L2.544 0L0 2.544Z'
								fill='#FDDB00'
							/>
						</svg>
					}
					nextLabel={
						<svg
							width='15'
							height='24'
							viewBox='0 0 15 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M0 2.544L9.456 12L0 21.456L2.544 24L14.544 12L2.544 0L0 2.544Z'
								fill='#FDDB00'
							/>
						</svg>
					}
					onPageChange={handlePageChange}
					pageCount={pageCount}
					pageRangeDisplayed={3}
					marginPagesDisplayed={2}
					breakLabel={'...'}
					containerClassName={'pagination'}
					activeClassName={'active-page'}
					disabledClassName={'disabled-page'}
				/>
			</Content>
		</Container>
	)
}
