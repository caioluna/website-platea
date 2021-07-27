import React, { useEffect } from 'react';

import { Container, Content } from './styles';

import Agency from '../../components/Agency';
import Clients from '../../components/Clients';
import Services from '../../components/Services';

import plateaLogoHero from '../../assets/platea-logo-hero.svg';
import form from '../../assets/square-form.svg';
import geoFormWhite from '../../assets/Background-white.png';
import geoFormYellow from '../../assets/Background-yellow.png';

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
				<div className='hero'>
					<img className='geoform geo-white' src={geoFormWhite} alt='' />
					<img className='geoform geo-yellow' src={geoFormYellow} alt='' />
					<div className='hero-wrapper'>
						<img className='hero-forms' src={form} alt='' />
						<img className='hero-forms' src={form} alt='' />
						<img className='hero-forms' src={form} alt='' />
						<img className='hero-logo' src={plateaLogoHero} alt='Platea Logo' />
					</div>
				</div>
			</Content>
			<Agency />
			<Clients />
			<Services />
		</Container>
	);
}
