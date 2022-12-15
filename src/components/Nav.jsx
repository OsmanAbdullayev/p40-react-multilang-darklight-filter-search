import React from "react";
import "../i18n";
import { useTranslation } from "react-i18next";

const Nav = ({ azLang, itLang, engLang, t, colorMode, darkLightMode }) => {
	return (
		<div>
			<nav className={`navbar navbar-expand-lg shadow navbar-${colorMode} bg-${colorMode}`}>
				<div className="container-fluid">
					<a className="navbar-brand p-3" href="#">
						Toblerone
					</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">
									{t(`nav.0`)}
								</a>
							</li>
						</ul>
						<button className="btn btn-outline-success" type="submit" onClick={azLang}>
							AZ
						</button>
						<button className="btn btn-outline-success mx-2" type="submit" onClick={itLang}>
							IT
						</button>
						<button className="btn btn-outline-success" type="submit" onClick={engLang}>
							ENG
						</button>
            <button className="btn btn-success ms-2" type="submit" onClick={darkLightMode}>
							Mode
						</button>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Nav;
