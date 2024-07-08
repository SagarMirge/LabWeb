import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function View() {
    const [search] = useSearchParams();
    const navigate = useNavigate();
    const [username ,setUsername] = useState("");
    const [password , setPassword] = useState("");
    const id = search.get('id')

    useEffect(()=>{
        const featchData = async ()=>{
            try {
                var response  = await axios.get(`http://localhost:9595/login/id/${id}`);
                setUsername(response.data.username);
                setPassword(response.data.password);
            } catch (error) {
                console.log(error);
            }
        }
        featchData();
    },[id])

  return (
    <>
        <div className="container mt-5">
            <div className="row">
                <h2>DeliveryPersonId : {username}</h2>
                <h2>Password : {password}</h2>
                <p>
                <button className="btn btn-primary" onClick={() =>  navigate(`/update?id=${id}`)}>Update</button>
                <button className="btn btn-primary" onClick={() =>  navigate(`/delete?id=${id}`)}>Delete</button>
                </p>
            </div>
        </div>
    </>
  )
}
