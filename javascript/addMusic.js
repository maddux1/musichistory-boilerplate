"use strict";
var SongLoader = (function(originalSongLoader) {
    originalSongLoader.addMusicIIFE = function () {
        let string = "";
        string += "<p>Song name </p><input type='text' id='songInput' class='addField'>" +
        "<p>Artist </p><input type='text' id='artistInput' class='addField'>" +
        "<p>Album </p><input type='text' id='albumInput' class='addField'>" + 
        "<button id='addButton'><span class='buttonText'>Add</span></button>";
        $("#addMusicView").append(string); 
    },
    originalSongLoader.newMusicButton = function () {
        let songInput = $("#songInput");
        let artistInput = $("#artistInput");
        let albumInput = $("#albumInput");
        $("#addButton").click(function() {
            let string = ""; 
                string += `<section class="newSong"><input type='button'`; 
                string += `class='deleteButton' value='X'></div><h3 class ="song">`;
                string += songInput.val();
                string += "</h3><h5 class='artist'>";
                string += artistInput.val();
                string += "</h5> | <h5 class='album'>";
                string += albumInput.val();
                string += "</h5></section>";
            $("#classics").append(string);
            SongLoader.addDeleteButtons();
            $("#listMusicView").removeClass("hidden");
            $("#addMusicView").addClass("hidden");
        });
    },
    originalSongLoader.addMusicFunctionality = function () {
        $("#addMusicView").addClass("hidden");
        $("#addMusicLink").click(function () {
            $("#listMusicView").addClass("hidden");
            $("#addMusicView").removeClass("hidden");
        });
        $("#listMusicLink").click(function () {
            $("#listMusicView").removeClass("hidden");
            $("#addMusicView").addClass("hidden");
        });
    }
    return originalSongLoader;
})(SongLoader || {});