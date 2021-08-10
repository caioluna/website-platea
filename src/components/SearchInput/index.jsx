import React from 'react'
import styled from 'styled-components'

export default function SearchInput() {
	return (
		<Input>
			<form action=''>
				<label htmlFor=''>
					<input type='text' placeholder='Filtrar' />
					<button>Buscar</button>
				</label>
			</form>
		</Input>
	)
}

const Input = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	margin-top: 60px;

	width: 100%;
	height: 50px;

	form {
		width: 400px;

		label {
			position: relative;
			height: 40px;

			input {
				width: 318px;
				height: inherit;
				border-radius: 6px 0 0 6px;

				background-color: #212121;
				border: 1px solid #b0b0b0;
				border-right: 0;
				color: #fff;
				padding: 12px 20px;

				&::placeholder {
					color: #b0b0b0;
				}
			}

			button {
				width: 80px;
				height: inherit;

				border-radius: 0 6px 6px 0;
				background-color: #fddb00;
				color: #2f2f2f;
			}
		}
	}
`
