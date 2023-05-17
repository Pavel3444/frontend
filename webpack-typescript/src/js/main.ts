import rain from "../audio/rain.mp3";
import sun from "../audio/summer.mp3";
import snow from "../audio/winter.mp3";


const btns: NodeListOf<HTMLDivElement> = document.querySelectorAll('.btn');
const bgImage: HTMLDivElement = document.querySelector('.bg')!;
const audioElement: HTMLAudioElement  = document.createElement('audio');
const audioSource: HTMLSourceElement = document.createElement('source');
let activeTrack: null|string = null;
let played: boolean = false;
export function createSound(): void{
  audioElement.appendChild(audioSource);
      audioElement.setAttribute('loop','loop');
     audioElement.setAttribute('controls', 'controls');
    audioSource.setAttribute('src',sun)
    document.querySelector('#app')!.appendChild(audioElement);
}

function getMusic(attr: string): string{
    switch (attr){
        case 'rain':
            return rain;
        case 'snow':
            return snow;
        default :
            return sun;
    }
}

export function play() {
        btns.forEach(btn=>{
            btn.addEventListener('click',()=>{
                btns.forEach(p=>p.classList.remove('pause'))
                const season: string = btn.getAttribute('data-pick') ?? '';
                const current: string = getMusic(season)
               bgImage.classList.remove('sun', 'snow','rain');
               bgImage.classList.add(season);
               audioSource.setAttribute('src', current);
               if (activeTrack === current && played) {
                   audioElement.pause();
                   played = false;
                   btn.classList.add('pause');
               }
               else{
                   audioElement.load();
                   audioElement.play();
                   played = true
               }
                activeTrack = current;
            })
        })
}


const point: HTMLDivElement = document.querySelector('.point')!;
const setting: HTMLDivElement = document.querySelector('.graph')!;
const progress: HTMLDivElement = document.querySelector('.completed')!;


interface CursorEvent{
    clientX: number;
}
function setVolume(e: CursorEvent): void{
    const v: number = +((e.clientX - setting.offsetLeft)/setting.clientWidth as number).toFixed(2);
    const fixV: number = v > 1 ? 1 : v < 0 ? 0 : v;
    audioElement.volume = fixV;
    point.style.left = `${fixV*100}%`;
    progress.style.width = `${fixV*100}%`;
}

export function changeVolume(): void{
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