import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import GoBackBtn from "../components/GoBackBtn";
import { fetchSecrets } from "../api/authService";

export default function Secrets() {
    const [secrets, setSecrets] = useState([]);
    const [error, setError] = useState(null);
    const { token } = useAuth();
    const location = useLocation();

    useEffect(() => {
        async function loadSecrets() {
            try {
                const data = await fetchSecrets(token);
                setSecrets(data);
            } catch (err) {
                setError(err.message);
            }
        }

        loadSecrets();
    }, [token]);

    return (
        <>
            <div className="secundary__header">
                <GoBackBtn />
            </div>

            <h2 className="secrets__title">Secrets</h2>
            {error && <p>Error: {error}</p>}

            <ul>
                {secrets.map((secret) => (
                    <li key={secret.id}>
                        <p>"{secret.quote}"</p>
                        <small className="author"> - {secret.author} ({secret.origin})</small>
                    </li>
                ))}
            </ul>
        </>
    );
}
