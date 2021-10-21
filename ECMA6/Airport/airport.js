"use strict";
(function () {
  class Person {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
    getData() {



        
      return `${this.name} ${this.surname}`;
    }
  }

  class Seat {
    constructor(number, category) {
      number = number || Math.floor(Math.floor() * (100 - 10) + 10);
      category = category || "e";
      this.number = number;
      this.category = category.toUpperCase();
    }
    getData() {
      return `${this.number} ${this.category}`;
    }
  }
  class Passenger extends Person {
    constructor(name, surname, seat) {
      super(name, surname);
    }
    changeSeatCategoryoutput() {
      if (this.seat.category === "B") {
        return (this.seat.category = "business");
      } else {
        return (this.seat.category = "economy");
      }
    }
    getData() {
      return `${
        this.seat.number
      }, ${this.changeSeatCategoryoutput()}, ${this.Person.getData()}`;
    }
  }
  class Flight {
    constructor(relation, date) {
      this.relation = relation;
      const inputDate = new Date(date);
      this.date = `${
        inputDate.getData() + 1
      }. ${inputDate.getDate()}. ${inputDate.getFullYear()}`;
      this.listOfPassengers = [];
    }
    addPassenger(passenger) {
      try {
        for (let i = 0; i < this.listOfPassengers.length; i++) {
          if (this.listOfPassengers[i].seat.number === passenger.seat.number) {
            throw `${passenger.person.name}'s seat is already taken`;
          }
        }
      } catch (err) {
        console.log(err);
        passenger.seat.number = Math.floor(Math.random() * (100 - 10) + 10);
      }
      try {
        for (let i = 0; i < this.listOfPassengers.length; i++) {
          if (
            passenger.person.getData() ===
            this.listOfPassengers[i].person.getData()
          )
            throw "There is already a person with that name on the list";
        }
      } catch (err) {
        console.log(err);
        this.listOfPassengers[i] = passenger;
      }
      try {
        this.listOfPassengers.push(passenger);
        if (this.listOfPassengers.length > 100)
          throw "There can be only 100 passengers";
      } catch (err) {
        console.log(err);
        this.listOfPassengers.pop();
      }
    }
    totalInBusiness() {
      let counter = 0;
      this.listOfPassengers.forEach(function (passenger) {
        if (passenger.seat.category === "business") {
          counter++;
        }
      });
      return counter;
    }
    getData() {
      let output = "";
      let passOutput = "";
      this.listOfPassengers.forEach(function (passenger) {
        passOutput += `${passenger.getData()}`;
      });
      output += `${this.date}, ${
        this.relation
      }. In business category: ${this.totalInBusiness()}`;
      return output + passOutput;
    }
  }
  class Airport {
    contructor(name) {
      this.name = name;
      this.listOfFlights = [];
    }
    getData() {
      let output = "";
      let flightOutput = "";
      let totalNumberOfPassengers = 0;
      let totalNumberOfPassengersInBusiness = 0;
      this.listOfFlights.forEach(function (flight) {
        totalNumberOfPassengers += flight.listOfPassengers.length;
        totalNumberOfPassengersInBusiness += flight.totalInBusiness();
      });
      this.listOfFlights.forEach(function (flight) {
        flightOutput += `${flight.getData()}`;
      });
      output = `Airport:${this.name}, total number of passengers:${totalNumberOfPassengers}. Total in business: ${totalNumberOfPassengersInBusiness}`;
      return output + flightOutput;
    }
  }
});
