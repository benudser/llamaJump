import Character from '/src/llama.js';
import InputHandler from '/src/input.js';
let canvas = document.getElementById('gameScreen');
let context = canvas.getContext('2d');


const GAME_WIDTH = 1000;
const GAME_HEIGHT = 800;

export let character = new Character(GAME_HEIGHT, GAME_WIDTH);
let input = new InputHandler();

window.requestAnimationFrame(gameLoop);


function gameLoop(llama) {
    context.clearRect(0,0, GAME_WIDTH, GAME_HEIGHT);
    
    character.draw(context);
    character.update(context);

    window.requestAnimationFrame(gameLoop);
    
}





