"use strict";
var SongLoader = (function(originalSongLoader) {
    originalSongLoader.addMusicIIFE = function () {
        document.getElementById("addMusicView").innerHTML =  
        "<p>Song name </p><input type='text' id='songInput' class='addField'>" +
        "<p>Artist </p><input type='text' id='artistInput' class='addField'>" +
        "<p>Album </p><input type='text' id='albumInput' class='addField'>" + 
        "<button id='addButton'><span class='buttonText'>Add</span></button>";
    },
    originalSongLoader.newMusicButton = function () {
        document.getElementById("addButton").addEventListener("click", function() {
            let classics = document.getElementById("classics");
            let songInput = document.getElementById("songInput");
            let artistInput = document.getElementById("artistInput");
            let albumInput = document.getElementById("albumInput");
            let string = ""; 
                string += `<section class="newSong"><input type='button'`; 
                string += `class='deleteButton' value='X'></div><h3 class ="song">`;
                string += songInput.value;
                string += "</h3><h5 class='artist'>";
                string += artistInput.value;
                string += "</h5> | <h5 class='album'>";
                string += albumInput.value;
                string += "</h5></section>";
            classics.innerHTML += string;
            SongLoader.addDeleteButtons();
            document.getElementById("listMusicView").classList.remove("hidden");
            document.getElementById("addMusicView").classList.add("hidden");
        });
    },
    originalSongLoader.addMusicFunctionality = function () {
        document.getElementById("addMusicView").classList.add("hidden");
        document.getElementById("addMusicLink").addEventListener("click", function () {
            document.getElementById("listMusicView").classList.add("hidden");
            document.getElementById("addMusicView").classList.remove("hidden");
        });
        document.getElementById("listMusicLink").addEventListener("click", function () {
            document.getElementById("listMusicView").classList.remove("hidden");
            document.getElementById("addMusicView").classList.add("hidden");
        });
    }
    return originalSongLoader;
})(SongLoader || {});


