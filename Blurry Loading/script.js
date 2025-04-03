const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
const images = [
    'https://motionbgs.com/media/5869/igris-in-solo-leveling.jpg',
    'https://motionbgs.com/media/2770/shadows-army-solo-leveling.jpg',
    'https://images3.alphacoders.com/112/1128122.jpg',
    'https://images5.alphacoders.com/137/thumb-1920-1372162.jpeg',
];

const randomImage = images[Math.floor(Math.random() * images.length)];

let load = 0
let int = setInterval(blurring, 30)

function blurring(){
    load++

    if(load > 99){
        clearInterval(int)
    }

    bg.style.backgroundImage = `url('${randomImage}')`
    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}


//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

