import React, { useState } from "react";

function Education({ education, setEducation }) {
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = () => setIsEditing(false);
  const handleEdit = () => setIsEditing(true);

  return (
    <div className="section">
      <h2>Education</h2>
      {isEditing ? (
        <>
          <input
            type="text"
            placeholder="School Name"
            value={education.school}
            onChange={(e) =>
              setEducation({ ...education, school: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Degree / Title"
            value={education.degree}
            onChange={(e) =>
              setEducation({ ...education, degree: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Date"
            value={education.date}
            onChange={(e) =>
              setEducation({ ...education, date: e.target.value })
            }
          />
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <p>
            {education.degree} at {education.school} ({education.date})
          </p>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
}

export default Education;
