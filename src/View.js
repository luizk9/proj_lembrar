const View = {
    render({minutes, seconds}) {
    document.body.innerHTML = 
        ` <span>Próximo tela em:</span>
          <span>${minutes}:${seconds}</span> 
          `;
        }       
}


export{View } ;

/*
esta maneira vai facilitar a manutenção do código
*/