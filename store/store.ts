import { makeAutoObservable } from 'mobx';
import { Movie } from '../types';

class Store {
    movies: Map<string, Movie>;
    filterEnabled: boolean;

    constructor() {
        this.movies = new Map();
        this.filterEnabled = false;

        this.setMovies();

        makeAutoObservable(this);
    }

    get viewData(): Movie[] {
        // [...this.movies.values()].map(movie => console.log(movie));
        return [...this.movies.values()].filter(movie => 
            this.filterEnabled ? movie.isFavorite === true : true
        );
    }

    setMovies() {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then((movies: Movie[]) => {
            this.movies = new Map(movies.map((movie: Movie) => [movie.id, { ...movie, isFavorite: false }]));
        })
        .catch(error => console.error('error', error.message));
    }

    removeMovie(id: string) {
        this.movies.delete(id);
    }

    setFavorite(id: string, isFavorite: boolean) {
        this.movies.set(id, { ...this.movies.get(id) as Movie, isFavorite });
    }

    enableFilter(isEnabled: boolean) {
        this.filterEnabled = isEnabled;
    }
}

export { Store };
