import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchEpisodes, fetchInfo } from "../utils/api";
import AnimeDetails from "../pages/AnimeDetails";

function AnimeWatch() {
  const { id } = useParams();

  const [eps, setEps] = useState({});

  useEffect(() => {
    fetchEpisodes(id, setEps);
  }, [id]);

  return <AnimeDetails  />;
}

export default AnimeWatch;
