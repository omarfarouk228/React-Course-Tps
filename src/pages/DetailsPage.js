import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailsPage() {
    const { id } = useParams();

    // Déclaration des états
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users/' + id)
                .then(response => {
                    if(!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                }).then(data => {
                    setUser(data);
                }).catch(error => {
                    setError(error);
                }).finally(() => {
                    setLoading(false);
                });
            
        }, []);
    
        if(loading) {
            return <p>Loading...</p>
        }
    
        if(error) {
            return <p>Error: {error.message}</p>
        }
    

    return (
        <div>
            <h3>Détails de {user.name}</h3>
            <p>Pseudo : <strong>{user.username}</strong></p>
            <p>Adresse mail : <strong>{user.email}</strong></p>
            <p>Site web : <strong>{user.website}</strong></p>
        </div>
    );
}

export default DetailsPage;