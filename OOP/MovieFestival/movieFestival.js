(function () {
  console.log("Hi, This is BIT Movie Festival and show mast go on!!!");
   //Kreiramo konstruktor za Zanr.
 

  function Genre(name) {
    this.name = name;
    //UZIMAMO PRVO I ZADNJE SLOVA ZANRA I RADIMO UPPER U METODI
    this.getData = function () {
      var firstLetter = this.name.charAt(0);
      var lastLetter = this.name.charAt(name.length - 1);
      var result = firstLetter + lastLetter;
      return result.toUpperCase();
    };
  }

  // Kreiramo konstruktor Movie

  function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
    // PRAVIMO NAZIV FILMA SA ZANROM I DUZINOM
    this.getDataMovie = function () {
      return this.title + " " + this.genre + " " + this.length + "min, ";
    };
  }
  // Kreiramo konstrutor za Program

  function Program(date) {
    this.date = date;
    this.moviesList = [];
     this.totalNumberOfMovies = 0;

    this.addMovie = function (movie) {
      this.moviesList.push(movie);
       this.totalNumberOfMovies++;
    };
   
    this.getNumOfMovies = function () {
      return this.moviesList.length;
    };
    this.programLength = function () {
      var length = 0;
      for (var i = 0; i < this.moviesList.length; i++) {
        var movie = this.moviesList[i];
        length += movie.length;
      }
      return length;
    };
    this.getData = function () {
      var myDate = this.date;
      var dayProgram = "\t";
      // DNEVNI PROGRAM DAN,MESEC,GODINA SA UKUPNOM DUZINOM POZIVAMO METODU DUZINA FILMA
      dayProgram +=
        this.date.getDate() +
        "." +
        this.date.getMonth() +
        "." +
        this.date.getYear() +
        "," +
        " program length from " +
        this.programLength() +
        " min  from all movies \n";
      for (var i = 0; i < this.moviesList.length; i++) {
        var movie = this.moviesList[i];
        dayProgram += "\t\t\t" + movie.getDataMovie() + "\n";
      }
      return dayProgram;
    };
  }

  // Kreiramo konstruktor za festival

  function Festival(nameFestival) {
    this.nameFestival = nameFestival;
    this.programs = [];
  
    this.programFestival = function (program1) {
      return this.programs.push(program1);
    };
    // IME FESTIVALA I UKUPAN BROJ FILMOVA
    this.getDataFestival = function () {
      var final = "";

      var firstFinal =
        nameFestival +
        " has  movie titles " +
        this.programFestival() +
        " movies \n";

      var result = "";
      for (var i = 0; i < this.programs.length - 1; i++) {
        result += "\t" + this.programs[i];
      }
      final = firstFinal + result;
      return final;
    };
  }

  /***KREIRAMO INSTANCU ZANRA UBACUJEMO ARGUMENT IMENA ***/
  var drama = new Genre("Drama");
  var horror = new Genre("Horror");
  var vestern = new Genre("Western");
  var action = new Genre("Action")
  // console.log(g1.getData());
  // console.log(g2.getData());

  /*** KREIRAMO INSTANCU FILMA UBACUJEMO  NAZIV FILMA, VREDNOST ZANRA. DUZINU U MIN ***/
  var movie1 = new Movie("Full Metal Jacket", drama.getData(), 116);
  var movie2 = new Movie("Shuter island", drama.getData(), 130);
  var movie3 = new Movie(" The Shining", horror.getData(), 146);
  var movie4 = new Movie("Rosemary's Baby", horror.getData(), 136);
  var movie5 = new Movie(
    "The Good, the Bad and the Ugly",
    vestern.getData(),
    177
  );
  // console.log(m1.getDataMovie());
  // console.log(m2.getDataMovie());

  /*** KREIRAMO INSTANCU PROGRAMA UBACUJEM DATUM U FORMI YYYY, M, DD ***/
  var program1 = new Program(new Date(2021, 5, 22));
  var program2 = new Program(new Date(2021, 5, 23));

  /** U PROGRAMU POZIVAMO METODU addMovie SA ARGUMENTOM KOJI PROSLEDUJE FILM ***/
  program1.addMovie(movie1);
  program1.addMovie(movie2);
  program1.addMovie(movie3);
  program2.addMovie(movie3);
  program2.addMovie(movie2);
  program2.addMovie(movie4);
  program1.addMovie(movie4);
  program2.addMovie(movie5);
   program1.addMovie(movie4);

  // console.log(program1.getData());

  var festival1 = new Festival("BIT Weekend Festival");
  var festival2 = new Festival("Small Weekend Festival");
  festival1.programFestival(program1.getData());
  festival2.programFestival(program2.getData());

  console.log(festival1.getDataFestival());

  console.log(festival2.getDataFestival());

  console.log("SECOND WAY!!!!!!")
  //  FUNCTION CRETATE
  function createMovie(title, genre, length) {
    //var gnr = new Genre(genre);
    return new Movie(title, genre, length);
  }

  function createProgram(date) {
    return new Program(date);
  }

  var firstMovie = createMovie("Sparta", "action", 115);
  var secondMovie = createMovie("Taxi driver", "drama", 120);
  var thirdMovie = createMovie("Birds", "horror", 124);

  var firstProgram = createProgram(new Date(2021, 5, 22));
  var secondProgram = createProgram(new Date(2021, 5, 22));

  firstProgram.addMovie(firstMovie);
  firstProgram.addMovie(secondMovie);
  secondProgram.addMovie(thirdMovie);

  var filmFest = new Festival("FilmFest may  2021");
  filmFest.programFestival(firstProgram.getData());
  filmFest.programFestival(secondProgram.getData());
  console.log(filmFest.getDataFestival());
})();
