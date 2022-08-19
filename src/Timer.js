const Timer = {
    tempoSegundos: 0.1* 60,
    correnteTempoInicio:  0,
    intervaloTempoContar:null,
    init() {
       Timer.correnteTempoInicio = Timer.tempoSegundos 
      Timer.intervaloTempoContar = setInterval(Timer.countdown, 1000)
    }, // fim init

    countdown(){
        Timer.correnteTempoInicio = Timer.correnteTempoInicio -1
        console.log('de novo...' + Timer.correnteTempoInicio)
        if(Timer.correnteTempoInicio ===0){
            clearInterval(Timer.intervaloTempoContar)
            return;
        }


        
    }
}//fim da const

export {Timer}

/*
setInterval(() =>{
            console.log('olha ai...');
        }, 1000)

*/