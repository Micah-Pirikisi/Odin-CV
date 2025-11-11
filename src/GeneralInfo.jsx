import React, { useState } from "react";

function GeneralInfo({ generalInfo, setGeneralInfo }) {
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = () => setIsEditing(false);
  const handleEdit = () => setIsEditing(true);

  return (
    <div className="section">
      <h2>General Information</h2>
      {isEditing ? (
        <>
          <input
            type="text"
            placeholder="Full Name"
            value={generalInfo.name}
            onChange={(e) =>
              setGeneralInfo({ ...generalInfo, name: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Email"
            value={generalInfo.email}
            onChange={(e) =>
              setGeneralInfo({ ...generalInfo, email: e.target.value })
            }
          />
          <input
            type="tel"
            placeholder="Phone"
            value={generalInfo.phone}
            onChange={(e) =>
              setGeneralInfo({ ...generalInfo, phone: e.target.value })
            }
          />
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <p>Name: {generalInfo.name}</p>
          <p>Email: {generalInfo.email}</p>
          <p>Phone: {generalInfo.phone}</p>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
}

export default GeneralInfo;
