import React, { useEffect, useState } from "react";
import SectionSlider from "../components/SectionSlider";
import HeadCarousel from "../components/HeadCarousel";
import { fetchCustom, fetchSearch } from "../utils/api";
import Spinner from "../components/Spinner";

function Home() {
  const [trending, setTrending] = useState(null);
  const [popular, setPopular] = useState(null);
  const [favourites , setFavourites] = useState(null);
  const [scorers , setScorers] = useState(null);
  const [recentsEp,setRecentEp] = useState(null);

  useEffect(() => {
    fetchCustom(setTrending);
    fetchCustom(setPopular,"/popular")
    fetchSearch(setFavourites,{perPage:10,sort:'["FAVOURITES_DESC"]'})
    fetchSearch(setScorers,{perPage:10,sort:'["SCORE_DESC"]'})
    fetchCustom(setRecentEp,"/recent-episodes?provider=zoro")
  }, []);
  

  return (
    <>
      {trending && trending.results ? <HeadCarousel data={trending !== null ? trending : {}} /> : <Spinner/>}
      {popular && popular.results ? <SectionSlider data={popular ? popular.results : {}} title='Most Popular' /> : null}
      {favourites && favourites.results ? <SectionSlider data={favourites ? favourites.results : {}} title='Most Favourite' /> : <Spinner/>}
      {scorers && scorers.results ? <SectionSlider data={scorers ? scorers.results : {}} title='Top Scored' /> : <Spinner/>}
      {recentsEp && recentsEp.results ? <SectionSlider data={recentsEp ? recentsEp.results : {}} title='Recent Episodes' /> : <Spinner/>}
    </>
  );
}

export default Home;
