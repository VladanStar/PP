function Automobil(name, model, weight, color, passenger) {
  this.name = name;
  this.model = model;
  this.weight = weight;
  this.color = color;
  this.passenger = passenger || 1;
  this.start = function () {
    return "Car is turn on.";
  };
  this.drive = function () {
    return "Car is  drive.";
  };
  this.stop = function () {
    return "Car  is stoped.";
  };
  this.turnOf = function () {
    return "Car is turn of.";
  };
  this.weightCar = function () {
    return this.weight;
  };
  this.printPassenger = function () {
    return " Number of passenger in car is: " + this.passenger;
  };
  this.addPassenger = function (pass) {
    console.log("Gets in the car " + pass);
    this.passenger += pass;
  };
}
var alfaRomeo = new Automobil("Alfa Romeo", "159", 1600, "grey metalic");
console.log(typeof alfaRomeo);
console.log(alfaRomeo);
console.log(alfaRomeo.weightCar());
console.log(alfaRomeo.start());
console.log(alfaRomeo.drive());
console.log(alfaRomeo.stop());
alfaRomeo.addPassenger(4);
console.log(alfaRomeo.printPassenger());
console.log(alfaRomeo.stop());
console.log(alfaRomeo.turnOf());
