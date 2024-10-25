import React from "react";
import { Link } from "react-router-dom";

const formatName = (name) => name.charAt(0).toUpperCase() + name.slice(1)

const PokemonCard = (props) => {

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
            </div>
        </div>
    </div>)
};

export default PokemonCard;