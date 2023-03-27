import React from 'react';
import Title from './../components/Title/index';

const planos = [{
    "nome": "Plano Simples ",
    "valor": "R$ 59,90/mês",
    "duracao": "Mensal",
    "contratado": true 
  },
  {
    "nome": "Plano Advanced",
    "valor": "6x R$ 39,90 ",
    "duracao": "Trimestral",
    "contratado": false,
    "propaganda": "Não perca tempo garanta já o seu upgrade"
  },
  {
    "nome": "Plano Pro",
    "valor": "12x R$ 41,66 ",
    "duracao": " Anualmente",
    "contratado": false,
    "propaganda": "Contrate hoje e economize R$ 218,80 "
  }
  ]


 
  function Contratado({ jacontratado }) {
    if (jacontratado) {
      return <p>Contratado ✔</p>;
    }
    return <p className="item"><b>Upgrade</b></p>;
  }
 
function Planos(){
    return (
        <div>
            <Title
                title={"Planos"}
                text={"Veja abaixo os planos disponíveis:"} /> 
                <div className="container ">
                    <div className="row">
                {planos.map((planos, i) => (
                    <div className="col" key={i} >
                        <div className="card-planos">
                            <div className="card-body-planos">
                                <h5 className="card-title">{planos.nome}  </h5>
                                <p>Especificação do Plano</p>
                                <p className="card-text">{planos.valor}</p>   
                                <p><b>{planos.duracao}</b></p>
                                <p>{planos.propaganda}</p>
                               
                                <Contratado
                                jacontratado={planos.contratado}
                                />
                                <a
                                href={`/detalhes/${planos.nome}`}
                                >                              
                                <div className="btn btn-primary" >
                                    Adquirir
                                </div>
                                </a>
                            </div>     
                        </div>
                    </div>    
                ))}
                </div>
                    </div>
                </div>
                        
    )
}
    export default Planos;
 
