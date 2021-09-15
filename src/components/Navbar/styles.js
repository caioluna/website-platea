import styled from 'styled-components'

export const Container = styled.div`
	position: absolute;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100px;
	padding: 10px;
	z-index: 9999;

	@media (max-width: 460px) {
		top: 0;
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

		.mobile-nav-button {
			display: none;
			svg {
				width: 30px;
				height: 30px;
				color: #fff;
			}
		}
	}

	@media (max-width: 460px) {
		justify-content: flex-end;
		padding-right: 30px;

		.logo {
			.logo-button {
				display: none;
			}
			.mobile-nav-button {
				display: block;
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
	position: relative;
	top: 30px;
	justify-content: center;
	align-items: center;

	.overlay {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.9);
	}

	ul {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;

		width: 100vw;
		padding: 50px 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		list-style: none;

		li {
			text-align: center;
			margin: 10px auto;

			a,
			.mobile-button {
				display: block;
				width: 160px;
				height: 50px;
				line-height: 50px;
				text-align: center;

				margin: 0 auto;
				font-size: 22px;
				background: #fddb00;
				border-radius: 3px;
				color: #202020;

				@media (max-width: 320px) {
					width: 120px;
					padding: 10px 15px;

					margin: 0 auto;
					font-size: 18px;
				}
			}
		}

		.home-menu-button {
			svg {
				color: #fddb00;
			}

			a {
				width: 35px;
				height: 35px;
				padding: 0;

				display: flex;
				position: absolute;
				top: 40px;
				left: 40px;

				background-color: transparent;
			}
		}
	}

	@media (max-width: 460px) {
		display: block;
	}
`
