"use strict";

// <-- - - - - - TAKES DATA OBJ FROM FIREBASE AND POSTS TO DOM - - - - - - --> 
loadMusicList(newMusicToDOM);
function newMusicToDOM(songData) {
    let string = "";
    for (let song in songData) {
    let currentSong = songData[song];
        string += `<section id="${song}" class="newSong"><button type='button'`; 
        string += `class='btn btn-primary btn-sm deleteButton glyphicon glyphicon-trash'></button>`;
        string += `<button type= 'button' class='btn btn-primary btn-sm editButton glyphicon glyphicon-pencil'></button>`;
        string += `<h3 class ="song">${currentSong.song}</h3><h5 class="artist">`;
        string += `${currentSong.artist}</h5> | <h5 class="album">`;
        string += `${currentSong.album}</h5></section>`;
    }
    $("#musicList").html(string);
}