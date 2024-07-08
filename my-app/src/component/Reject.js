import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Delete() {
  const [search] = useSearchParams();
  const id = search.get("id");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const data = async () => {
      try {
        var response = await axios.get(`http://localhost:9595/login/id/${id}`);
        setUsername(response.data.username);
        setPassword(response.data.password);
      } catch (error) {
        console.log(error);
      }
    };
    data();
  }, [id]);

  const handelDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:9595/login/delete/${id}`);
      navigate("/home");
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div>
      <h1>Reject/Delete Delivery</h1>
      <p>ID: {id}</p>
      <p>DeliveryPersonId: {username}</p>
      <p>Password: {password}</p>
      <button onClick={() => navigate("/home")}>Cancel</button>
      <button onClick={handelDelete}>Delete</button>
    </div>
  );
}
