//import styled component
import styled, { css } from 'styled-components';
//import base url
import { baseUrl } from '../../utils/request';

//create and export header component
export const Header = styled.header`
	${({ image }) =>
		image &&
		css`
			background: url(${baseUrl}${image}) no-repeat center center;
		`};

	background-size: cover;
	object-fit: cover;
	height: 45rem;
`;

//create and export buttons component
export const Buttons = styled.div``;

//create and export button component
export const Button = styled.button`
	cursor: pointer;
	color: #fff;
	outline: none;
	border: none;
	font-weight: 700;
	border-radius: 0.2vw;
	padding: 0 2rem;
	margin-right: 1rem;
	padding-top: 0.5rem;
	background-color: rgba(51, 51, 51, 0.5);
	padding-bottom: 0.5rem;

	:hover {
		color: black;
		background: #e6e6e6;
		transition: all 0.2s;
	}
`;

//create and export button component
export const Description = styled.h2`
	width: 45rem;
	line-height: 1.3;
	padding-top: 1rem;
	font-size: 1.5rem;
	max-width: 60%;
`;

//create and export button component
export const Title = styled.h1`
	font-size: 3rem;
	font-weight: 800;
	padding-bottom: 0.3rem;
`;

//create and export content component
export const HeaderContent = styled.div`
	margin-left: 3rem;
	padding-top: 14rem;
	height: 19rem;
`;
