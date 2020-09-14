//import styled component
import styled, { css } from 'styled-components';
//import base url
import { baseUrl } from '../../utils/request';

//create and export header component
export const Header = styled.header`
	background-size: cover;
	${({ image }) =>
		image &&
		css`
			background: url(${baseUrl}${image});
		`};
`;
