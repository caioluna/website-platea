import React, { useState } from 'react'
import { BoxItem } from './styles'

export default function Box({ icon, description, title }) {
	const [show, setShow] = useState(false)

	const handleShowSpan = value => {
		setShow(value)
	}

	return (
		<BoxItem>
			<div
				className='box'
				onMouseEnter={() => handleShowSpan(true)}
				onMouseLeave={() => handleShowSpan(false)}
			>
				<h4>{title}</h4>
				<img src={icon} alt={title + ' icon'} />
				<span className={show ? 'show' : 'hide'}>{description}</span>
			</div>
		</BoxItem>
	)
}
