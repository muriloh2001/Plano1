import "./sobre.css"
import React from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';

const filmes = [{
    "foto": "teste.jpg",
    "descricao": "A Meta é o nome dado à empresa controladora do Facebook e outros produtos relacionados, como Instagram WhatsApp. Anteriormente chamada Facebook Inc, teve a mudança anunciada por Mark Zuckerberg no evento Facebook Connect, em 28 de outubro de 2021.",

}
];

function Sobre() {
    const { name } = useParams();
    
    
    return (
        <div>  
            <Title
                title={"Sobre"}
                text={"Mais informações sobre a empresa"} />          
            <p>Olá usuário Conheça um pouco sobre a Meta</p>      
            <div className="container text-center">
            {filmes.map((filme, i) => (
      <div className="row-sobre">
            <div className="card">
            <img src={'/assets/images/' + filme.foto} alt={filme.nome} className="card-img-sobre" />
              <div className="card-body">
                <h5 className="card-title"> </h5>
                <p>Detalhes</p>
                <p className="card-text"></p> 
                <p>{filme.descricao}</p>
                    
              </div>
            </div>      
      </div>
      ))}
    </div>
        </div>
    )
}

export default Sobre;