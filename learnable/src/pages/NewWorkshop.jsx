import React from 'react'
import CreateWorkshopForm from '../components/CreateWorkshopForm/CreateWorkshopForm';

function NewWorkshopPage() {
    const token = window.localStorage.getItem("token")
    return (token !== null && token !== undefined) ? <CreateWorkshopForm /> : <p>User does not exist</p>
};

export default NewWorkshopPage;