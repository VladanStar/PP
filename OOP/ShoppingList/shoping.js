"use strict";
(function () {
  console.log("Hello. Welcome in our shop!!!");

  function Product(name, price, expirationDate) {
    var randomNum = function () {
      var ranNum = Math.floor(10000 + Math.random() * 89999);
      return ranNum;
    };
    this.name = name;
    this.price = parseFloat(price.toFixed(2));
    this.expirationDate = new Date(expirationDate);
    this.productId = randomNum();

    this.getInfo = function () {
      this.firstLetter = this.name.charAt(0).toUpperCase();
      this.lastLetter = this.name.charAt(name.length - 1).toUpperCase();
      return (
        '"' +
        this.name +
        '"' +
        " -> " +
        this.firstLetter +
        this.lastLetter +
        this.productId +
        ", " +
        this.name +
        ", " +
        this.price.toFixed(2)
      );
    };
  }

  function ShoppingBag() {
    this.listOfProducts = [];

    this.addProduct = function (product) {
      var curentDate = new Date();
      if (curentDate <= expirationDate) {
        this.listOfProducts.push(product);
      }
    };

    this.getAveragePrices = function () {
      this.averagePrices = 0;
      for (var i = 0; i < this.listOfProducts.length; i++) {
        averagePrices += this.listOfProducts[i].price;
      }
      return (averagePrices / this.listOfProducts.length).toFixed(3);
    };
    this.getMostExpensive = function () {
      var mostExp = this.listOfProducts[0].price;
      var index = 0;
      for (var i = 0; i < this.listOfProducts.length; i++) {
        if (mostExp < this.listOfProducts[i].price) {
          mostExp = this.listOfProducts[i].price;
          index = i;
        }
      }
      return (
        "Most Expensive is product: " + this.listOfProducts[index].getInfo()
      );
    };
    this.totalPrice = function () {
      var total = 0;
      for (var i = 0; i < this.listOfProducts.length; i++) {
        total += this.listOfProducts[i].price;
      }
      return total;
    };
  }
  /////////////// PAYMENT CARD  ////////////
  function PaymentCard(balance, status, validUntil) {
    this.balance = balance.toFixed(2);
    this.status = status;
    this.validUntil = new Date(validUntil);
  }
  ////////// CHECK OUT AND BUY /////////////
  var checkOutAndBay = function (bag, card) {
    var bagPrice = bag.totalPrice();
    var cardBalance = parseFloat(card.balance);

    if (cardBalance > bagPrice) {
      return "Purhase is completed succesfully";
    } else {
      return (
        (bagPrice - cardBalance).toFixed(2) +
        " is missing to complete the purchase"
      );
    }
  };

  var expirationDate = new Date("03/10/2022");
  var banana = new Product("Banana", 12.09, expirationDate);
  console.log(banana.getInfo());
  var ariel = new Product("Ariel", 54.45874, "03/12/2028");
  console.log(ariel.getInfo());
  var kafaC = new Product("Kafa C", 1.9, "03/10/2024");
  console.log(kafaC.getInfo());

  var firstBag = new ShoppingBag();
  var firstCard = new PaymentCard(600, "active", "04/01/2028");
  firstBag.addProduct(banana);
  firstBag.addProduct(ariel);
  firstBag.addProduct(kafaC);
  console.log(firstBag.getMostExpensive());
  var kartica = new PaymentCard(500, "active", "04/01/2028");

  console.log(checkOutAndBay(firstBag, kartica));
})();
