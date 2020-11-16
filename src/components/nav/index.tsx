/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useEffect, useRef, useState } from "react";

import NavButton from "./nav-button";
import "./styles.scss";

const Nav: React.FunctionComponent = () => {
	const [isSticky, setSticky] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	const handleScroll = () => {
		if (ref.current) {
			setSticky(ref.current.getBoundingClientRect().top <= 0);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", () => handleScroll);
		};
	}, []);

	return (
		<nav className={`nav ${isSticky ? "sticky" : ""}`} ref={ref}>
			<div className='nav-controls sticky-inner'>
				<NavButton link='/' text='Home' />
			</div>
		</nav>
	);
};

export default Nav;
