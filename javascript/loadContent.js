"use strict";
var SongLoader = (function (originalSongLoader) {

    SongLoader.loadNewStuff(buildNewMusicList);
    function buildNewMusicList(newHits) {
    console.log(newHits);
    let string = "";
    for (let i = 0; i < newHits.length; i++) {
        string += `<section class="newSong"><button type='button'`; 
        string += `class='btn btn-primary btn-xs deleteButton glyphicon glyphicon-trash'>`;
        string += `</button><h3 class ="song">`;
        string += `${newHits[i].song}</h3><h5 class="artist">`;
        string += `${newHits[i].artist}</h5> | <h5 class="album">`;
        string += `${newHits[i].album}</h5></section>`;
    }
    $("#newStuff").append(string);
    SongLoader.addMusic();
    SongLoader.addDeleteButtons();
    SongLoader.addMusicFunctionality();
    SongLoader.newMusicButton();
    let bacon = SongLoader.getNewHits();
    console.log(bacon[0]);
    }

    SongLoader.loadClassics(buildDomClassic);
    function buildDomClassic(classicHits) {  
        $("#moreButton").click(function() {
            SongLoader.loadMore(classicHits);
        });
    }


    return originalSongLoader;
})(SongLoader || {});