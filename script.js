"use strict"

let numberOfFilms = prompt('Сколько фильмов посмотрели','');

let personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let films = [];
let evaluation = [];
for (let i = 0; i < 2; i++)
{
    films[i] = prompt('Какой последний фильм посмотрели?','');
    evaluation[i] = prompt('Какую оценку поставите?','');
    personalMovieDB.movies[films[i]] = evaluation[i];
}

console.log(personalMovieDB.movies);


