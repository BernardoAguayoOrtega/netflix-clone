//import styled component
import styled, { css } from 'styled-components';

//create and import ListOfCards
export const ListOfCards = styled.div`
	display: flex;
	overflow-y: hidden;
	overflow-x: scroll;
	padding: 2rem;

	::-webkit-scrollbar {
		display: none;
	}
`;

//create and import Image
export const Poster = styled.img`
	object-fit: contain;
	width: 100%;
	${({ isLargeRow }) =>
		isLargeRow === true
			? css`
					max-width: 25rem;
					transform: scale(1.1);
			  `
			: css`
					max-width: 15rem;
			  `};
	margin-right: 1rem;
	transition: transform 450ms;

	:hover {
		transform: scale(1.08);
	}
`;

//create and import Image
export const Title = styled.h2`
	text-align: center;
	color: white;
`;
