import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "../Skeleton";
import "./style.css";

function Products() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(1);

  const perPageCount = 4;
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://dummyjson.com/users", {
        params: {
          limit: offset * perPageCount,
        },
      })
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      })
      .finally(() => setLoading(false));
  }, [offset]);

  return (
    <div>
      <h3 className="title">Users</h3>
      <div className="wrapper">
        {users?.map((user) => (
          <div key={user.id} className="card">
            <img src={user.image} alt="" />
            <h3>
              {user.firstName} {user.lastName}
            </h3>
            <p>Age: {user.age}</p>
            <p>Birth Date: {user.birthDate}</p>
            <p>Gender: {user.gender}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <br />
            <br />
            <button className="btn">Follow</button>
          </div>
        ))}
      </div>
      {
        loading && <Skeleton count={perPageCount} />
        // <div className="loading">
        //   <div className="loader"></div>
        // </div>
      }
      <button onClick={() => setOffset((p) => p + 1)} className="btn">
        See more
      </button>
    </div>
  );
}

export default Products;
