import React from "react";
import InterviewTaken from "../InterviewTakenCard";

const InterviewsTaken = async () => {
  return (
    <div>
      {[...new Array(10)].map((i) => (
        <InterviewTaken key={i} />
      ))}
    </div>
  );
};

export default InterviewsTaken;
