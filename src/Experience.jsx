import React, { useState } from "react";

function Experience({ experience, setExperience }) {
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = () => setIsEditing(false);
  const handleEdit = () => setIsEditing(true);

  return (
    <div className="section">
      <h2>Experience</h2>
      {isEditing ? (
        <>
          <input
            type="text"
            placeholder="Company Name"
            value={experience.company}
            onChange={(e) =>
              setExperience({ ...experience, company: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Position Title"
            value={experience.position}
            onChange={(e) =>
              setExperience({ ...experience, position: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Main Responsibilities"
            value={experience.tasks}
            onChange={(e) =>
              setExperience({ ...experience, tasks: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="From"
            value={experience.from}
            onChange={(e) =>
              setExperience({ ...experience, from: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="To"
            value={experience.to}
            onChange={(e) =>
              setExperience({ ...experience, to: e.target.value })
            }
          />
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <p>
            {experience.position} at {experience.company} ({experience.from} -{" "}
            {experience.to})
          </p>
          <p>{experience.tasks}</p>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
}

export default Experience;
