import React from "react";
import { Link, useLocation } from 'react-router-dom';

export default function Header(){
    const location = useLocation()

    return (
			<nav className="header">
				<Link to="/">
					<h1 className="header__logo">HRNet</h1>
				</Link>
				<Link to="/">Create</Link>
				<Link to="/"></Link>
			</nav>
		);

}