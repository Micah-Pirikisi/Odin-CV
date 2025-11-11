import React from "react";

function CVPreview({ generalInfo, education, experience }) {
  return (
    <div
      className="cv-preview"
      style={{
        borderTop: "2px solid #000",
        marginTop: "20px",
        paddingTop: "20px",
      }}
    >
      <h1>{generalInfo.name}</h1>
      <p>
        {generalInfo.email} | {generalInfo.phone}
      </p>

      <h2>Education</h2>
      <p>
        {education.degree} at {education.school} ({education.date})
      </p>

      <h2>Experience</h2>
      <p>
        {experience.position} at {experience.company} ({experience.from} -{" "}
        {experience.to})
      </p>
      <p>{experience.tasks}</p>
    </div>
  );
}

export default CVPreview;
