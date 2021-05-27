"use strict";

function Genre(name) {
  this.name = name;
  this.getData = function () {
    return (this.name[0] + this.name[this.name.length - 1]).toUpperCase();
  };
}

function Movie(title, genre, length) {
  this.title = title;
  this.genre = genre;
  this.length = length;
  this.getData = function () {
    return this.title + ", " + this.length + "min, " + this.genre.getData();
  };
}

function Program(date) {
  this.date = date;
  this.listOfMovies = [];
  this.totalNumbOfMovies;
  this.addMovie = function (movie) {
    this.listOfMovies.push(movie);
    this.totalNumbOfMovies = this.listOfMovies.length;
  };
  this.getData = function () {
    var str = "\t";
    var lengthOfAllMovies = 0;
    for (var i = 0; i < this.listOfMovies.length; i++) {
      str += this.listOfMovies[i].getData() + "\n\t";
      lengthOfAllMovies += this.listOfMovies[i].length;
    }
    return (
      this.date +
      ", program duration " +
      lengthOfAllMovies +
      "min\n" +
      str +
      "\n"
    );
  };
}

function Festival(name) {
  this.name = name;
  this.listOfPrograms = [];
  this.numberOfMovies = 0;
  this.addProgram = function (program) {
    this.listOfPrograms.push(program);
  };
  this.getData = function () {
    var str = "";
    for (var i = 0; i < this.listOfPrograms.length; i++) {
      this.numberOfMovies += this.listOfPrograms[i].totalNumbOfMovies;
      str += this.listOfPrograms[i].getData();
    }
    return this.name + " has " + this.numberOfMovies + " movie titles\n" + str;
  };
}

function createMovie(title, genre, length) {
  var gnr = new Genre(genre);
  return new Movie(title, gnr, length);
}

function createProgram(date) {
  return new Program(date);
}

var firstMovie = createMovie("Sparta", "action", 115);
var secondMovie = createMovie("Taxi driver", "drama", 120);
var thirdMovie = createMovie("Birds", "horror", 124);

var firstProgram = createProgram("06/03/20");
var secondProgram = createProgram("26/06/20");

firstProgram.addMovie(firstMovie);
firstProgram.addMovie(secondMovie);
secondProgram.addMovie(thirdMovie);

var filmFest = new Festival("FilmFest20");
filmFest.addProgram(firstProgram);
filmFest.addProgram(secondProgram);

console.log(filmFest.getData());
