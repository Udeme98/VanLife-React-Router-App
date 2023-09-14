import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

export default function HostVanDetail() {
  const [hostVanDetails, setHostVandetails] = useState(null);
  const params = useParams();

  const activeLink = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setHostVandetails(data.vans));
  }, [params.id]);

  return (
    <div>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      {hostVanDetails ? (
        <div className="host-van-detail-container">
          <div className="host-van-detail">
            <img src={hostVanDetails.imageUrl} width={150} />
            <div className="host-van-detail-info">
              <i className={`van-type van-type-${hostVanDetails.type}`}>
                {hostVanDetails.type}
              </i>
              <h3>{hostVanDetails.name}</h3>
              <p>${hostVanDetails.price}/day</p>
            </div>
          </div>
          <nav className="host-van-detail-nav">
            <NavLink
              to="."
              end
              style={({ isActive }) => (isActive ? activeLink : null)}
            >
              Details
            </NavLink>
            <NavLink
              to="pricing"
              style={({ isActive }) => (isActive ? activeLink : null)}
            >
              Pricing
            </NavLink>
            <NavLink
              to="photo"
              style={({ isActive }) => (isActive ? activeLink : null)}
            >
              Photos
            </NavLink>
          </nav>
          <Outlet context={{ hostVanDetails }} />
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}
