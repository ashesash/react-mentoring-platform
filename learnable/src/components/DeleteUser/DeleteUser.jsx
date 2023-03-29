import React from 'react';
import { useNavigate } from "react-router-dom";
import "./DeleteUser.css";

function DeleteUser({id}) {
    const navigate = useNavigate();

    const handleDelete = (event) => {
        event.preventDefault();

        deleteUser().then((response) => {
            window.localStorage.removeItem("token");
            navigate("/login");
        });
    };

const deleteUser = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}users/${id}`, {
        method: "delete",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response.json();
};



    return (
        <div>
            <h3>Delete account</h3>
            <p>Are you sure you want to delete your account? This is irreversible.</p>
            <button type="submit" onClick={handleDelete} className="btn-delete">Delete</button>
        </div>
    );
};

export default DeleteUser;