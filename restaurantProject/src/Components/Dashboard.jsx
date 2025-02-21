import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading,setLoading] = useState("True");

    useEffect(() => {
        const url = "https://dummyjson.com/recipes";
        const fetchData = async () => {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.recipes);
            setRecipes(data.recipes);
            setLoading(false);
        };
        fetchData();
    }, []); 

    return (
        <div>
            <h1>Restaurant Menu</h1>
            <table>
                <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th>Recipe Name</th>
                        <th>Cuisine</th>
                        <th>Rating</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {loading && <p>Loading...</p>}
                    {recipes.map((r) => (
                        <tr key={r.id}> 
                            <td><img src={r.image} width="100" height="50" alt={r.name} /></td>
                            <td>{r.name}</td>
                            <td>{r.cuisine}</td>
                            <td>{r.rating}</td>
                            <td>120-/</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Dashboard;