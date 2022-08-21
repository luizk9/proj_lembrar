import { Notifyer }  from "./Notifyer.js";
import { Timer } from "./Timer.js";

const App = {
   async start(){
      try{
         const time = 25 * 60
         Timer.init(time) // depois de format vem passar o tempo
        //console.log("ok ai...");
   
           /*     await Notifyer.init() 
           Notifyer.notify({
                title: "Hora de Codar",
                body: "vamos colocar a mão na masssar"
           }) */
        } catch(err){
                console.log(eer.mensage)
        }              
    }       
}

export{App};