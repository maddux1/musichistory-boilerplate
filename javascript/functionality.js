"use strict";

var SongLoader = (function(originalSongLoader) {
        originalSongLoader.addDeleteButtons = function() {
            $(".deleteButton").click(function() {
                $(this.parentNode.remove(this));
            });
        };
        originalSongLoader.loadMore = function(classicHits) {
            let string = "";
            for (let i = 0; i < classicHits.length; i++) {
                string += `<section class="newSong"><button type='button' class='btn btn-primary btn-xs deleteButton glyphicon glyphicon-trash'></button></div><h3 class ="song">${classicHits[i].song}</h3><h5 class="artist">${classicHits[i].artist}</h5> | <h5 class="album">${classicHits[i].album}</h5></section>`;
            }
            $("#classics").append(string);
            SongLoader.addDeleteButtons();
        };

    return originalSongLoader;
})(SongLoader || {});