import React from "react";
import Title from "../components/Title";
import Education from "../components/Education";

function MyEducation() {
  return (
    <div className="AboutPage">
      <Title title="Education" span="Education" />
      <Education
        date={"2019-now"}
        title={"IT architect"}
        school={"1337 School"}
      />
      <Education
        date={"2018-2019"}
        title={"Computer Engineering "}
        school={"University EST FES"}
      />
      <Education
        date={"2018"}
        title={"Bac Sience Math A "}
        school={"Lycée Technique FES"}
      />
    </div>
  );
}

export default MyEducation;
