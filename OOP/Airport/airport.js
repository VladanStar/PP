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
    this.date = new Date(date);
    this.listOfPassengers = [];

    this.getNumberOfPassengers = function () {
      return this.listOfPassengers.length;
    };

    this.addPassenger = function (passenger) {
      for (var i = 0; i < this.listOfPassengers.length; i++) {
        if (this.listOfPassengers[i].seat.number === passenger.seat.number) {
          return console.log(
            "Error. This seat is taken. Please change seat number, passenger " +
              this.listOfPassengers[i].person.getData() +
              " can not be added."
          );
        }
      }
      this.listOfPassengers.push(passenger);

      function checkPassengers(a) {
        if (a > 100) {
          throw Error("Warning!!! Aeroplane is full!!!");
        }
      }

      try {
        checkPassengers(this.getNumberOfPassengers());
      } catch (err) {
        console.log("Warning!!! Aeroplane is full!!!");
      }
    };
    this.removePassenger = function (delName) {
      for (var i = this.listOfPassengers.length - 1; i >= 0; --i) {
        if (
          this.listOfPassengers[i].name == delName.name &&
          this.listOfPassengers[i].surname == delName.surname
        ) {
          this.listOfPassengers.splice(i, 1);
        }
      }
    };
    this.relationShort = function(relation){
      var words = this.relation.split(" ");
      var separated1 = words[0];
      var separated2 = words[2];
      var pocetak = separated1.charAt(0) + separated1.charAt(separated1.length-1).toUpperCase();
      var kraj = separated2.charAt(0) + separated2.charAt(separated2.length-1).toUpperCase();
      return pocetak + " - " + kraj;

    }

    this.getData = function () {
      var flightString = "";
      var customDate = this.date.getDate() + '.' + (this.date.getMonth() + 1) + '.' + this.date.getFullYear();

      for (var i = 0; i < this.listOfPassengers.length; i++) {
        flightString += "\n" + this.listOfPassengers[i].getData();
      }
      return this.date + ",\n \t" + this.relation.toString() + "  -> \n" + customDate + "\n"+ this.relationShort() + "\n" + flightString + "\n";
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
  
  var personTwoInfo = new Person("Stevan", "Stasic");
  var personInfo = new Person("Vladan", "Cupric");
  var personThreeInfo = new Person("Boris", "Krstic");
  var personFourInfo = new Person("Nemanja", "Petrika");
  var personSevenInfo = new Person("Boris", "Popovic");

  //Create Seat//
  
  var seatInfo = new Seat(1, "B");
  var seatTwoInfo = new Seat(2, "B");
  var seatThreeInfo = new Seat(1, "B");
  var seatFourInfo = new Seat(8, "B");
  

  //Create Passenger//
  var passengerOne = new Passenger(personInfo, seatInfo);
  var passengerTwo = new Passenger(personTwoInfo, seatTwoInfo);
  var passengerThree = new Passenger(personThreeInfo, seatThreeInfo);
  var passengerFour = new Passenger(personFourInfo, seatFourInfo);
  var passengerFive = new Passenger(
    new Person("John", "Snow"),
    new Seat(6, "Economic")
  );
  var passengerSix = new Passenger(
    new Person("Cersei", "Lannister"),
    new Seat()
  );
  

  //Create Flight//
  var bgParis = new Flight("Belgrade - Paris", "May 21 2021");
  bgParis.addPassenger(passengerOne);
  bgParis.addPassenger(passengerTwo);

  var barcelonaBelgrade = new Flight("Barcelona - Belgrade", "May 31 2021");
  barcelonaBelgrade.addPassenger(passengerThree);
  barcelonaBelgrade.addPassenger(passengerFour);

  var bgLondon = new Flight("Belgrade - London", "October 15 2021");
  bgLondon.addPassenger(passengerFive);


  //bgLondon.removePassenger("John Snow");
  bgLondon.addPassenger(
    new Passenger(new Person("Cersei", "Lannister"), new Seat())
  );

  // Create Airport//
  var aeroplane = new Airport("Nikola Tesla");
  aeroplane.addFlight(bgParis);
  aeroplane.addFlight(barcelonaBelgrade);
  aeroplane.addFlight(bgLondon);
  console.log(aeroplane.getData());
})();
