"use strict";

(function () {
  /* constructor function for products */
  function Product(name, productPrice, expDate) {
    this.productId = Math.floor(Math.random() * 90000);
    this.name = name;
    this.price = parseFloat(productPrice.toFixed(2));
    this.experationDate = expDate;
    this.getInfo = function () {
      this.firstLetter = this.name[0].toUpperCase();
      this.lastLetter = this.name[name.length - 1].toUpperCase();
      this.productCode = this.firstLetter + this.lastLetter + this.productId;
      return this.productCode + ", " + this.name + ", " + this.price;
    };
  }
  /* CONSTRUCTOR PRODUCT END */
  /* constructor function for shopping bag */
  function ShoppingBag() {
    this.list = [];
    this.date = new Date();
    this.currentYear = this.date.getFullYear();
    this.addProduct = function (object) {
      if (object.experationDate >= this.currentYear) {
        this.list.push(object);
      }
    };
    /*!!!*/ this.getAveragePrice = function () {
      this.averagePrice = 0;
      /* !!!! da bi radilo this unutar drugog objekta, a da se odnosi na konstruktor, 
      moramo da stavimo dodatno callback-funkciju => */
      this.list.forEach((element, index) => {
        this.averagePrice += this.list[index].price;
      });
      this.averagePrice = this.averagePrice / this.list.length;
      return parseFloat(this.averagePrice.toFixed(3));
    };
    this.getMostExpensive = function () {
      this.mostExpensive = 0;
      this.mostExpensiveProduct;
      this.list.forEach((element, index) => {
        if (this.list[index].price > this.mostExpensive) {
          this.mostExpensive = this.list[index].price;
          this.mostExpensiveProduct = this.list[index].name;
        }
      });
      return this.mostExpensiveProduct + " " + this.mostExpensive;
    };
    this.getTotalPrice = function () {
      this.totalPrice = 0;
      this.list.forEach((element, index) => {
        this.totalPrice += this.list[index].price;
      });
      return this.totalPrice;
    };
  }
  /* CONSTRUCTOR SHOPPBAG END */
  /* constructor function for shopping bag */

  function PaymantCard(accBal, status, date) {
    this.accountBalance = parseFloat(accBal.toFixed(2));
    this.status = (function () {
      status ? "Card is active!" : "Card is not active";
    })();
    this.valid = "Valid until " + date;
  }

  /* CONSTRUCTOR SHOPPBAG END */

  function checkOutBuy(shoppB, card) {
    if (shoppB.getTotalPrice() < card.accountBalance) {
      console.log("Product list");
      console.log("________________________");
      shoppB.list.forEach(function (element, index) {
        console.log(shoppB.list[index].getInfo());
      });
      console.log("Total price is: " + shoppB.getTotalPrice());
      console.log(
        "The most expensive product is: " + shoppB.getMostExpensive()
      );
      console.log("________________________");
      console.log("Purchase is successful!");
    } else {
      console.log("Total price is: " + shoppB.getTotalPrice());
      console.log("Total amount of money on card: " + card.accountBalance);
      console.log("Not enough money on card!");
    }
  }

  var product1 = new Product("Banana", 135.99, 2022);
  var product2 = new Product("Burek", 200.24, 2021);
  var product3 = new Product("Pasulj", 131.321, 2025);
  var shoppingBag = new ShoppingBag();
  var costumerCard = new PaymantCard(1023.456, true, 2028);
  shoppingBag.addProduct(product1);
  shoppingBag.addProduct(product2);
  shoppingBag.addProduct(product3);

  checkOutBuy(shoppingBag, costumerCard);
})();
