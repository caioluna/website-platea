import React from 'react'

import { PhotoItem } from './styles'

export default function Photo({ data, currentPhoto }) {
	return (
		<PhotoItem id={`photo-${currentPhoto}`}>
			<img
				src={`http://localhost:1337${data[currentPhoto].image.formats.small.url}`}
				alt={data.title}
			/>
			<span className='description'>
				<h4>{data.title}</h4>
				<div className='hashtag'>
					{data.tags.split(',').map((tag, id) => {
						return (
							<span key={id} className='hash'>
								#{tag.trim()}
							</span>
						)
					})}
				</div>
			</span>
		</PhotoItem>
	)
}
