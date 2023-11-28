import Player from "@vimeo/player";
const throttle = require ('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const keyStorage = 'videoplayer-current-time';

const timeProgress = localStorage.getItem(keyStorage);

const throttleFunction = throttle(function (time) {
    localStorage.setItem(keyStorage, Math.floor(time.seconds));
}, 1000);

player.on('timeupdate', throttleFunction);
player.setCurrentTime(timeProgress);