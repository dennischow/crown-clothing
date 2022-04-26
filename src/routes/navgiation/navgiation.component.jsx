import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { ReactComponent as CrownLogo } from "./../../assets/crown.svg";

import "./navigation.styles.scss";

const Navgiation = () => {
    const { currentUser } = useContext(UserContext);

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrownLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        Shop
                    </Link>
                    {currentUser ? (
                        <a className="nav-link" onClick={signOutUser}>
                            Sign-out
                        </a>
                    ) : (
                        <Link className="nav-link" to="/auth">
                            Sign-in
                        </Link>
                    )}
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navgiation;
