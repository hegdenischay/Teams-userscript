// ==UserScript==
// @name        Teams keyboard Shortcuts
// @namespace   Violentmonkey Scripts
// @include     https://teams.microsoft.com/*
// @inject-into page
// @version     0.1
// @author      Nischay
// @description 9/9/2020, 3:38:48 PM
// ==/UserScript==

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

var work = 0;

document.addEventListener('keyup', (event) => {
  if (event.key == 'f' || event.key == 'F') {
    work = document.getElementsByClassName("call-screen-main")['length'];
    if(work ===1){
        document.getElementsByTagName('button')['callingButtons-showMoreBtn'].click();
        //I use sleep here because teams otherwise throws a tantrum
        sleep(500).then(() => {
        document.getElementsByTagName('button')['full-screen-button'].click();
    });
    }}});

document.addEventListener('keyup', (event) => {
    if (event.key == 'm' || event.key == 'M') {
    work = document.getElementsByClassName("call-screen-main")['length'];
      if(work === 1){
        document.getElementsByTagName('button')['microphone-button'].click();
    }}});

document.addEventListener('keyup', (event) => {
    if (event.key == 'h' || event.key == 'H') {
    work = document.getElementsByClassName("call-screen-main")['length'];
      if(work === 1){
        document.getElementsByTagName('button')['hangup-button'].click();
    }}});

document.addEventListener('keyup', (event) => {
    if (event.key == 'v' || event.key == 'V') {
    work = document.getElementsByClassName("call-screen-main")['length'];
      if(work === 1){
        document.getElementsByTagName('button')['video-button'].click();
    }}});
