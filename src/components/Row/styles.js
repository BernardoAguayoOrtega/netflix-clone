//import styled component
import styled from 'styled-components';

//create and import ListOfCards
export const ListOfCards = styled.div`
	display: flex;
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
