"use strict"
function buildDomNew (arg1) {
    let del = document.getElementsByClassName("deleteButton");
    let addYes = document.getElementById("newStuff");
    let string = "";
    for (let i = 0; i < arg1.length; i++) {
        string += `<section class="newSong"><input type='button' class='deleteButton' value='X'></div><h3 class ="song">${arg1[i].song}</h3><h5 class="artist">${arg1[i].artist}</h5> | <h5 class="album">${arg1[i].album}</h5></section>`;
    }
    addYes.innerHTML = string;
    for (let i = 0; i <arg1.length; i++) {
        del[i].addEventListener('click', deleteCard);
    }
    function deleteCard () {
        this.parentNode.parentNode.removeChild(this.parentNode);
    } 
    document.getElementById("moreButton").innerHTML = "<button id='moreButton' class='buttonText'>More ></button>";
};

function buildDomClassic (arg2) {    
    // let deleteButton = document.getElementsByClassName("deleteButton");
    let classics = document.getElementById("classics");
    let string = "";
    document.getElementById("moreButton").addEventListener("click", loadMore);
    // function deleteCard () {
    //     console.log(1234 + 1234, "bacon");
    // }
    function loadMore () {
        for (let i = 0; i < arg2.length; i++) {
            string += `<section class="newSong"><input type='button' class='deleteButton' value='X'></div><h3 class ="song">${arg2[i].song}</h3><h5 class="artist">${arg2[i].artist}</h5> | <h5 class="album">${arg2[i].album}</h5></section>`;
        }
        // for (let i = 0; i <arg2.length; i++) {
        //     deleteButton[i].addEventListener('click', deleteCard);
        //     deleteButton[i].classList.add("hi");
        // }
    classics.innerHTML = string;
    }
};

SongLoader.loadNewStuff(buildDomNew);
SongLoader.loadClassics(buildDomClassic);