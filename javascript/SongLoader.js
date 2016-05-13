
"use strict";
var SongLoader = (function () {
    let newHits = [];
    let classicHits = [];
    return {
        loadNewStuff: function (newCallback) {
            $.ajax({
                url: "newStuff.json"
            }).done(function(data) {
                newHits.push(data.newStuffObj);
                newCallback(data.newStuffObj);
                console.log(newHits);
            });
        },
        loadClassics: function (classicCallback) {
            $.ajax({
                url: "classics.json"
            }).done(function(data) {
                classicHits.push(data.classicsObj);
                classicCallback(data.classicsObj);
                console.log(classicHits);
            });
        },
        getNewHits: function () {
            return newHits;
        },
        getClassicHits: function () {
            return classicHits;
        } 
    };
})(SongLoader || {});