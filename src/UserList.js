import { useEffect, useState } from "react";
import './UserList.css';

function UserList() {
    // Déclaration des états
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if(!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            }).then(data => {
                setUsers(data);
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
        <div className="user-list-container">
            <h2>Liste des utilisateurs</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Pseudo</th>
                        <th>Adresse mail</th>
                        <th>Adresse physique</th>
                        <th>Téléphone</th>
                        <th>Site web</th>
                        <th>Entreprise</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.address.street} { user.address.suite} {user.address.city}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                                <td>{user.company.name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    );
}

export default UserList;