/////////////
"use strict";
/////////////

(function () {
  console.log("Hi!\n");

  ////////////////// PERSON //////////////////

  function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.getData = function () {
      return this.name + " " + this.surname;
    };
  }

  ////////////////// SEAT //////////////////

  function Seat(number, category) {
    if (typeof number === "number" && number !== undefined) {
      this.number = number;
    } else {
      this.number = Math.floor(10 + 90 * Math.random());
    }

    if (category !== undefined) {
      this.category = category;
    } else {
      this.category = "Economic";
    }

    this.getData = function () {
      return this.number + ", " + this.category;
    };
  }

  ////////////////// PASSENGER //////////////////

  function Passenger(person, seat) {
    this.person = person;
    this.seat = seat;
    this.getData = function () {
      return "\t\t" + this.seat.getData() + ", " + this.person.getData();
    };
  }

  ////////////////// FLIGHT //////////////////

  function Flight(relation, date) {
    this.relation = relation;
    this.date = date;
    this.listOfPassengers = [];

    this.getNumberOfPassengers = function () {
      return this.listOfPassengers.length;
    };

    this.addPassenger = function (passenger) {
      this.listOfPassengers.push(passenger);
    };

    this.getData = function () {
      var flightString = "";
      for (var i = 0; i < this.listOfPassengers.length; i++) {
        flightString += "\n" + this.listOfPassengers[i].getData();
      }
      return this.date + ", \t" + this.relation + "\n" + flightString + "\n";
    };
  }

  ////////////////// AIRPORT //////////////////

  function Airport(name) {
    this.name = name;
    this.flights = [];

    this.addFlight = function (flight) {
      this.flights.push(flight);
    };

    this.getData = function () {
      var flightsData = "";
      var numberOfAllPassengers = 0;
      for (var i = 0; i < this.flights.length; i++) {
        flightsData += "\n" + this.flights[i].getData();
        numberOfAllPassengers += this.flights[i].getNumberOfPassengers();
      }

      return (
        "Airport: " +
        this.name +
        ", total passengers: " +
        numberOfAllPassengers +
        "\n" +
        flightsData
      );
    };
  }

  //////////////////////////////////////////////////////////////////////////////////////////
  //Create Person//
  var personInfo = new Person("Vladan", "Cupric");
  var personTwoInfo = new Person("Stevan", "Stasic");
  var personThreeInfo = new Person("Boris", "Krstic");
  var personFourInfo = new Person("Nemanja", "Petrika");

  //Create Seat//
  var seatInfo = new Seat(1, "B");
  var seatTwoInfo = new Seat(2, "B");
  var seatThreeInfo = new Seat(5, "B");
  var seatFourInfo = new Seat(8, "B");

  //Create Passenger//
  var passengerOne = new Passenger(personInfo, seatInfo);
  var passengerTwo = new Passenger(personTwoInfo, seatTwoInfo);
  var passengerThree = new Passenger(personThreeInfo, seatThreeInfo);
  var passengerFour = new Passenger(personFourInfo, seatFourInfo);
  var passengerFive = new Passenger(
    new Person("John", "Snow"),
    new Seat(5, "Economic")
    );
    var passengerSix = new Passenger(
        new Person("Cersei", "Lannister"),
        new Seat());

  //Create Flight//
  var bgParis = new Flight("Belgrade - Paris", "May 21 2021");
  bgParis.addPassenger(passengerOne);
    bgParis.addPassenger(passengerTwo);
    bgParis.addPassenger(passengerFive);
    bgParis.addPassenger(passengerSix);
  var barcelonaBelgrade = new Flight("Barcelona - Belgrade", "May 31 2021");
  barcelonaBelgrade.addPassenger(passengerThree);
  barcelonaBelgrade.addPassenger(passengerFour);
  

  // Create Airport//
  var aeroplane = new Airport("Nikola Tesla");
  aeroplane.addFlight(bgParis);
  aeroplane.addFlight(barcelonaBelgrade);
  console.log(aeroplane.getData());
})(); //Closing tag of Immediate Function
