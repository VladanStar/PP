"use strict";

function WebApp(name, url, technologies, licence, stars){
    this.name=name;
    this.url=url;
    this.technologies=technologies;
    this.licence=licence;
    this.stars=stars;
}

function MobileApp(name, platforms, licence, stars){
    this.name=name;
    this.platforms=platforms;
    this.licence=licence;
    this.stars=stars;
}

WebApp.prototype.getData=function(){
    return "Name: "+this.name+"\nUrl: "+this.url+"\nTechnology: "+this.technologies+"\nLicence: "+this.licence+"\nStars: "+this.stars;
}
WebApp.prototype.reactBased=function(){
    if(this.technologies==="React"){
        return true
    }
    return false;
}

MobileApp.prototype.getData=function(){
    return "Name: "+this.name+"\nPlatform: "+this.platforms+"\nLicence: "+this.licence+"\nStars: "+this.stars;
}
MobileApp.prototype.forAndroid=function(){
    if(this.platforms==="Android"){
        return true;
    }
    return false;
}

Object.prototype.isCCLicence=function(){
    if(this.licence==="CC"){
        this.stars++;
        return true;
    }
    return false;
}
Object.prototype.showStars=function(){
    return this.stars;
}

var firstWebApp = new WebApp("GoogleMaps", "www.googlemaps.com","React","CC",3);
var firstMobileApp = new MobileApp("BitApp", "Android", "CC", 5);

console.log(firstMobileApp.isCCLicence());
console.log(firstMobileApp.showStars());