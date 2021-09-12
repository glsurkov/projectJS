"use strict"

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов посмотрели', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов посмотрели', '');
    }
}

start();

let personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let films = [];
let evaluation = [];

function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
        films[i] = prompt('Какой последний фильм посмотрели?', '');
        while (films[i] == null || films[i].length > 50 || films[i] == '') {
            films[i] = prompt('Какой последний фильм посмотрели?', '');
        }
        do {
            evaluation[i] = prompt('Какую оценку поставите?', '');
        }
        while (evaluation[i] == null || evaluation[i].length > 50 || evaluation[i] == '')
        personalMovieDB.movies[films[i]] = evaluation[i];
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классчиеский зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB()
{
    if(personalMovieDB.privat === false)
    {
        console.log(personalMovieDB);
    }
}

function writeYourGenres()
{
    for (let i = 0; i < 3; i++)
    {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1} ?`,'')
    }
}

writeYourGenres();
showMyDB();

console.log(personalMovieDB.movies);


