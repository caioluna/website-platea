import React from 'react'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

import closeIcon from '../../assets/close-icon.svg'

export default function CloseButton() {
	return (
		<Close>
			<NavLink to='/'>
				<img src={closeIcon} alt='return home button' />
			</NavLink>
		</Close>
	)
}

const Close = styled.button`
	position: absolute;
	top: 35px;
	right: 30px;

	display: flex;
	background: none;
`
