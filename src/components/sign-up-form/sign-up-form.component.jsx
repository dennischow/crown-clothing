import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FromInput from "../form-input/form-input.component";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("password do not match.");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            console.log(user);
            await createUserDocumentFromAuth(user, { displayName }); // { displayName } as a object for additional information to the method
            resetFormFields();
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Can not create user, email already in use!");
            } else {
                console.log("User creation encounted an error", error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <FromInput label="Display Nanme" type="text" required onChange={handleChange} name="displayName" value={displayName} />

                <FromInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />

                <FromInput label="Password" type="passowrd" required onChange={handleChange} name="password" value={password} />

                <FromInput label="Confirm Password" type="passowrd" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

                <FromInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpForm;
