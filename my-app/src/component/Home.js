import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [data, setData] = useState([]);
  const navigate =  useNavigate();

  useEffect(() => {
    const fetchLoginData = async () => {
      try {
        const response = await axios.get("http://localhost:9595/login/all");
        setData(response.data);
      } catch (error) {
        console.log("Error : ", error);
      }
    };
    fetchLoginData();
  }, []);

  const handleCreate = async () => {
    navigate(`/create`)
  };

  const handleUpdate = async (id) => {
    console.log(`UpdaTE button clicked for id: ${id}`);
    navigate(`/update?id=${id}`)
  };

  const handleView = async (id) =>{
    console.log(`View button clicked for id: ${id}`);
    navigate(`/view?id=${id}`)
  }
  
  const handleDelete = async (id) => {
    console.log(`Delete button clicked for id: ${id}`);
    navigate(`/delete?id=${id}`)
  }

  return (
    <div>
      <div className="container mt-5">
      <h1 className='text-center mb-5'><button className="btn btn-primary" onClick={() => handleCreate()}>Add</button>DeliveryHome</h1>
        <table className="table text-center">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">DeliveryPersonId</th>
              <th scope="col">Password</th>
              <th scope="col">Operation</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.username}</td>
                <td>{item.password}</td>
                <td>
                    <button className="btn btn-primary" onClick={() => handleUpdate(item._id)}>Update</button>
                    <button className="btn btn-primary" onClick={() => handleView(item._id)}>View</button>
                    <button className="btn btn-danger" onClick={() => handleDelete(item._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
