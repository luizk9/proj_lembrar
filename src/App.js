import { Notifyer }  from "./Notifyer.js";
import { Timer } from "./Timer.js";
import { Emitter } from "./Emiitter.js";
const App = {
   async start(){
      try{
         await Notifyer.init(),

         Emitter.on('countdown-star',()=>{

            Notifyer.notify({
               title: "Hora de Codar",
               body: "vamos colocar a mão na masssar"
          })  
         }) 

         Emitter.on('countdown-end', () =>{
            Timer.init()
         })

         Timer.init(0.5 * 60) // depois de format vem passar o tempo
        //console.log("ok ai...");
          
          
        } catch(err){
                console.log(eer.mensage)
        }              
    }       
}

export{App};