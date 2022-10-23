import './Card.css'

const Card = ()=>{
    return (
        <>
            <div className="card">
                <div className="card-photo">
                        <img src="../../img/cadeira.jpg"/>
                </div>

                <div className="card-name-product">
                    <p>
                        Cadeira vitoriana
                    </p>
                </div>

                <div className="card-description">
                    <p>Desenho clássico com acabamento em madeira</p>
                </div>

                <div className="card-price">
                    <p>R$ 97.50</p>
                </div>

                <div className="card-buttom">
                    <button> Adicionar ao carrinho</button>
                </div>
            </div>
        </>
    )
}

export default Card