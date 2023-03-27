import "./detalhes.css"
import React from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';






const filmes = [{
    "nome": "Veloses e Furiosos 3 ",
    "foto": "veloses.jpg",
    "genero": "Gênero: Ação/Carros",
    "descricao": "Brian O'Conner é um policial que se infiltra no submundo dos rachas de rua para investigar uma série de furtos. Enquanto tenta ganhar o respeito e a confiança do líder Dom Toretto, ele corre o risco de ser desmascarado.",
    "nota": "Nota Avaliada:  10"

},
{
    "nome": "Carga Explosiva",
    "foto": "carga.jpg",
    "genero": "Gênero: Ação/Suspense",
    "descricao": "A última tarefa de Frank Martin é proteger Valentina, a cínica filha de um oficial ucraniano. Enquanto seu pai pensa sobre o que fazer com três barcos carregados de resíduos tóxicos, Frank precisa proteger a mulher problemática e impedi-la de se afastar muito de seu veículo ou evitar o risco de detonar os explosivos que os dois estão usando.",
    "nota":"Nota Avaliada: 8"
},
{
    "nome": "Senhor dos Aneis",
    "foto": "senhor.jpg",
    "genero": "Gênero: Ação/Nerd",
    "descricao": "O confronto final entre as forças do bem e do mal que lutam pelo controle do futuro da Terra Média se aproxima. Sauron planeja um grande ataque a Minas Tirith, capital de Gondor, o que faz com que Gandalf e Pippin partam para o local na intenção de ajudar a resistência. Um exército é reunido por Theoden em Rohan, em mais uma tentativa de deter as forças de Sauron. Enquanto isso, Frodo, Sam e Gollum seguem sua viagem rumo à Montanha da Perdição para destruir o anel.",
    "nota": "Nota Avaliada: 9"
}
]

function Detalhes() {
    const { filme } = useParams();

    return (
    
            <div>         
            <Title
                title={"Detalhes"}
                text="" />               
            <p>filme: {filme}</p>
            {(() => {
                
                if (filme == 'Veloses e Furiosos 3') {
                    return (
                        <div className="container">
                            {filmes.map((filme,  i) => (
                            <div className='card-detalhes'>
                                <img src={"/assets/images/" + filme.foto} alt={filme.nome} className="card-img" />
                                <div className="card-body">
                        <h3 className="card-title">{filme.nome} </h3>
                        <h5>Sinopse</h5>
                        <p className="card-text-center"></p>
                            <p>{filme.duração}</p>
                            <p>{filme.genero}</p>
                            <p>{filme.descricao}</p>
                            <p>{filme.nota}</p>
                        <a
                        href={`/detalhes/${filme.nome}`}
                        >
                        </a>
                    </div>                                                     
                            </div>   

                            ))}
                        
                        </div>
                    )
                } else if (filme == 'Carga Explosiva 3') {
                    return (
                        <div className="card-img">
                            <p>{filmes[1].descricao}</p>
                            <p>{filmes[1].genero}</p>
                        </div>
                    )
                } else {
                    return (
                        <div>
                            <p>{filmes[2].descricao}</p>
                            <p>{filmes[2].genero}</p>
                        </div>
                    )
                }
            })()}
        </div>
    )
}

export default Detalhes;