import { Player } from './player/index.js';
import { VideoPlayableFactory } from './videos/video-playable-factory.js';

function main() {
    console.log('film page');
    const $target = document.querySelector('.player-container');
    const p = new Player($target);

    p.setup();
}

main();
