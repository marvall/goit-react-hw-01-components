import React from "react";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statictics";
import data from "./data/user.json";
import statisticalData from "./data/statistical-data.json";

function App() {
  return (
    <>
      <Profile state={data} />
      <Statistics stats={statisticalData} title="Upload stats" />
      <Statistics stats={statisticalData} />;
    </>
  );
}

export default App;
