"use strict"


let numberOfFilms = prompt('Сколько фильмов посмотрели', '');

let personalMovieDB = {
    count : +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let films = [];
let evaluation = [];
for (let i = 0; i < 2; i++)
{
    films[i] = prompt('Какой последний фильм посмотрели?', '');
    while(films[i] == null || films[i].length > 50 || films[i] == '')
    {
        films[i] = prompt('Какой последний фильм посмотрели?', '');
    }
    do {
        evaluation[i] = prompt('Какую оценку поставите?', '');
       }
    while(evaluation[i] == null || evaluation[i].length > 50 || evaluation[i] == '')
    personalMovieDB.movies[films[i]] = evaluation[i];
}

if (personalMovieDB.count < 10)
{
    console.log('Просмотрено довольно мало фильмов');
}
else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30)
{
    console.log('Вы классчиеский зритель');
}
else if (personalMovieDB.count > 30)
{
    console.log('Вы киноман');
}
else
{
    console.log('Произошла ошибка');
}

console.log(personalMovieDB.movies);


