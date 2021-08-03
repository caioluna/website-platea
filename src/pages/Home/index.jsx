import React, { useEffect } from 'react';

import { Container, Content } from './styles';

import plateaLogoHero from '../../assets/platea-logo-hero.svg';
import geoFormFull from '../../assets/geo-form-full.svg';

import { motion } from 'framer-motion';

export default function Home() {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	return (
		<Container
			as={motion.main}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Content>
				<img
					className='hero-logo'
					src={plateaLogoHero}
					alt='Platea Hero Logo'
				/>
				<div className='hero'>
					<img
						className='geoform left'
						src={geoFormFull}
						alt='Geometric background left form'
					/>
					<img
						className='geoform right'
						src={geoFormFull}
						alt='Geometric background right form'
					/>
				</div>
			</Content>
		</Container>
	);
}
