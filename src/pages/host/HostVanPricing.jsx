import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const { hostVanDetails } = useOutletContext();
  return (
    <h3 className="host-van-price">
      ${hostVanDetails.price}
      <span>/day</span>
    </h3>
  );
}
