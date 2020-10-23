import {character} from '/src/index.js';

export default class InputHandler {

    constructor() {
        document.addEventListener('keydown', event=> {
            switch(event.key){
                case 'a':
                    character.moveLeft();
                    break;

                case 'd':
                    character.moveRight();
                    break;

                case 'w':
                    if(character.jumping == false){
                        character.jump();
                    }
                        
                        
                    break;

        
            }
        });

          

        
    }




}