import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-danger mb-3 px-5">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 text-white mx-2">PokeDex</span>
			</Link>
			<div className="ml-auto me-5">
				<div className="dropdown me-5">
					<button className="btn btn-light dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Team
					</button>

					<ul className="dropdown-menu ">
						{
							store.equipo.map((poke, ind) => <li key={ind}>
								<p onClick={()=> actions.removeFromTeam({
									name: poke.name
								})} className="dropdown-item" >{poke.name}</p>
							</li>)
						}
					</ul>
				</div>
			</div>

		</nav>
	);
};
