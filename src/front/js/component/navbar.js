import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Welcome to Social Media</span>
				</Link>
				<div class="d-flex justify-content-end">
					<div className="ml-auto">
						<Link to="/registration">
							<button className="btn btn-primary me-3">Register</button>
						</Link>
					</div>
					<div className="ml-auto">
						<Link to="/login">
							<button className="btn btn-primary">Login</button>
						</Link>
					</div>
				</div>

			</div>
		</nav>
	);
};
