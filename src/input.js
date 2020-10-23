import character from '/src/llama.js';

export default class InputHandler {

    moveLeft = false;
    moveRight = false;

    constructor(character) {
        document.addEventListener('keydown', event=> {
            switch(event.key){
                case 'ArrowLeft':
                    this.moveLeft = true;
                    break;
                case 'ArrowRight':
                    this.moveRight = true;
                    break;
                case 'ArrowUp':
                    if(character.jumping == false){
                        character.jump();
                    }
                    break;
                default:
                    this.moveLeft = false;
                    this.moveRight = false;
                    break;
            }
        });

        document.addEventListener('keyup', event=> {
            switch(event.key){
                case 'ArrowLeft':
                    this.moveLeft = false;
                    break;

                case 'ArrowRight':
                    this.moveRight = false;
                    break;
            }
        });
    }

    get getMovement() {
        if (this.moveLeft && !this.moveRight) {
            return -1;
        } else if (!this.moveLeft && this.moveRight) {
            return 1;
        } else {
            return 0;
        }
    }




}