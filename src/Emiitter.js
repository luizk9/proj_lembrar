

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


 Emitter.on('click', () => console.log('olá 2 '))
 Emitter.on('click', () => console.log('repetindo 3 '))
 
Emitter.emit('click')

export {Emitter}




