import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import CloseButton from '../../components/CloseButton'
import { Container, Content, Header, Jobs } from '../Cases/styles'

export default function Cases() {
	const [images, setImages] = useState([])
	// const [isLoading, setIsLoading] = useState(true);
	// const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		window.scroll(0, 0)

		try {
			const fetchImages = async () => {
				const response = await fetch(
					`https://graph.instagram.com/me/media?access_token=${process.env.REACT_APP_INSTAGRAM_KEY}&fields=id,caption,media_type,media_url`
				)
				const posts = await response.json()
				setImages([...posts.data])
			}

			fetchImages()
		} catch (error) {
			console.log(error)
		}
	}, [])

	return (
		<Container
			as={motion.main}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<CloseButton />
			<Content>
				<Header>
					<h1>Cases</h1>
					<form action=''>
						<label htmlFor=''>
							<input type='text' placeholder='Filtrar' />
							<button>Buscar</button>
						</label>
					</form>
				</Header>
				<Jobs>
					{images.map(image => {
						function handleTagsCaption(caption) {
							if (!caption) return null
							let newArray = caption.split(' ')

							const hashes = newArray.filter(item => {
								return item.includes('#')
							})
							return hashes
						}

						function handleTitleCaption(caption) {
							if (!caption) return null

							let newArray = caption.split(' ')

							const title = newArray.filter(item => {
								return !item.includes('#')
							})

							return title
						}

						return (
							<div
								key={image.id}
								className='item'
								onMouseMove={e => {
									const desc = document.querySelectorAll('.description')

									let x = e.pageX
									let y = e.pageY

									for (let each of desc) {
										each.style.left = x + 'px'
										each.style.top = y + 'px'
									}
								}}
							>
								<img src={image.media_url} alt={`imagem de`} />
								<span className='description'>
									<h4>{handleTitleCaption(image.caption)}</h4>
									<div className='hashtag'>
										<span className='hash'>
											{handleTagsCaption(image.caption)}
										</span>
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
