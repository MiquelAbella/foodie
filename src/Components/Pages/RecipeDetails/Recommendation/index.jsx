import React from "react";

export const Recommendation = ({ data }) => {
  if (!data.winePairing.pairingText.length) return;
  return (
    <div className="flex items-center justify-center pb-20">
      <p className="mx-4 md:mx-0 md:w-4/5 text-gray-900 text-lg bg-green-300 p-12">
        {data.winePairing.pairingText}
      </p>
    </div>
  );
};
