import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { valideUser } from "../utils/storage";
import { useAuth } from "../utils/AuthContext";

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();

    const userName = userRef.current.value;
    const password = passwordRef.current.value;
    const user = valideUser(userName, password);

    if (!userName || !password) {
      setError("Veuillez entrer le nom d'utilisateur et le mot de passe.");
      return;
    }

    if (!user) {
      setError("Inavlide !");
      return;
    }

    login(user);
    setError("");
    console.log("connexion établie");
    navigate("/");
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
        {error && <p style={{ color: "#ca4949" }}>{error}</p>}
      </form>
      <p>
        Pas encore de compte ? <Link to="/register">S'enregistrer</Link>
      </p>
    </main>
  );
}

export default Login;
