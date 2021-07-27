import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { Container, Content, Header, Jobs } from '../Cases/styles';

export default function Cases() {
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
					<div className='item'>
						<img src='' alt='' />
						<span className='description'>
							<h4>Caixa Barbie Dra. Cherie</h4>
							<div className='hashtag'>
								<span className='hash'>#presskit</span>
								<span className='hash'>#personalizado</span>
								<span className='hash'>#barbie</span>
							</div>
						</span>
					</div>
					<div className='item'>
						<img src='' alt='' />
						<span className='description'>
							<h4>Title</h4>
							<div className='hashtag'>
								<span className='hash'>#presskit</span>
								<span className='hash'>#personalizado</span>
								<span className='hash'>#barbie</span>
							</div>
						</span>
					</div>
					<div className='item'>
						<img src='' alt='' />
						<span className='description'>
							<h4>Title</h4>
							<div className='hashtag'>
								<span className='hash'>#presskit</span>
								<span className='hash'>#personalizado</span>
								<span className='hash'>#barbie</span>
							</div>
						</span>
					</div>
					<div className='item'>
						<img src='' alt='' />
						<span className='description'>
							<h4>Title</h4>
							<div className='hashtag'>
								<span className='hash'>#presskit</span>
								<span className='hash'>#personalizado</span>
								<span className='hash'>#barbie</span>
							</div>
						</span>
					</div>
					<div className='item'>
						<img src='' alt='' />
						<span className='description'>
							<h4>Title</h4>
							<div className='hashtag'>
								<span className='hash'>#presskit</span>
								<span className='hash'>#personalizado</span>
								<span className='hash'>#barbie</span>
							</div>
						</span>
					</div>
				</Jobs>
			</Content>
		</Container>
	);
}
