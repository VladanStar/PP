/////////////
"use strict";
/////////////

(function () {
  ////////// Create Country Short Name //////////
  var continentObject = Object.freeze({
    EUROPE: "EU",
    ASIA: "AS",
    AFRICA: "AF",
    SOUTHAMERICA: "SA",
    NORTHAMERICA: "NA",
    AUSTRALIA: "AU",
  });

  /////////////////////////////////// COUNTRY //////////////////////////////////////
  function Country(name, odds, continent) {
    this.name = name;
    this.odds = odds;
    this.continent = continent;
  }

  var serbia = new Country("SR", 10, continentObject.EUROPE);
  var usa = new Country("US", 20, continentObject.NORTHAMERICA);

  //console.log(serbia);

  /////////////////////////////////// PERSON //////////////////////////////////////
  function Person(name, surname, dateOfBirth) {
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = new Date(dateOfBirth);
  }

  var vladan = new Person("Vladan", "Cupric", "03.11.1973");
  var stevan = new Person("Stevan", "Stasic", "04.14.2000");

  //Create Name + Surname:
  Person.prototype.getFullName = function () {
    return this.name + " "+this.surname;
  };

  //Create Full name + Date of birth:
  Person.prototype.getPersonData = function () {
    return this.getFullName()+ " " + this.dateOfBirth.toLocaleDateString();
  };

  //Create years of person:
  Person.prototype.getPersonAge = function () {
    return Math.floor(
      (new Date() - this.dateOfBirth) / 1000 / 60 / 60 / 24 / 365
    );
  };

  //console.log(stefan.getPersonAge());

  /////////////////////////////////// PLAYER //////////////////////////////////////
  function Player(person, betAmount, country) {
    this.person = person;
    this.betAmount = betAmount;
    this.country = country;
  }

  var playerOne = new Player(vladan, 100, serbia);
  var playerTwo = new Player(stevan, 200, usa);

  //Create player:
  Player.prototype.getPlayerData = function () {
    return 
      serbia.name
     + " "+  playerOne.getAmount() + " "+eur +" " +vladan.getFullName() + " "+ vladan.getPersonAge() + " " + years;
  };

  //Create odds*bet amount:
  Player.prototype.getAmount = function () {
    return serbia.odds * playerOne.betAmount;
  };

  // console.log(playerOne.getPlayerData());

  /////////////////////////////////// ADDRESS //////////////////////////////////////
  function Address(country, city, postalCode, street, streetNumber) {
    this.country = country;
    this.city = city;
    this.postalCode = postalCode;
    this.street = street;
    this.streetNumber = streetNumber;
  }

  const personAddress = new Address(
    serbia.name,
    "Kragujevac",
    34000,
    "Kopaonicka",
    48
  );
  var personTwoAddress = new Address(
    usa.name,
    "Novi Sad",
    12000,
    "Fruskogorska",
    7
  );

  //Create address:
  Address.prototype.getAddressData = function () {
    return this.street + " "+this.streetNumber + " "+  this.postalCode  + " "+ this.city  + " "+ this.country;
  };

  //console.log(personAddress.getAddressData());

  /////////////////////////////////// BETTING PLACE //////////////////////////////////////
  function BettingPlace(address) {
    this.address = address;
    this.listOfPlayers = [];
    this.numberOfPlayers = 0;
    this.betSum = 0;
  }

  var BettingPlaceKG = new BettingPlace(personAddress.street);
  var BettingPlaceNS = new BettingPlace(personTwoAddress.street);

  //Create List of players:
  BettingPlace.prototype.addPlayers = function (player) {
    this.listOfPlayers.push(player);
    this.numberOfPlayers++;
    this.betSum += player.betAmount;
  };

  BettingPlace.prototype.getData = function () {
    var playerDataString = "";
    for (let i = 0; i < this.listOfPlayers.length; i++) {
      playerDataString += this.listOfPlayers[i].getData() + "\n";
    }
    return playerDataString;
  };

  //To .push():
  BettingPlaceKG.addPlayers(playerOne);
  BettingPlaceNS.addPlayers(playerTwo);

  //Create Betting Place:
  BettingPlace.prototype.getBettingPlaceData = function () {
    return this.address + " "+personAddress.postalCode +" " +personAddress.city;
  };

  console.log(BettingPlaceNS.numberOfPlayers);
})();
