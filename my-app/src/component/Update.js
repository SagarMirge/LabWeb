import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Update() {
  const [searchparam] = useSearchParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const id = searchparam.get("id");
  const navigate = useNavigate();

  useEffect(() => {
    const featchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9595/login/id/${id}`
        );
        setUsername(response.data.username);
        setPassword(response.data.password);
      } catch (error) {
        console.log(error);
      }
    };
    if (id) {
      featchData();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }
    await axios
      .put(`http://localhost:9595/login/update/${id}`, { username, password })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
    navigate("/home");
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center">Update Delivery Status</h1>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              DeliveryPersonName
            </label>
            <input
              type="text"
              class="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
      </div>
    </>
  );
}
