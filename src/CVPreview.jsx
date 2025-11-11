import React from "react";

function CVPreview({ generalInfo, education, experience }) {
  return (
    <>
      <div>
        <h2>Preview:</h2>
        <p>General Info: {generalInfo}</p>
        <p>Education: {education}</p>
        <p>Experience: {experience}</p>
      </div>
    </>
  );
}

export default CVPreview;
