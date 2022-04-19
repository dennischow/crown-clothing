import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import "./sign-in.styles.scss";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(user);
        const userDocRef = await createUserDocumentFromAuth(user);
    };
    return (
        <div>
            <h1>Sign in page</h1>
            <button type="button" onClick={logGoogleUser}>
                Sign-in with Google Popup
            </button>

            <SignUpForm />
        </div>
    );
};

export default SignIn;
