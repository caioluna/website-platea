import styled from 'styled-components'

export const Container = styled.div`
	position: fixed;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100px;
	padding: 10px;
	z-index: 9999;

	&.scrolling {
		background-color: #121212;
		height: 60px;
	}
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

		.button-bg-animate {
			position: absolute;
			width: 40px;
			height: 40px;
			background-color: #fddb00aa;
			background-color: #ffffff;
			border-radius: 100%;
			border-width: 5px;
			z-index: 1;
		}

		button {
			background: none;
			display: flex;
			cursor: pointer;
			z-index: 999;
		}
	}

	@media (max-width: 460px) {
		.logo {
			margin-bottom: 40px;
			button {
				img {
					width: 45px;
				}
			}
		}
		.button-bg-animate {
			display: none;
		}
		nav {
			display: none;
		}
	}
`

export const Nav = styled.nav`
	position: absolute;
	border-radius: 3px;

	ul {
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;

		height: 40px;
		width: 500px;

		#left,
		#right {
			overflow: hidden;
			width: 240px;

			li a,
			button {
				cursor: pointer;

				&:hover {
					color: #fddb00;
				}
			}
		}

		#left {
			display: flex;
			justify-content: flex-end;
			transform: translateX(-20px);
			border-radius: 50px 0 0 50px;
			border-radius: 3px;
		}

		#right {
			display: flex;
			justify-content: flex-start;
			transform: translateX(20px);
		}

		li {
			padding: 2px 11px;

			a,
			button {
				font-family: 'Poppins', sans-serif;
				font-size: 14px;
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
	.wrap {
		display: flex;
		align-items: center;
		height: 30px;
	}

	@media (max-width: 460px) {
		display: none;
	}
`

export const MobileNav = styled.div`
	display: none;
	position: absolute;
	bottom: 50px;

	.overlay {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.8);
		z-index: -1;
	}

	ul {
		width: 100vw;
		padding: 50px 0;
		display: flex;
		flex-direction: column;
		justify-content: center;

		li {
			text-align: center;
			margin: 10px auto;

			a,
			.mobile-button {
				display: block;
				width: 200px;
				padding: 15px 30px;

				margin: 0 auto;
				font-size: 22px;
				background: #202020;
				border-radius: 6px;
				color: #fff;
			}
		}
	}

	@media (max-width: 460px) {
		display: flex;
	}
`
