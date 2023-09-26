import ICard from "../../interfaces/ICard"

const Card = ({ icone, titulo, texto, rota, link }: ICard) => {
    return (
        <div className="card h-100 text-start">
            <div className="card-body">
                <img src={icone} alt="" />
                <h5 className="card-title sora-400">{titulo}</h5>
                <p className="card-text inter-400-li">{texto}</p>
                <a href={rota} className="card-link inter-600-link">{link}</a>
            </div>
        </div>
    )
}

export default Card