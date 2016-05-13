"use strict";
var SongLoader = (function(originalSongLoader) {
    originalSongLoader.addMusic = function () {
        let string = "";
        string += "<div id='addMusicForm' class='col-md-4 col-md-offset-4'><p>Song name" +
        "</p><input type='text' id='songInput' class='addField'>" +
        "<p>Artist </p><input type='text' id='artistInput' class='addField'>" +
        "<p>Album </p><input type='text' id='albumInput' class='addField'>" + 
        "<button id='addButton' class='btn btn-default button'>Add</button></div>";
        $("#addMusicView").append(string);
    };
    originalSongLoader.newMusicButton = function () {
        let songInput = $("#songInput");
        let artistInput = $("#artistInput");
        let albumInput = $("#albumInput");
        $("#addButton").click(function() {
            let string = ""; 
                string += `<section class="newSong"><button type='button'`; 
                string += `class='btn btn-primary btn-xs deleteButton glyphicon glyphicon-trash'></button><h3 class ="song">`;
                string += songInput.val();
                string += "</h3><h5 class='artist'>";
                string += artistInput.val();
                string += "</h5> | <h5 class='album'>";
                string += albumInput.val();
                string += "</h5></section>";
            $("#classics").append(string);
            SongLoader.addDeleteButtons();
            $("#listMusicView").show();
            $("#addMusicView").hide();
        });
    };
    originalSongLoader.addMusicFunctionality = function () {
        $("#addMusicView").hide();
        $("#addMusicLink").click(function () {
            $("#listMusicView").hide();
            $("#addMusicView").show();
        });
        $("#listMusicLink").click(function () {
            $("#listMusicView").show();
            $("#addMusicView").hide();
        });
    };
    return originalSongLoader;
})(SongLoader || {});