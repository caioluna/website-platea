import { motion } from 'framer-motion'
import React, { useState } from 'react'

import CloseButton from '../../components/CloseButton'
import GeoForm from '../../components/GeoForm'
import Photo from '../../components/Photo'
import SearchInput from '../../components/SearchInput'
import useFetch from '../../hooks/useFetch'

import { Container, Content, PhotoSlider } from '../Cases/styles'

export default function Cases() {
	const { data, error, loading } = useFetch('http://localhost:1337/photos')
	const [currentPhoto, setCurrentPhoto] = useState(0)

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error...</p>

	return (
		<Container
			as={motion.main}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<h1>Cases</h1>

			<CloseButton />
			<GeoForm />
			<SearchInput />
			<div className='controls'>
				<button
					className='previous'
					onClick={() => {
						setCurrentPhoto(currentPhoto - 1)
					}}
				>
					previous
				</button>
				<button
					className='next'
					onClick={() => {
						setCurrentPhoto(currentPhoto + 1)
					}}
				>
					next
				</button>
			</div>
			<Content>
				<PhotoSlider className={`current-slider-${data.id}`}>
					<div
						className='photo-slider-wrapper'
						style={{
							transform: `translateX(-${data.index * (100 / data.length)}%)`,
						}}
					>
						{data.map(data => (
							<Photo key={data.id} data={data} currentPhoto={currentPhoto} />
						))}
					</div>
				</PhotoSlider>
			</Content>
		</Container>
	)
}
