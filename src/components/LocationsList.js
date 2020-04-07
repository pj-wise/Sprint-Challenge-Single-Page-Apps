import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Segment } from "semantic-ui-react";
import LocationCard from "./LocationCard";

const LocationsList = () => {
  const [loc, setLoc] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(res => {
        setLoc(res.data.results);
      })
      .catch(err => {
        console.log("YOU BROKE IT.... again", err);
      });
  }, []);

  return (
    <div className="character-list grid-view">
      {loc.map(place => {
        return <LocationCard place={place} key={place.id} />;
      })}
    </div>
  );
};

export default LocationsList;
