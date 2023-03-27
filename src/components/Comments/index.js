const commentarios = [{
    "usuario": "Murilo",
    "comentario": "Muito bom!",
    "filme": "Veloses e Furiosos 3"
},
{
    "usuario": "Jonas",
    "comentario": "Ótimo!",
    "filme": "Carga Explosiva 3"
},
{
    "usuario": "Carlos",
    "comentario": "Perfeito!",
    "filme": "Senhor dos Aneis"
}
]

export default function Comments({ filme }) {
    const comentariosFilme = commentarios.filter(filmec =>
        filmec.filme = 'Veloses e Furiosos 3','Carga Explosiva 3'
    );
    return (
        <div className="container text-center">
            <div className="row">
                {comentariosFilme.map((comment, i) => (
                    <div className="col" key={i.toString()}>
                        <div className="card">
                            {comment.comentario}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}