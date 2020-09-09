// ==UserScript==
// @name        Teams keyboard Shortcuts
// @namespace   Violentmonkey Scripts
// @include     https://teams.microsoft.com/*
// @inject      auto
// @version     0.1
// @author      Nischay
// @description 9/9/2020, 3:38:48 PM
// ==/UserScript==

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

document.addEventListener('keyup', (event) => {
    if (event.key == 'f') {
        document.getElementsByTagName('button')['callingButtons-showMoreBtn'].click();
        //I use sleep here because teams otherwise throws a tantrum
        sleep(500).then(() => {
        document.getElementsByTagName('button')['full-screen-button'].click();
    });
    }});
