import {View } from "./View.js";

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
        // ou customiza o temporizador eu digo como tempo vai funcionar ou de 25min ou de 60 caso nao tenha nada
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
          /* transformando em string
        //console.log(Timer.formatTime (minutes), 
         ":" , Timer.formatTime(seconds) );
         depois chamo ele na view.render
         */

         View.render({minutes:minutes, 
            seconds:seconds})

            /* ou pode escrever abreviado nome
            objet propety Shorthand --
                       
             View.render({
                minutes, 
                seconds
                })
                */

        if(Timer.currentTime ===0){
            clearInterval(Timer.interval)
            return;
        }        
    } // fim do countdown
    
}//fim da const

export {Timer}





/* 
## Timer ....é o tempo em segundos que se deseja execultar
no caso ai 25 min  transforando em segundos.
## curentTime...tempo corrido do inicio do programa
#-- interval.... É o intervalo onde tem  o setInterval, que é o
contador de tempo 
*/