"use strict";
(function () {
  /****  Constructor functions  ****/

  function Product(name, price, expirationDate) {
    var randomNumb = function () {
      return Math.floor(10000 + Math.random() * 89999);
    };
    this.name = name;
    this.price = price;
    this.expirationDate = new Date(expirationDate);
    this.id = randomNumb();
    this.getInfo = function () {
      var nameId =
        (
          this.name.slice(0, 1) + this.name.slice(this.name.length - 1)
        ).toUpperCase() + this.id;
      return nameId + ", " + this.name + ", " + this.price;
    };
  }

  function ShoppingBag() {
    this.productsList = [];
    this.date = new Date();
    this.addProduct = function (product) {
      if (product.expirationDate >= new Date()) {
        this.productsList.push(product);
      }
    };
    this.averagePrice = function () {
      var averagePrice = 0;
      for (var i = 0; i < this.productsList.length; i++) {
        averagePrice += this.productsList[i].price;
      }
      return (averagePrice / this.productsList.length).toFixed(3);
    };
    this.getMostExpensive = function () {
      var mostExpensive = this.productsList[0].price;
      var index = 0;
      for (var i = 0; i < this.productsList.length; i++) {
        if (mostExpensive < this.productsList[i].price) {
          mostExpensive = this.productsList[i].price;
          index = i;
        }
      }
      return this.productsList[index].getInfo();
    };
    this.calculateTotalPrice = function () {
      var total = 0;
      for (var i = 0; i < this.productsList.length; i++) {
        total += this.productsList[i].price;
      }
      return total;
    };
  }

  function PaymentCard(balance, status, validUntil) {
    this.balance = balance.toFixed(2);
    this.status = status;
    this.validUntil = new Date(validUntil);
  }

  var checkoutAndBuy = function (bag, card) {
    var bagPrice = bag.calculateTotalPrice();
    var cardBalance = parseFloat(card.balance);

    if (cardBalance > bagPrice) {
      return "Purchase is completed succesfully!";
    } else {
      return (
        (bagPrice - cardBalance).toFixed(2) +
        "$ is missing to complete the purchase!"
      );
    }
  };

  /****  Functions for creating products, shooping bags and payment cards  ****/

  var createProduct = function (name, price, expirationDate) {
    return new Product(name, price, expirationDate);
  };

  var createShoppingBag = function () {
    return new ShoppingBag();
  };

  var createPaymentCard = function (balance, status, validUntil) {
    return new PaymentCard(balance, status, validUntil);
  };

  var firstProduct = createProduct("Bananas", 130.25, "05.26.2020");
  var secondProduct = createProduct("Apples", 110.15, "04.21.2020");
  var thirdProduct = createProduct("Oranges", 150.25, "04.23.2020");

  var firstBag = createShoppingBag();

  var firstCard = createPaymentCard(150, "active", "04/01/20");

  firstBag.addProduct(firstProduct);
  firstBag.addProduct(secondProduct);
  firstBag.addProduct(thirdProduct);

  var checkout = checkoutAndBuy(firstBag, firstCard);

  console.log(checkout);
})();
