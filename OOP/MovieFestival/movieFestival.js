/////////////
"use strict";
/////////////

(function () {
  //////////////////////// GENRE ////////////////////////
  function Genre(name) {
    this.name = name;

    this.getGenreData = function () {
      var genreString = "";
      genreString += this.name[0];
      genreString += this.name[this.name.length - 1];

      return genreString.toUpperCase();
    };
  }

  ///////////////////////// MOVIE /////////////////////////

  function Movie(title, createGenre, length) {
    this.title = title;
    this.genre = createGenre;
    this.length = length;

    this.getMovieLength = function () {
      return this.length;
    };

    this.getMovieData = function () {
      return (
        "\t\t\t\t\t" +
        this.title +
        ", " +
        this.length +
        "min" +
        ", " +
        this.genre.getGenreData()
      );
    };
  }

  ///////////////////////// PROGRAM /////////////////////////

  function Program(date) {
    this.date = date;
    this.movies = [];

    this.getNumberOfMovies = function () {
      return this.movies.length;
    };

    this.addMovie = function (movies) {
      this.movies.push(movies);
    };

    this.getProgramData = function () {
      var movieString = "";
      var totalMoviesLength = 0;
      for (var i = 0; i < this.movies.length; i++) {
        totalMoviesLength += this.movies[i].getMovieLength();
        movieString += "\n" + this.movies[i].getMovieData();
      }
      return this.date + ", " + totalMoviesLength + "min" + ", " + movieString;
    };
  }

  ///////////////////////// FESTIVAL /////////////////////////

  function Festival(name) {
    this.name = name;
    this.program = [];

    this.addProgram = function (program) {
      this.program.push(program);
    };

    this.getFestivalData = function () {
      var festivalString = "";
      var festivalArray = [];
      for (var i = 0; i < this.program.length; i++) {
        festivalString += this.program[i].getProgramData();
        festivalArray += this.program[i].getNumberOfMovies();
      }

      return (
        this.name +
        " has " +
        festivalArray +
        " movie titles" +
        "\n " +
        "\t\t" +
        festivalString
      );
    };
  }

  ////////////////////////////////////////////////////////////////

  //Create Genre:
  var createGenre = new Genre("action");
  var createGenreTwo = new Genre("comedy");

  //console.log(createGenre.getGenreData);

  //Create Movie:
  var createMovie = new Movie("The Shawshank Redemption", createGenre, 130);
  var createMovieTwo = new Movie("Deadpool", createGenreTwo, 108);

  // console.log(createMovie.getMovieData());

  //Create Program:
  var createProgram = new Program("29.10.2010");

  createProgram.addMovie(createMovie);
  createProgram.addMovie(createMovieTwo);

  //console.log(createProgram.getProgramData());

  //Create Festival:
  var createFestival = new Festival("Weekend festival");
  createFestival.addProgram(createProgram);

  console.log(createFestival.getFestivalData());
})();
