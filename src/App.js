import { Notifyer }  from "./Notifyer.js";
import { Timer } from "./Timer.js";
import { Emitter } from "./Emiitter.js";

const varF_notify = Notifyer.notify({
   title: "#_Hora de Coda...",
   body: "Crie alguma coisa...."
})

console.log(varF_notify);

const App = {
   async start(){
      try{
         await Notifyer.init(),

         Emitter.on('countdown-star', varF_notify)
         Emitter.on('countdown-end', Timer.init )

         Timer.init( )   
        } catch(err){
                console.log(eer.mensage)
        }   
      }
   }
   
export{App};