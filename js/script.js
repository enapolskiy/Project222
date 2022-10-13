// 'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один из последних фильмов что вы посмотрели", ""),
      b = prompt("На сколько вы его оцениваете", ""),
      c = prompt("Один из последних фильмов что вы посмотрели", ""),
      d = prompt("На сколько вы его оцениваете", "");

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;
