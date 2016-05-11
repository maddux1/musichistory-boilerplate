"use strict";
function buildNewMusicList(newHits) {
    let string = "";
    for (let i = 0; i < newHits.length; i++) {
        string += `<section class="newSong"><input type='button'`; 
        string += `class='deleteButton' value='X'></div><h3 class ="song">`;
        string += `${newHits[i].song}</h3><h5 class="artist">`;
        string += `${newHits[i].artist}</h5> | <h5 class="album">`;
        string += `${newHits[i].album}</h5></section>`;
    }
    $("#newStuff").append(string);
    SongLoader.addDeleteButtons();
    SongLoader.addMusicFunctionality();
    SongLoader.newMusicButton();
}

function buildDomClassic(classicHits) {  
    $("#moreButton").click(function() {
        SongLoader.loadMore(classicHits);
    });
}
SongLoader.loadNewStuff(buildNewMusicList);
SongLoader.loadClassics(buildDomClassic);