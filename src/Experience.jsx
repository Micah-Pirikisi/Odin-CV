import React from "react";

function Experience({ experience, setExperience }) {
  return (
    <>
      <input
        type="text"
        placeholder="Experience"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
      />
    </>
  );
}

export default Experience;
