import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "../Skeleton";
import "./style.css";

function Products() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(1);
  const [hasMore, setHasMore] = useState(true);

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
        if (res.data.length > 0) {
        } else {
          setHasMore(false);
        }
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
            <div className="text-wrap">
              <h2 className="font-semibold text-lg">
                {user.firstName} {user.lastName}
              </h2>
              <p>
                <b>Age:</b> {user.age}
              </p>
              <p>
                <b>Gender:</b> {user.gender}
              </p>
              <p>
                <b>Birth Date:</b> {user.birthDate}
              </p>
              <p>
                <b>Phone:</b> {user.phone}
              </p>
              <p>{user.email}</p>
              <br />
              <button className="btn">Follow</button>
            </div>
          </div>
        ))}
      </div>
      {
        loading && hasMore && <Skeleton count={perPageCount} />
        // <div className="loading">
        //   <div className="loader"></div>
        // </div>
      }
      {/* {
        !hasMore(
          
        )
      } */}
      <button onClick={() => setOffset((p) => p + 1)} className="btn btn-see">
        See more
      </button>
    </div>
  );
}

export default Products;
