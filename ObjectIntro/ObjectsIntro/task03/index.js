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
    return "Name movie: " + this.name + ", director: " + this.director + ", actor: " + this.actor.firstName + " " + this.actor.lastName;
  };
  this.addSuportActor = function (actor) {
    return suportingActors.push(actor);
  };
  this.removeSuportActor = function (delName) {
      return suportingActors.splice(suportingActors.findIndex((firstName) => firstName == delName.firstName && lastName == delName.lastName), 1);
     
  };
  this.printSuportActors = function () {
    return this.suportingActors;
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
  };
  this.addAwards = function (award) {
    return this.awards.push(award);
  };
  this.printAwards = function () {
    return this.awards;
  };
}
var movie = new FavouriteMovie(
  "The Deer Hunter",
    {
    firstName: "Robert",
    lastName: "De Niro"},
    [
        {
            firstName: "Meryl",
            lastName: "Streep"
        },
        {
            firstName: "Christopher",
            lastName: "Walken"
        },
        {
            firstName: "John",
            lastName: "Cazale"
        },
        {
            firstName:"John",
            lastName: "Savage"
        }],
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
console.log(movie.printAwards());
console.log(movie.printSuportActors());
movie.addSuportActor({ firstName: "George", lastName: "Dzundza" });
console.log(movie.printSuportActors());
movie.removeSuportActor({ firstName: "George", lastName: "Dzundza" });
console.log(movie.printSuportActors());
