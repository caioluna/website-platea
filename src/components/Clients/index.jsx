import React from 'react';

import { Container, Content, Slider } from './styles';

export default function Clients() {
	return (
		<Container>
			<Content>
				<Slider>
					<h1>Nossos clientes</h1>
					<div className='slider-rows'>
						<div className='upper-row'>
							<div className='placeholder'></div>
							<div className='placeholder'></div>
							<div className='placeholder'></div>
							<div className='placeholder'></div>
							<div className='placeholder'></div>
						</div>
						<div className='lower-row'>
							<div className='placeholder'></div>
							<div className='placeholder'></div>
							<div className='placeholder'></div>
							<div className='placeholder'></div>
							<div className='placeholder'></div>
						</div>
					</div>
				</Slider>
			</Content>
		</Container>
	);
}
