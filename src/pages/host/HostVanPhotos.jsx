import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const { hostVanDetails } = useOutletContext();
  return (
    <img src={hostVanDetails.imageUrl} className="host-van-detail-image" />
  );
}
