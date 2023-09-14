import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
  const [hostVans, setHostVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setHostVans(data.vans));
  }, []);

  const hostVansLi = hostVans.map((hostVan) => (
    <Link
      to={`/host/vans/${hostVan.id}`}
      key={hostVan.id}
      className="host-van-link-wrapper"
    >
      <div className="host-van-single" key={hostVan.id}>
        <img src={hostVan.imageUrl} alt={`Photo of ${hostVan.name}`} />
        <div className="host-van-info">
          <h3>{hostVan.name}</h3>
          <p>{hostVan.price}</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <section>
      <h1 className="host-vans-title">Your listed Van</h1>
      <div className="host-vans-list">
        {hostVans.length > 0 ? (
          <section>{hostVansLi}</section>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
}
