import React from 'react'
import { NavLink } from 'react-router-dom'

import { MdHome } from 'react-icons/md'
import styled from 'styled-components'

export default function CloseButton() {
	return (
		<Close>
			<NavLink to='/'>
				<MdHome />
				{/* <span>HOME</span> */}
			</NavLink>
		</Close>
	)
}

const Close = styled.button`
	position: absolute;
	top: 35px;
	right: 30px;

	display: flex;
	justify-content: center;
	align-items: center;
	background: none;

	a {
		display: flex;
		justify-content: center;
		align-items: center;

		svg {
			left: 0;
			top: 0;
			width: 25px;
			height: 25px;

			path {
				fill: #fddb00;
			}
		}

		span {
			font-family: 'Poppins', sans-serif;
			font-size: 16px;
			font-weight: 600;
			color: #fddb00;
		}
	}
`
