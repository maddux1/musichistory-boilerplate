"use strict"
let SongLoader = (function () {
    let newHits = [];
    let classicHits = [];

    return {
        loadNewStuff: function (newCallback) {
            let loader = new XMLHttpRequest();
            loader.open("GET", "newStuff.json"); //this was trying to GET songiife.js
            loader.send();
            loader.addEventListener("load", function () {
                newHits = JSON.parse(this.responseText).newStuffObj;
                newCallback(newHits); // here you had passed in newCallback
            });
        }
    }
})();

document.getElementById("addMusicView").classList.add("hidden");

document.getElementById("addMusicLink").addEventListener("click", function () {
    document.getElementById("listMusicView").classList.add("hidden");
    document.getElementById("addMusicView").classList.remove("hidden");
})

document.getElementById("listMusicLink").addEventListener("click", function () {
    document.getElementById("listMusicView").classList.remove("hidden");
    document.getElementById("addMusicView").classList.add("hidden");
})



