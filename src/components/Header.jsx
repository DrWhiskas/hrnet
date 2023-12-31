import React from "react";
import { Link } from 'react-router-dom';
import '../style/header.css'

export default function Header(){

    return (
			<nav className="header">
				<Link to="/">
					<h1 className="header__logo">HRNet</h1>
				</Link>
				<Link to="/" className="header__links">
					Create
				</Link>
				<Link to="/employees" className="header__links">
					Employees
				</Link>
			</nav>
		);

}