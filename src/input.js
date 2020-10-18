import {character} from '/src/index.js';

export default class InputHandler {

    constructor() {
        document.addEventListener('keydown', event=> {
            switch(event.code){
                case 'KeyW':
                    character.jump();
                    break;

                case 'KeyS':
                    character.duck();
                    break;

                case 'KeyA':
                    character.moveLeft();
                    break;

                case 'KeyD':
                    character.moveRight();
                    break;

        
            }
        });
    }

}