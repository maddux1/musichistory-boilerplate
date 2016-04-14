"use strict"
let SongLoader = (function () {
    let newHits = [];
    let classicHits = [];

    return {
        loadNewStuff: function (newCallback) {
            let loader = new XMLHttpRequest();
            loader.open("GET", "newStuff.json"); 
            loader.send();
            loader.addEventListener("load", function () {
                newHits = JSON.parse(this.responseText).newStuffObj;
                newCallback(newHits); 
            });
        },
        loadClassics: function (classicCallback) {
            let loader = new XMLHttpRequest();
            loader.open("GET", "classics.json"); 
            loader.send();
            loader.addEventListener("load", function () {
                classicHits = JSON.parse(this.responseText).classicsObj;
                classicCallback(classicHits); 
            })
        }
    }
})();