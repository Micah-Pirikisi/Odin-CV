import React, { useState } from "react";
import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import Experience from "./Experience";
import CVPreview from "./CVPreview";

function App() {
  const [generalInfo, setGeneralInfo] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");

  return (
    <>
      <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      <Education education={education} setEducation={setEducation} />
      <Experience experience={experience} setExperience={setExperience} />
      <CVPreview
        generalInfo={generalInfo}
        education={education}
        experience={experience}
      />
    </>
  );
}

export default App;
