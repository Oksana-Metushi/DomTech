import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../../firebase";
import { useNavigate } from "react-router-dom";

export default function OAuth() {

    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);
            
            const response = await fetch("/client-server/auth/google", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                }),
            });
            const data = await response.json();
            if (response.ok) {
                navigate("/");
            } else {
                throw new Error(data.message);
            }
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <button onClick={handleGoogleLogin}>Continue with Google</button>
    )
}