"use strict"
function buildNewMusicList(newHits) {
    let string = "";
    for (let i = 0; i < newHits.length; i++) {
        string += `<section class="newSong"><input type='button'`; 
        string += `class='deleteButton' value='X'></div><h3 class ="song">`;
        string += `${newHits[i].song}</h3><h5 class="artist">`;
        string += `${newHits[i].artist}</h5> | <h5 class="album">`;
        string += `${newHits[i].album}</h5></section>`;
    };
    document.getElementById("newStuff").innerHTML = string;
    addDeleteButtons();
};

function addDeleteButtons() {
    let del = document.getElementsByClassName("deleteButton");
    for (let i = 0; i < del.length; i++) {
        del[i].addEventListener('click', function(e) {
            e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        });
    };
};

function buildDomClassic(classicHits) {  
    let more = document.getElementById("moreButton");
    more.addEventListener("click", function() {
    loadMore(classicHits);
    });
}

function loadMore(classicHits) {
    let string = "";
    let classics = document.getElementById("classics");
    for (let i = 0; i < classicHits.length; i++) {
        string += `<section class="newSong"><input type='button' class='deleteButton' value='X'></div><h3 class ="song">${classicHits[i].song}</h3><h5 class="artist">${classicHits[i].artist}</h5> | <h5 class="album">${classicHits[i].album}</h5></section>`;
    };
    classics.innerHTML += string;
    addDeleteButtons();
};

SongLoader.loadNewStuff(buildNewMusicList);
SongLoader.loadClassics(buildDomClassic);