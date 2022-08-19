const Notifyer = {
 async init( ) {
        const permission  = await Notification.requestPermission()
        // console.log(permission);
         if(permission!== "granted"){
                throw new Error("Permissão negada")
                 }       
             },
        notify(    {title, body,icon}  )
        {       
                new Notification(title,{
                        body,
                        icon
               })
                      
        }
}
export { Notifyer};