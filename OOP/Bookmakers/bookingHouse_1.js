(function () {

  console.log("Hello Players World!!! The GAME BEGINN!!!!!");
  // Country - name, odds, continent (EU, AS, AF, SA, NA, AU)
  // Create continents as constants (objects that can not change). So, when passing a continent as a parameter, you should pass Continent.ASIA.
  function Country(name, odds, continent) {
    this.name = name;
    this.odds = odds;
    this.continent = continent;
    //Pravimo metodu za Country;
    this.stickerCountry = function () {
      return (this.name[0] + this.name[2]).toUpperCase();
    };
  }
  //Pravimo objecat koji ima samo konstante
  var continents = {
    ASIA: "AS",
      EUROPE: "EU",
      AFRICA: "AF",
      SOUTH_AMERICA: "SA",
      NORT_AMERICA: "NA",
    AUSTRALIA:"AU"
  };

  // Person - name, surname, date of birth
  // Add a method to Person that returns a formatted string containing the name, surname and date of birth of the person (date of birth in dd.mm.yy format).
  function Person(name, surname, date) {
    this.name = name;
    this.surname = surname;
    this.currentDate = new Date().getFullYear();
    this.yearOfBirth = new Date(date);
    this.yearOld = function () {
      return this.currentDate - new Date(date).getFullYear();
    };
    this.getDateofBitrth = function () {
      return (
        new Date(date).getDate() +
        "." +
        new Date(date).getMonth() +
        1 +
        "." +
        new Date(date).getFullYear()
      );
    };
    this.getData = function () {
      return this.name + " " + this.surname + ", " + this.yearOld();
    };
  }

  // Add a method to Address that returns a formatted string like the following one:
  // 	Nemanjina 4, 11000 Beograd, SR

  function Address(street, postalcode, country) {
    this.street = street;
    this.postalcode = postalcode;
    this.fullAddress = function (country) {
      return (
        this.street + ", " + this.postalcode + ", " + country.stickerCountry()
      );
    };
  }

  // Add a method to Player that returns a formatted string containing a country, expected win amount (odds * bet amount) and person data.
  // SR, 1050.00 eur, Pera Peric, 29 years

  function Player(person, betamount, country) {
    this.betamount = betamount;
    this.person = person;
    this.country = country;
    this.getData = function (person, country) {
      return (
        this.country.stickerCountry() +
        ", " +
        this.betamount * this.country.odds +
        ", " +
        this.person.getData()
      );
    };
  }
  // Add a method to BettingPlace that returns a formatted string containing a street (without a number), postal code and city, and sum of all bet amounts of that place.
  // Nemanjina, 11000 Belgrade, sum of all bets: 50000eur
  // Add a method to BettingPlace that adds a player to the players list of a betting place.

  function BettingPlace(address) {
    this.address = address;
    this.listOfPlayers = [];
    this.sumOfAllBets = function () {
      var result = 0;
      this.listOfPlayers.forEach(function (element) {
        result += element.betamount;
      });
      return result;
    };

    this.sumAllBets = function () {
      var result = 0;
      this.listOfPlayers.forEach(function (element) {
        result += element.betamount * element.country.odds;
      });
    };

    this.addPlayer = function (player) {
      this.listOfPlayers.push(player);
    };

    this.getData = function () {
      return (
        this.address.street +
        ", " +
        this.address.postalcode +
        " " +
        " sum of all methods " +
        this.sumOfAllBets()
      );
    };
  }

  // Create an instance of the BettingHouse that receives the name of competition.
  // Create four players with random data. Create two betting places. Add created players as you wish to Betting places. Add betting places to the betting house.

  // Display all betting house data in the following manner:
  // Football World Cup Winner, 2 betting places, 4 bets
  // 	Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
  // 		SR, 1050.00 eur, Pera Peric, 29 years
  // 		SR, 1050.00 eur, Pera Peric, 29 years
  // Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
  // 		GR, 1050.00 eur, Pera Peric, 29 years
  // 		SR, 1050.00 eur, Pera Peric, 29 years
  // There are 3 bets on Serbia

  function BettingHouse(competition) {
    this.competition = competition;
    this.listOfBettingPlaces = [];
    this.sumAllBets = 0;
    this.numberOfPlayers = 0;

    this.addBettingPlace = function (BettingPlace) {
      this.listOfBettingPlaces.push(BettingPlace);
      this.numberOfPlayers = BettingPlace.listOfPlayers.length;
      this.sumAllBets = BettingPlace.sumAllBets();
    };

    this.getData = function () {
      var firstLine =
        this.competition +
        ", " +
        this.listOfBettingPlaces.length +
        " betting places " +
        this.numberOfPlayers + " number of players";

      var secondLine = "";

      for (var i = 0; i < this.listOfBettingPlaces.length; i++) {
        secondLine += "\n\t" + this.listOfBettingPlaces[i].getData();
        var beet = this.listOfBettingPlaces[i];
        beet.listOfPlayers.forEach(function (element) {
          secondLine += "\n\t\t" + element.getData();
        });
      }

      return firstLine + secondLine;
    };
  }

  ///////////////////////////////////////////////////////////////////////////////////////
  //Pravimo instance za drzavu, unosimo ime drzave, kvotu i kontinent sa kojeg je drzava;
  var serbia = new Country("Serbia", 3, continents.EUROPE);
  var china = new Country("China", 3, continents.ASIA);
  // console.log(serbia.stickerCountry());
  // console.log(china.stickerCountry());

  // Add a method to BettingPlace that returns a formatted string containing a street (without a number), postal code and city, and sum of all bet amounts of that place.
  // Nemanjina, 11000 Belgrade, sum of all bets: 50000eur
  // Add a method to BettingPlace that adds a player to the players list of a betting place.

  //Pravimo instancu osobe ime i prezime, starost;
  var vladan = new Person("Vladan", "Cupric", "1973-03-11");
  var nemanja = new Person("Nemanja", "Petrika", "1986-05-13");
  var boban = new Person("Boban", "Stojanovic", "1984-12-5");
  var milorad = new Person("Milorad", "Petrika", "1978-04-13");
  // console.log(vladan.getData())
  // console.log(nemanja.getData());

  //Pravimo instancu dve adrese;
  var address = new Address("Generala Birjukova 2", "11070 Novi Beograd", serbia);
  var address1 = new Address("Bate Zivojinovica Valtera 2341/9", " 102600 Beijing", china);
  address.fullAddress(serbia);
  address1.fullAddress(china);

  // console.log(address.fullAddress(china));

  //Pravimo instancu igraca
  var player1 = new Player(vladan, 1200, serbia);
  var player2 = new Player(boban, 2000, china);
  var player3 = new Player(nemanja, 4000, serbia);
  var player4 = new Player(milorad, 45000, serbia);
  player1.getData(vladan, serbia);
  player2.getData(boban, china);
  player3.getData(nemanja, serbia);
  player4.getData(milorad, serbia);

  var betPlace = new BettingPlace(address);
  var betPlace1 = new BettingPlace(address1);
  betPlace.addPlayer(player1);
  betPlace.addPlayer(player2);
  betPlace1.addPlayer(player3);
  betPlace1.addPlayer(player4);
  // console.log(betPlace.getData());

  var betHouse = new BettingHouse("Mozzart Kladionica");
  betHouse.addBettingPlace(betPlace);
  betHouse.addBettingPlace(betPlace1);
  console.log(betHouse.getData());

  console.log("SECOND WAY WITH CREATE FUNCTION!!!!");
  function createPlayer(person, betamount, country) {
    
    return new Player(person, betamount, country);
  }

  function createBettingPlace(address) {
    return new BettingPlace(address);
  }
  var vicentije = new Player(new Person("Vicentije","Vicentijevic","1973-12-12"),23490,china);
  var zoom = new createBettingPlace(new Address("Gornja Polovina","levo od nigde", serbia));
  zoom.addPlayer(vicentije);
  betHouse.addBettingPlace(zoom);
  console.log(betHouse.getData());


})();
