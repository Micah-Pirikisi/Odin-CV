import React from "react";

function GeneralInfo({ generalInfo, setGeneralInfo }) {
  return (
    <>
      <h1>My Info</h1>
      <input
        type="text"
        placeholder="General Info"
        value={generalInfo}
        onChange={(e) => setGeneralInfo(e.target.value)}
      />
    </>
  );
}

export default GeneralInfo;
