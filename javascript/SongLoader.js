"use strict";
var SongLoader = (function () {
    let newHits = [];
    let classicHits = [];
    return {
        loadNewStuff: function (newCallback) {
            $.ajax({
                url: "newStuff.json"
            }).done(function(data) {
                newHits = data.newStuffObj;
                newCallback(data.newStuffObj);
            });
        },
        loadClassics: function (classicCallback) {
            $.ajax({
                url: "classics.json"
            }).done(function(data) {
                classicHits = data.classicsObj;
                classicCallback(data.classicsObj);
            });
        },
        getNewHits: function () {
            return newHits;
        },
        getClassicHits: function () {
            return classicHits;
        }
    };
})();