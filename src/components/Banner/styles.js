//import styled component
import styled, { css } from 'styled-components';
//import base url
import { baseUrl } from '../../utils/request';

//create and export header component
export const Header = styled.header`
	${({ image }) =>
		image &&
		css`
			background: url(${baseUrl}${image}) no-repeat;
		`};

	background-size: cover;
	object-fit: contain;
	height: 45rem;
`;

//create and export buttons component
export const Buttons = styled.div``;

//create and export button component
export const Button = styled.button``;

//create and export button component
export const Description = styled.h2``;
