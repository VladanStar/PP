'use strict';

class WebApp {
    constructor(name, url, technologies, licence, stars) {
        this.name = name;
        this.url = url;
        this.technologies = technologies;
        this.licence = licence;
        this.stars = stars;
    }
    getData() {
        return "Name: " + this.name + "\n URL" + this.url + " \n Technology: " + this.technologies + "\n licence" + this.licence + " \n stars" + this.stars;
    }
    reactBased() {
        if (this.technologies === "React") {
            return true;
        }
        else {
            return false;
        }
    }
};
class MobileApp{
    
    constructor(name, platforms, licence, stars) {
        
        this.name = name;
        this.platforms = platforms;
        this.licence = licence;
        this.stars = stars;
    }
    getData() {
          return (
            "Name: " +
            this.name +
            "\nPlatform: " +
            this.platforms +
            "\nLicence: " +
            this.licence +
            "\nStars: " +
            this.stars
          );
    }
    forAndroid() {
        if (this.platforms === "Android") {
            return true;
        }
    }

}
O
var firstWebApp = new WebApp(
  "GoogleMaps",
  "www.googlemaps.com",
  "React",
  "CC",
  3
);
var firstMobileApp = new MobileApp("BitApp", "Android", "CC", 5);
console.log(firstMobileApp.platforms);
//console.log(firstMobileApp.isCCLicence());
//console.log(firstMobileApp.showStars());