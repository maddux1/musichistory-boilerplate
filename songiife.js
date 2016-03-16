"use strict"
function buildDomNew (lambdaUno) {
    let addYes = document.getElementById("rightColumn");
    let string = "";
    for (let i = 0; i < lambdaUno.length; i++) {
    string += `<h3 class ="song">${lambdaUno[i].song}</h3><h5 class="artist">${lambdaUno[i].artist}</h5><h5 class="album">${lambdaUno[i].album}</h5>`;
    }
    addYes.innerHTML = string;
}

SongLoader.loadNewStuff(buildDomNew);