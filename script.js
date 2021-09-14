"use strict"


let personalMovieDB = {
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        let numberOfFilms;
        numberOfFilms = +prompt('Сколько фильмов посмотрели', '');

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов посмотрели', '');
        }
        personalMovieDB.count = numberOfFilms;
    },
    rememberMyFilms : function (){
        let films = [];
        let evaluation = [];
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
    },
    detectPersonalLevel : function() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классчиеский зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
    },
    showMyDB :function()
        {
            if(personalMovieDB.privat === false)
            {
                console.log(personalMovieDB);
            }
        },
    writeYourGenres : function()
    {
    for (let i = 0; i < 3; i++)
    {
        do {
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1} ?`, '')
        }while(personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == '')
    }
    personalMovieDB.genres.forEach(function(item, i)
    {
        console.log(`Любимый жанр # ${i+1} - это ${item}`);
    })
    },
    toggleVisibleDB : function()
    {
        if (personalMovieDB.privat == false)
        {
            personalMovieDB.privat = true;
        }
        else
        {
            personalMovieDB.privat = false;
        }
    }

}
personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.writeYourGenres();

personalMovieDB.toggleVisibleDB();

personalMovieDB.showMyDB();

console.log(personalMovieDB.movies);


