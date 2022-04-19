import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

import "./sign-in.styles.scss";

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    };
    return (
        <div>
            <h1>Sign in page</h1>
            <button type="button" onClick={logGoogleUser}>
                Sign-in with Google Popup
            </button>
        </div>
    );
};

export default SignIn;
