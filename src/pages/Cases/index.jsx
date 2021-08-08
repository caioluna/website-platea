import { motion } from 'framer-motion'
import React from 'react'
import useFetch from '../../hooks/useFetch'

import CloseButton from '../../components/CloseButton'
import GeoForm from '../../components/GeoForm'

import { Container, Content, Header, Jobs } from '../Cases/styles'

export default function Cases() {
	const { data, error, loading } = useFetch('http://localhost:1337/photos')

	if (loading) return <p>Loading...</p>
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

					<div className='btn-wrapper'>
						<button className='left'>prev</button>
						<br />
						<button className='right'>next</button>
					</div>
				</Header>
				<div className='title-wrapper'>
					<h1>Cases</h1>
				</div>

				<Jobs>
					{data.map(image => {
						// const tags = image.tags.split(',')

						return (
							<div
								key={image.id}
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
									src={`http://localhost:1337${image.image.formats.small.url}`}
									alt={`imagem de`}
								/>
								<span className='description'>
									<h4>{image.title}</h4>
									<div className='hashtag'>
										{image.tags.split(',').map(tag => {
											console.log(tag)
											return (
												<span key={Math.random()} className='hash'>
													#{tag.trim()}
												</span>
											)
										})}
									</div>
								</span>
							</div>
						)
					})}
				</Jobs>
			</Content>
		</Container>
	)
}
