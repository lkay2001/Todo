"use client"; // this is a client component 👈🏽
import React from "react";

import { FetchingData } from "component/components/fetchingData/FetchingData";

const Home: React.FC = () => {
  const fetchData = async () => {
    const response = await fetch("/api/hello");
    const data = await response.json();
    console.log(data);
  };
  const saveData = async () => {
    const response = await fetch("/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: "Lorenzo", complete: "lo@lorenzozar.com" }),
    });
    const data = await response.json();
    console.log(data);
  };

  // const fetchData = async () => {
  //   const response = await fetch("/api/hello");
  //   const data = await response.json();
  //   console.log("data", data);
  // };
  return (
    <>
      <button onClick={fetchData}>Fetch</button>
      <button onClick={saveData}>Save</button>

      {/*<Headline />*/}
      {/*<OptionManager />*/}
      {/*<FetchingData />*/}
    </>
  );
};

export default Home;
