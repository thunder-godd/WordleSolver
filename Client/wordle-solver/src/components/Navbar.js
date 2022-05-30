import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-dark w-100">
			<h5 className="logo text-light">WordleSolver</h5>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
		</nav>
	);
};

export default Navbar;
