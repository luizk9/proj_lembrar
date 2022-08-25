

 const Emitter = {
    events: {},

    on(eventNome, cb)  {
     Emitter.events[eventNome] =  Emitter.events[eventNome] || []
     Emitter.events[eventNome].push(cb)     
    },       

    emit(eventNome, ...rest) {
    if (eventNome in Emitter.events === false){
        return;
    }
     Emitter.events[eventNome].forEach( (e) => {
          e(...rest)
           } )    
    }
 } 



Emitter.emit('click')

export {Emitter}




