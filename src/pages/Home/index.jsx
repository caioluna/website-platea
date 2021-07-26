import React from 'react';

import { Container, Content } from './styles';

import plateaLogoHero from '../../assets/platea-logo-hero.svg';
import form from '../../assets/square-form.svg';
import geoFormWhite from '../../assets/Background-white.png';
import geoFormYellow from '../../assets/Background-yellow.png';

export default function Home() {
	return (
		<Container>
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
		</Container>
	);
}
