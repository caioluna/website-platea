import styled from 'styled-components'

export const Container = styled.header`
	position: fixed;
	bottom: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 40px;
	z-index: 9999;
`
export const Content = styled.div`
	max-width: 1040px;
	width: 1040px;
	display: flex;
	align-items: center;
	justify-content: center;

	.logo {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;

		button {
			background: none;
			display: flex;
			cursor: pointer;
			z-index: 999;
		}
	}
`

export const Nav = styled.nav`
	position: absolute;

	ul {
		display: flex;
		list-style: none;

		#left,
		#right {
			overflow: hidden;
			width: 200px;

			li a {
				transition: all 0.3s ease-in-out;

				&:hover {
					color: #fddb00;
					transition: all 0.3s ease-in-out;
				}
			}
		}

		#left {
			display: flex;
			justify-content: flex-end;
			margin-right: 30px;

			li {
				opacity: 0;
				transform: translateX(180px);
				transition: all 0.1s ease;
			}

			&.open > li {
				opacity: 1;
				transform: translateX(-45px);
				transition: all 0.1s ease;
			}
		}

		#right {
			display: flex;
			justify-content: flex-start;
			margin-left: 30px;

			li {
				opacity: 0;
				transform: translateX(-180px);
				transition: all 0.1s ease;
			}

			&.open > li {
				opacity: 1;
				transform: translateX(45px);
				transition: all 0.1s ease;
			}
		}

		li {
			padding: 2px 11px;

			a {
				color: #fff;

				&:active {
					color: #fddb00;
				}
			}

			+ li {
				margin-left: 20px;
			}
		}
	}
`
