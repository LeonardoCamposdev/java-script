const btns = document.querySelectorAll('button');
const som1 = new Audio('sounds/boom.wav'); 
const som2 =  new Audio('sounds/clap.wav'); 

function controlDrum({key}){
    switch (key) {
        case 'a':
            som1.play();
        break;

        case 's':
            som2.play();
        break;

        case 'd':
            console.log(key)
        break;

        case 'f':
            console.log(key)
        break;

        case 'g':
            console.log(key)
        break;

        case 'h':
            console.log(key)
        break;

        case 'j':
            console.log(key)
        break;

        case 'l':
            console.log(key)
        break;
        default:
            break;
    }
}


window.addEventListener('keydown',controlDrum)