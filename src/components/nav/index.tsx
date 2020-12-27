/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useEffect, useRef, useState } from "react";
import SearchBox from "../search-box";

import NavButton from "./nav-button";
import styles from "./styles.scss";

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
		<nav
			className={`${styles.nav} ${isSticky ? styles.sticky : ""}`}
			ref={ref}
		>
			<div className={`${styles.navControls} ${styles.stickyInner}`}>
				<NavButton link='/' text='Just Weather' />
				<SearchBox />
			</div>
		</nav>
	);
};

export default Nav;
