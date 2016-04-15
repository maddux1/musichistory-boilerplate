"use strict";

var SongLoader = (function(iifeSongLoader) {
        iifeSongLoader.addDeleteButtons = function() {
            $(".deleteButton").click(function() {
            $(this.parentNode.remove(this));
        });
    },
        iifeSongLoader.loadMore = function(classicHits) {
            let string = "";
            for (let i = 0; i < classicHits.length; i++) {
                string += `<section class="newSong"><input type='button' class='deleteButton' value='X'></div><h3 class ="song">${classicHits[i].song}</h3><h5 class="artist">${classicHits[i].artist}</h5> | <h5 class="album">${classicHits[i].album}</h5></section>`;
            }
            $("#classics").append(string);
            SongLoader.addDeleteButtons();
    }
    return iifeSongLoader;
})(SongLoader || {});