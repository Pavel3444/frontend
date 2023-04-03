import rain from "../audio/rain.mp3";
import sun from "../audio/summer.mp3";
import snow from "../audio/winter.mp3";

const btns = document.querySelectorAll('.btn')
const bg = document.querySelector('.bg');
const a  = document.createElement('audio');
const s = document.createElement('source');
let activeTrack = null;
let played = false;
export function createSound(){
  a.appendChild(s);
      a.setAttribute('loop','loop');
     a.setAttribute('controls', 'controls');
    s.setAttribute('src',sun)
    document.querySelector('#app').appendChild(a);
}

function getMusic(attr){
    switch (attr){
        case 'rain':
            return rain;
        case 'sun':
            return sun;
        case 'snow':
            return snow;
    }
}

export function play() {
        btns.forEach(btn=>{
            btn.addEventListener('click',()=>{
                btns.forEach(p=>p.classList.remove('pause'))
                const season = btn.getAttribute('data-pick');
                const current = getMusic(season)
               bg.classList.remove('sun', 'snow','rain');
               bg.classList.add(season);
               s.setAttribute('src', current);
               if (activeTrack === current && played) {
                   a.pause();
                   played = false;
                   btn.classList.add('pause');
               }
               else{
                   a.load();
                   a.play();
                   played = true
               }
                activeTrack = current;
            })
        })

}

const point = document.querySelector('.point');
const setting = document.querySelector('.graph');
const progress = document.querySelector('.completed');


function setVolume(e){
    const v = ((e.clientX - setting.offsetLeft)/setting.clientWidth).toFixed(2);
    const fixV = v > 1 ? 1 : v < 0 ? 0 : v;
    a.volume = fixV;
    point.style.left = `${fixV*100}%`;
    progress.style.width = `${fixV*100}%`;
}

export function changeVolume(){
    setting.addEventListener('click',e=>{
        // point.removeEventListener('mousemove',setVolume);
        setVolume(e);
    })

    point.addEventListener('mousedown',()=>{
        point.addEventListener('mousemove', setVolume, false)
    })
    point.addEventListener('mouseup',()=>{
        point.removeEventListener('mousemove',setVolume)
    })
}