import React from 'react'

import { Boxes, Container, Content } from './styles'

import './styles'
import visualIcon from '../../assets/eye-regular.svg'
import pressKitIcon from '../../assets/box-open-solid.svg'
import giftIcon from '../../assets/gifts-solid.svg'
import createIcon from '../../assets/palette-solid.svg'

export default function Services() {
	return (
		<Container>
			<Content>
				<h1>O que oferecemos</h1>

				<Boxes>
					<div className='box'>
						<h4>Visual</h4>
						<img src={visualIcon} alt='Visual icon' />
						<span className='description'>
							O que os olhos veem, o coração sente
						</span>
					</div>

					<div className='box'>
						<h4>Press kit</h4>
						<img src={pressKitIcon} alt='Visual icon' />
						<span className='description'>
							Quero ver todo mundo falando da gente
						</span>
					</div>

					<div className='box'>
						<h4>Brindes</h4>
						<img src={giftIcon} alt='Visual icon' />
						<span className='description'>Dando forma a sonhos e ideias</span>
					</div>

					<div className='box'>
						<h4>Criação</h4>
						<img src={createIcon} alt='Visual icon' />
						<span className='description'>
							O impossível é pra já! Os milagres demoram um pouco mais
						</span>
					</div>
				</Boxes>
			</Content>
		</Container>
	)
}
