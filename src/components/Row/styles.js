//import styled component
import styled from 'styled-components';

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
	max-height: 10rem;
	margin-right: 1rem;
	transition: transform 450ms;
	:hover {
		transform: scale(1.1);
	}
`;

//create and import Image
export const Title = styled.h2`
	text-align: center;
`;
