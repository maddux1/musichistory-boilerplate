"use strict"
function buildDomNew (arg) {
    let del = document.getElementsByClassName("deleteButton");
    let addYes = document.getElementById("rightColumn");
    let string = "";
    for (let i = 0; i < arg.length; i++) {
    string += `<section><h3 class ="song">${arg[i].song}</h3><h5 class="artist">${arg[i].artist}</h5> | <h5 class="album">${arg[i].album}</h5><input type='button' class='deleteButton' value='X'></div></section>`;
    }
    addYes.innerHTML = string;
    for (let i = 0; i <arg.length; i++) {
        del[i].addEventListener('click', deleteCard);
    }
};

function deleteCard () {
    this.parentNode.parentNode.removeChild(this.parentNode);
    console.log(this.parentNode.parentNode);
};

SongLoader.loadNewStuff(buildDomNew);