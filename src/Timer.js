import {View } from "./View.js";
import { Emitter } from "./Emiitter.js";

const Timer = {
    time: 0.1*60,
    currentTime:  0,
    interval:null,

    timeToMinutes: time => Math.floor(time/60),
    // vai arredondar pelo piso 125/60 = 2 piso
    timeToSeconds: time => time%60,
    // vai pegar o resto da divisão 125/60 = resto 5
    
    formatTime: time => String(time).padStart(2,'0'),

    init(time) {
       Emitter.emit('countdown-star') 
       Timer.time = time || 60 * 60
       Timer.currentTime = Timer.time 
       Timer.interval = setInterval(Timer.countdown, 
        1000)    
    }, // fim init

// contagem para baixo.............
    countdown(){
        Timer.currentTime = Timer.currentTime -1

        const minutes = Timer.formatTime (Timer.timeToMinutes(Timer.currentTime))
        const seconds = Timer.formatTime (Timer.timeToSeconds(Timer.currentTime))
      

         View.render({minutes:minutes, 
            seconds:seconds})
           
        if(Timer.currentTime ===0){
            clearInterval(Timer.interval)
            // vai avisar o zero do evento
            Emitter.emit('countdown-end')
            return;
        }        
    } // fim do countdown
    
}//fim da const

export {Timer}




