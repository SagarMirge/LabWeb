import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [username, setaUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!username || !password){
        alert("Please fill all fields");
        return;
    }
    await axios.post('http://localhost:9595/login/add',{username ,password}).then(response =>console.log(response))
    .catch(error => console.error(error));
    navigate("/");
  };

  return (
    <div>
      <div className="container">
        <h1 className="text-center">Create User</h1>
        <>
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                DeliveryPersonId
              </label>
              <input
                type="text"
                class="form-control"
                id="username"
                value={username}
                onChange={(e) => setaUsername(e.target.value)}
                placeholder="Enter username"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="text"
                class="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </>
      </div>
    </div>
  );
}
