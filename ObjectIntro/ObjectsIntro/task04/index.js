function Automobil(name, model, weight, color, passenger) {
  this.name = name;
  this.model = model;
  this.weight = weight;
  this.color = color;
  this.passenger = passenger || 1;
  this.start = function () {
    console.log("Automobil je uključen");
  };
  this.drive = function () {
    console.log("Automobil je u pokretu");
  };
  this.stop = function () {
    console.log("Automobil je stao");
  };
  this.turnOf = function () {
    console.log("Automobil je ugašen");
  };
  this.weightCar = function () {
    return this.weight;
  };
  this.printPassenger = function () {
    return(" Number of passenger in car is: " + this.passenger);
  };
    this.addPassenger = function (pass) {
        console.log("Gets in the car " + pass);
    console.log(this.passenger += pass);
  };
}
var alfaRomeo = new Automobil("Alfa Romeo", "159", 1600, "grey metalic");
console.log(typeof alfaRomeo);
console.log(alfaRomeo.weightCar());
console.log(alfaRomeo.start());
console.log(alfaRomeo.drive());
console.log(alfaRomeo.stop());
alfaRomeo.addPassenger(4);
console.log(alfaRomeo.printPassenger());
console.log(alfaRomeo.turnOf());
console.log(alfaRomeo);
