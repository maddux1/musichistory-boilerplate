"use strict";

var SongLoader = (function(iifeSongLoader) {
    iifeSongLoader.addDeleteButtons = function() {
        let del = document.getElementsByClassName("deleteButton");
        for (let i = 0; i < del.length; i++) {
            del[i].addEventListener('click', function(e) {
                e.target.parentNode.parentNode.removeChild(e.target.parentNode);
            });
        }
    },
    iifeSongLoader.loadMore = function(classicHits) {
        let string = "";
        let classics = document.getElementById("classics");
        for (let i = 0; i < classicHits.length; i++) {
            string += `<section class="newSong"><input type='button' class='deleteButton' value='X'></div><h3 class ="song">${classicHits[i].song}</h3><h5 class="artist">${classicHits[i].artist}</h5> | <h5 class="album">${classicHits[i].album}</h5></section>`;
        }
        classics.innerHTML += string;
        SongLoader.addDeleteButtons();
    };
    return iifeSongLoader;
})(SongLoader || {});