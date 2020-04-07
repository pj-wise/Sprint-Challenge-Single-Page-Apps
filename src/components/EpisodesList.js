import React, { useState, useEffect } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

const EpisodesList = () => {
  const [epi, setEpi] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/`)
      .then(res => {
        setEpi(res.data.results);
      })
      .catch(err => {
        console.log("Here we go again....", err);
      });
  }, []);

  return (
    <div className="character-list grid-view">
      {epi.map(ep => {
        return <EpisodeCard ep={ep} key={ep.id} />;
      })}
    </div>
  );
};

export default EpisodesList;
