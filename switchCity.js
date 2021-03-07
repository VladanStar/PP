/*
Write a program that takes as input a city name and outputs the country where the city is.
You may choose which cities and countries you want to output yourself, however there has
to be at least 5 countries and 15 cities. Note that each country must have a different
number of cities. Input different from the listed cities should output a message&quot;Please
choose a different city&quot;.
*/
var city = "Berlin";
var result = "";
switch (city) {
    case "Minhen":
    case "Berlin":
    case "Dortmund":
    case "Keln":
        result = "Nemacka";
        break;
    case "Pariz":
    case "Lion":
    case "Lil":
    case "Bordo":
        result = "Francuska";
        break;
    case "Mancester":
    case "Liverpul":
    case "London":
    case "Birmingem":
    case "Lids":
        result = "Engleska";
        break;
    case "Torino":
    case "Rim":
    case "Napulj":
    case "Bari":
    case "Atalanta":
    case "Djenova":
    case "Verona":
    case "Venecija":
        result = "Italija";
        break;
    default:
        result = "Please choose a different city";
        break;
}
console.log(result);