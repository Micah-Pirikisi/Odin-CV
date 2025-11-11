import React from "react";

function Education({ education, setEducation }) {
  return (
    <>
      <input
        type="text"
        placeholder="Education"
        value={education}
        onChange={(e) => setEducation(e.target.value)}
      />
    </>
  );
}

export default Education;
