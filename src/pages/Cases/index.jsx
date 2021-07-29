import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Container, Content, Header, Jobs } from '../Cases/styles';

export default function Cases() {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		window.scroll(0, 0);

		try {
			const fetchImages = async () => {
				const response = await fetch(
					`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_REACT_KEY}&q=${searchTerm}&image_type=photo&pretty=true`
				);
				const data = await response.json();
				setImages(data.hits);
			};

			fetchImages();
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<Container
			as={motion.main}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
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
						const hashes = image.tags.split(',');
						return (
							<div key={image.id} className='item'>
								<img src={image.webformatURL} alt={`imagem de ${image.user}`} />
								<span className='description'>
									<h4>Caixa Barbie Dra. Cherie</h4>
									<div className='hashtag'>
										{hashes.map(hash => (
											<span className='hash'>#{hash.trim()}</span>
										))}
										{/* <span className='hash'>
											{hashes.map(hash => `#${hash.trim()}`)}
										</span> */}
									</div>
								</span>
							</div>
						);
					})}
				</Jobs>
			</Content>
		</Container>
	);
}
