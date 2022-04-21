import { useState } from "react";

import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FromInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
    email: "",
    password: "",
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(user);
        await createUserDocumentFromAuth(user);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields();
        } catch (error) {}
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <p>Sign in with your email and password</p>
            <form onSubmit={handleSubmit}>
                <FromInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />

                <FromInput label="Password" type="passowrd" required onChange={handleChange} name="password" value={password} />

                <div className="buttons-container">
                    <Button buttonType="default" type="submit">
                        Sign In
                    </Button>
                    <Button buttonType="google" type="button" onClick={signInWithGoogle}>
                        Google Sign In
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
