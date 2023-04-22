
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';



const currentTimeKey = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe, {
  loop: true,
  id: "vimeo-player",
 width: 640,

});

const getCurrentTime = function (currentTime) {
  const seconds = currentTime.seconds;
  localStorage.setItem(currentTimeKey, JSON.stringify(seconds));
};
player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(currentTimeKey)));






   