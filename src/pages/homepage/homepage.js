import "./homepage.css"
import React, { useState, useEffect } from 'react';

const Homepage = ({ setLoginUser }) => {
  //const [nasaData, setNasaData] = useState({});
  //const apiKey = 'hFN8eP8oiV8a28qAziD5O74r0tuypRZ4i7zPEbeu';

  //useEffect(() => {
   // const fetchData = async () => {
    //  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
    //  const data = await response.json();
    //  setNasaData(data);
   // };
    //fetchData();
  //}, []);

  return (
    <div className="homepage">
      <h1>Homepage</h1>
      <p>This will be the landing page</p>
      <div className="button" onClick={() => setLoginUser({})}>Logout</div>
    </div>
  );
};

export default Homepage;
