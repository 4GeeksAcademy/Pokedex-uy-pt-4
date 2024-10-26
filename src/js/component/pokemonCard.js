import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { formatName } from "../utils";
import { Context } from "../store/appContext";


const PokemonCard = (props) => {

    const { store, actions } = useContext(Context);

    return (<div className="col-12 col-md-3 col-lg-4 col-xl-3 p-2 text-center">
        <div className="card">
            <img src={props.imageUrl} className="card-img-top mt-2" alt={"image-" + props.name}
                style={{
                    maxHeight: '100px',
                    maxWidth: 'auto'
                }}
            />
            <div className="card-body">
                <h5 className="card-title">{formatName(props.name)}</h5>
                <Link to={"/pokemon/"+ props.id} className="btn btn-danger">Analizar</Link>
                <button className="btn btn-warning mx-2"
                    onClick={()=> actions.addToTeam({
                        name: formatName(props.name)
                    })}
                >
                    Seleccionar
                </button>
            </div>
        </div>
    </div>)
};

export default PokemonCard;