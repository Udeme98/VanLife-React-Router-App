import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
  const { hostVanDetails } = useOutletContext();
  return (
    <section className="host-van-detail-info">
      <h4>
        Name: <span>{hostVanDetails.name}</span>
      </h4>
      <h4>
        Type: <span>{hostVanDetails.type}</span>
      </h4>
      <h4>
        Description: <span>{hostVanDetails.description}</span>
      </h4>
    </section>
  );
}
