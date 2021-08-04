import React from 'react'
import CloseButton from '../../components/CloseButton'
import BoxItem from '../../components/Box'
import GeoForm from '../../components/GeoForm'

import { Container, Content } from './styles'

import visualIcon from '../../assets/eye-regular.svg'
import pressKitIcon from '../../assets/box-open-solid.svg'
import giftIcon from '../../assets/gifts-solid.svg'
import createIcon from '../../assets/palette-solid.svg'

export default function Services() {
	// useEffect(() => {
	// 	const timer = setInterval(() => {
	// 		setShow(false)
	// 	}, 2000)
	// 	return () => clearInterval(timer)
	// }, [show])

	return (
		<Container>
			<CloseButton />
			<GeoForm />
			<Content>
				<h1>Nossos serviços</h1>

				<div className='box-wrapper'>
					<BoxItem
						icon={visualIcon}
						description={'O que os olhos veem, o coração sente.'}
						title={'Visual'}
					/>
					<BoxItem
						icon={pressKitIcon}
						description={'Quero ver todo mundo falando da gente.'}
						title={'Press kit'}
					/>
					<BoxItem
						icon={giftIcon}
						description={'Dando forma a sonhos e ideias.'}
						title={'Brindes'}
					/>
					<BoxItem
						icon={createIcon}
						description={
							'O impossível é pra já! Os milagres demoram um pouco mais.'
						}
						title={'Criação'}
					/>
				</div>
			</Content>
		</Container>
	)
}
