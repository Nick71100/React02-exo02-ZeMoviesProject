import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

import { valideUser } from "../utils/storage";

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const userName = userRef.current.value;
    const password = passwordRef.current.value;

    if (!userName || !password) {
      setError("Veuillez entrer le nom d'utilisateur et le mot de passe.");
      return;
    }

    const user = valideUser(userName, password);

    if (!user) {
      setError("Inavlide !");
      return;
    }

    setError("");
    console.log("connexion établie");
  }
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={userRef}
          placeholder="Entrez votre nom d'utilisateur"
        />
        <input
          type="password"
          ref={passwordRef}
          placeholder="Entrez votre mot de passe"
        />
        <button type="submit">Se connecter</button>
        {error && <p>{error}</p>}
      </form>
      <p>
        Pas encore de compte ? <Link to="/register">S'enregistrer</Link>
      </p>
    </main>
  );
}

export default Login;
