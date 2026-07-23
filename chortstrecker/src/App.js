import React from "react";
import CohortDetails from "./Components/CohortDetails";

function App() {

  const cohort = {
    id: 101,
    name: "React Cohort",
    status: "ongoing"
  };


  return (
    <div>
      <CohortDetails cohort={cohort} />
    </div>
  );
}

export default App;