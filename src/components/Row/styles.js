//import styled component
import styled from 'styled-components';

//create and import card container
export const Card = styled.div`
	padding: 1rem;
`;

//create and import ListOfCards
export const ListOfCards = styled.div`
	display: flex;
`;

//create and import ImageContainer
export const PosterContainer = styled.figure`
	max-width: 10rem;
`;

//create and import Image
export const Poster = styled.img`
	object-fit: contain;
	width: 100%;
	height: 10rem;
`;
