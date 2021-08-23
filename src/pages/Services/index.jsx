import React from 'react'
import { motion } from 'framer-motion'

import CloseButton from '../../components/CloseButton'
import BoxItem from '../../components/BoxItem'
import GeoForm from '../../components/GeoForm'

import { Container, Content } from './styles'

import visualIcon from '../../assets/eye-regular.svg'
import pressKitIcon from '../../assets/box-open-solid.svg'
import giftIcon from '../../assets/gifts-solid.svg'
import createIcon from '../../assets/palette-solid.svg'

export default function Services() {
	const container = {
		show: {
			transition: {
				staggerChildren: 0.2,
			},
		},
	}

	const item = {
		hidden: { y: 150, opacity: 0 },
		show: {
			y: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				duration: 0.6,
			},
		},
	}
	return (
		<Container
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<CloseButton />
			<GeoForm />
			<Content>
				<motion.h1
					initial={{ opacity: 0, x: -300 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.3, type: 'spring', duration: 0.5 }}
				>
					Nossos serviços
				</motion.h1>

				<motion.div
					className='box-wrapper'
					variants={container}
					initial='hidden'
					animate='show'
				>
					<BoxItem
						icon={visualIcon}
						description={'O que os olhos veem, o coração sente.'}
						title={'Visual'}
						variants={item}
					/>
					<BoxItem
						icon={pressKitIcon}
						description={'Quero ver todo mundo falando da gente.'}
						title={'Press kit'}
						variants={item}
					/>
					<BoxItem
						icon={giftIcon}
						description={'Dando forma a sonhos e ideias.'}
						title={'Brindes'}
						variants={item}
					/>
					<BoxItem
						icon={createIcon}
						description={
							'O impossível é pra já! Os milagres demoram um pouco mais.'
						}
						title={'Criação'}
						variants={item}
					/>
				</motion.div>
			</Content>
		</Container>
	)
}
