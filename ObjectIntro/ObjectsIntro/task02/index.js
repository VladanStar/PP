/*4. Write a function that creates an object that represents a culinary recipe. Each recipe is
described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
preparing time, preparing instruction.
○ Add a method that prints out all the ingredients necessary for the meal
preparation.
○ Add a method that checks if a meal can be prepared for 15 minutes.
○ Add a method that changes the type of cuisine to the given value.
○ Add a method that delete a given ingredient from the list of ingredients.*/

function CulinareRecipe(
  name,
  type,
  complexity,
  listOfIngrendients,
  preparingTime,
  instuctions
) {
  this.name = name;
  this.type = type;
  this.complexity = complexity;
  this.listOfIngrendients = listOfIngrendients;
  this.preparingTime = preparingTime;
  this.instuctions = instuctions;
  this.change = function (cuisine) {
    return (this.type = cuisine);
  };
  this.is15M = function (preparingTime) {
    var isTime = this.reparingTime <= 15 ? "Yess" : "No";
    return isTime;
  };

  this.deleteI = function (ingredient) {
    var indeks = listOfIngrendients.indexOf(ingredient);
    return this.listOfIngrendients.splice(indeks, indeks + 1);
  };
  this.addIngredients = function (ingredient) {
    return this.listOfIngrendients.push(ingredient);
  };
}

var piza = new CulinareRecipe(
  "Quatro Staqione",
  "Italy",
  "simple",
  [
    "jaja",
    "pirotski sir",
    "origano",
    "kecap",
    "kackavalj",
    "masline",
    "mleveno meso",
  ],
  13,
  "In the colinary"
);
piza.change("Juzna Srbija");

piza.deleteI("masline");
piza.addIngredients("pavlaka");
piza.preparingTime = 22;
console.log(piza.is15M());

console.log(piza);

/*3. Write a function that creates an object that represents a project. Each project is
described by: description, programming language, git repository, boolean status that
says if the project is in development or not. Add a method that prints out the project's
repository, a method that checks if the project is written in JavaScript as well as a
method that checks if the project is in development or not. */

function CreateProject(desc, lang, gitUrl, isDev) {
  this.desc = desc;
  this.lang = lang;
  this.gitUrl = gitUrl;
  this.isDev = isDev;
  this.printRepo = function (gitUrl) {
    console.log(this.gitUrl);
  };
  this.isJavaScript = function (lang) {
    if (this.lang === "JavaScript") {
      return "JavaScript";
    } else {
      return this.lang;
    }
  };
  this.isDevelopment = function (isDev) {
    return this.isDev
      ? "project is in development"
      : "project is not in development";
  };
}
var calculator = new CreateProject(
  "calculator",
  "Payton",
  "https://github.com/VladanStar/PP.git",
  true
);
calculator.isDev = false;
console.log(calculator);
console.log(calculator.isDevelopment());
calculator.printRepo();
console.log("__________________________________________");
console.log("The best movie in the world");
console.log("__________________________________________");
/*2. Create an object that represents your favourite movie. Please include title, actors,
director, genre, popularity.*/
function FavouriteMovie(
  name,
  actor,
  suportingActors,
  director,
  screenplay,
  music,
  genere,
  popularity,
  awards,
  plot
) {
  this.name = name;
  this.actor = actor;
  this.suportingActors = suportingActors;
  this.director = director;
  this.screenplay = screenplay;
  this.music = music;
  this.genere = genere;
  this.popularity = popularity;
  this.awards = awards;
  this.plot = plot;
  this.printShortNameMovie = function () {
    return "Name movie: " + this.name + ", director: " + this.director + ", actor: " + this.actor;
  };
  this.addSuportActor = function (actor) {
    return suportingActors.push(actor);
  };
  this.removeSuportActor = function (actor) {
    var indeks = suportingActors.indexOf(ingredient);
    return this.suportingActors.splice(indeks, indeks + 1);
  };
  this.printPopularity = function () {
    return this.popularity;
  };
  this.changePopularity = function (imbd) {
    return (this.popularity = imbd);
  };
  this.printPlot = function () {
    console.log(this.plot);
  };
  this.addNewPlot = function (newPlot) {
    return this.plot += newPlot;
  };
  this.changePlot = function (newPlots) {
    return this.plot = newPlots;
  }
}
var movie = new FavouriteMovie(
  "The Deer Hunter",
  "Robert De Niro",
  ["Meryl Streep", "Christopher Walken", "John Cazale", "John Savage"],
  "Michael Cimino",
  "Deric Washburn",
  "Stanley Myers",
  "epic war drama",
  9.8,
  [
    "academy awards",
    "american cinema editors awards",
    "american movie awards",
    "blue ribbon awards",
    "director guild of america",
  ],
  "An in-depth examination of the ways in which the U.S. Vietnam War impacts and disrupts the lives of people in a small industrial town in Pennsylvania."
);
console.log(movie);
console.log(movie.printShortNameMovie());
console.log(movie.printPopularity());
movie.changePopularity(10.0);
console.log(movie.printPopularity());
movie.printPlot();
movie.addNewPlot("Friendship in war");
movie.printPlot();


