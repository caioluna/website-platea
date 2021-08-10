import React, { useState } from 'react'

import { PhotoItem } from './styles'

export default function Photo({ data, currentPhoto }) {
	// const cursorTrace = e => {
	// 	const itemDescription = document.querySelectorAll('.description')

	// 	let x = e.clientX
	// 	let y = e.clientY

	// 	for (let each of itemDescription) {
	// 		each.style.left = x + 'px'
	// 		each.style.top = y + 'px'
	// 	}
	// }

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

// {data.map(image => {
//   return (
//     <div
//       key={image.id}
//       className='item'
//       onMouseMove={e => {
//         const itemDescription =
//           document.querySelectorAll('.description')

//         let x = e.clientX
//         let y = e.clientY

//         for (let each of itemDescription) {
//           each.style.left = x + 'px'
//           each.style.top = y + 'px'
//         }
//       }}
//     >
//       <img
//         src={`http://localhost:1337${image.image.formats.small.url}`}
//         alt={image.title}
//       />
//       <span className='description'>
//         <h4>{image.title}</h4>
//         <div className='hashtag'>
//           {image.tags.split(',').map((tag, id) => {
//             return (
//               <span key={id} className='hash'>
//                 #{tag.trim()}
//               </span>
//             )
//           })}
//         </div>
//       </span>
//     </div>
//   )
// })}
