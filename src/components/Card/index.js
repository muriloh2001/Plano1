import "./card.css";
import Comments from './../Comments/index';

const filmes = [{
  "nome": "Veloses e Furiosos 3 ",
  "foto": "veloses.jpg",
  "assistido": true,
  "genero": "Ação/Carros",
},
{
  "nome": "Carga Explosiva 3",
  "foto": "carga.jpg",
  "assistido": true,
  "genero": "Ação/Suspense",
},
{
  "nome": "Senhor dos Aneis",
  "foto": "senhor.jpg",
  "assistido": false,
  "genero": "Ação/Nerd",
}
]

function Assitido({ javisto }) {
  if (javisto) {
    return <p>Assistido ✔</p>;
  }
  return <p className="item">Não assistido</p>;
}

export default function Card() {
  return (
    <div className="container text-center">
      <div className="row">
        {filmes.map((filme, i) => (
          <div className="col" key={i}>
            <div className="card">
              <img src={'/assets/images/' + filme.foto} alt={filme.nome} className="card-img-top" />
              <div className="card-body">
                <h3 className="card-title">{filme.nome} </h3>
                <h3>
                <p>Detalhes</p>
                </h3>
                <p className="card-text"></p>
                <p>{filme.genero}</p> 
                <Assitido
                  javisto={filme.assistido}
                />
                <a
                  href={`/detalhes/${filme.nome}`}
                >
                  <div className="btn btn-primary">
                    Para mais Detalhes
                  </div>
                </a>
              </div>
            </div>
            <Comments filme={filme.nome} />
          </div>
        ))}
      </div>
    </div>
  )
}