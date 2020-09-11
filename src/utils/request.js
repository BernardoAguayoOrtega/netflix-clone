const API_KEY = 'e6aa719396ca92fd4e89ec1290fcd823';

export const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	FetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

//base url to make requests to the movie database and also export it 
export const instance = (request) => fetch(`https://api.themoviedb.org/3${request}`);