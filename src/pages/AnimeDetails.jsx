import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { fetchInfo } from "../utils/api";
import image from "../assets/notFound.webp";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import { minsToHrs, showDate } from "../utils/vars";
import Tag from "../components/Tag";
import SectionSlider from '../components/SectionSlider'

function AnimePage(props) {
  const { data } = props;

  const [desc, setDesc] = useState(parse(data.description.slice(0, 150)));

  const [isDescHidden, setIsDescHidden] = useState(true);

  return (
    <>
      <div className="glass bg-gray-800 flex flex-shrink-1 max-lg:flex-wrap">
        <div className="p-12 flex flex-row gap-8 max-md:flex-wrap">
          <div className="max-md:w-full ">
            <img
              className="object-cover object-center max-w-[200px] aspect-[9/12] max-md:mx-auto"
              src={data.image}
              alt=""
            />
          </div>
          <div className=" flex flex-col gap-4">
            <h1 className="text-2xl font-semibold">
              {data.title.english || data.title.userPreferred}
            </h1>
            <div className="flex flex-row">
              {data.totalEpisodes + " eps" || "? eps"} ||{" "}
              {minsToHrs(data.duration)} {data.isAdult ? "|| +18 Rated" : null}
            </div>
            <p id="paragraph" className="text-justify text-sm">
              {desc}
              <button
                className="text-gray-800 inline-block font-bold hover:underline"
                onClick={function () {
                  if (!isDescHidden) {
                    setDesc(parse(String(data.description.slice(0, 150))));
                  } else {
                    setDesc(parse(String(data.description)));
                  }
                  setIsDescHidden(!isDescHidden);
                }}
              >
                {isDescHidden ? "+ more" : "- less"}
              </button>
            </p>
            <Link to={"/watch/" + data.id}>
              <button className="btn-primary">Watch Now</button>
            </Link>
          </div>
        </div>
        <ul className="bg-slate-500 text-white p-8 max-lg:w-full min-w-[300px] flex flex-col gap-2">
          <li className="flex flex-row flex-wrap gap-2">
            <span className="font-bold">Genres : </span>
            {Object.values(data.genres).map((v, i) => {
              return (
                <Tag text={v || ""} color="rgba(255,255,255,0)" size="xs" />
              );
            })}
          </li>
          <li className="flex flex-row flex-wrap gap-2">
            <span className="font-bold">Studios : </span>
            {Object.values(data.studios).map((v, i) => {
              return (
                <span>
                  {v}
                  {i === Object.keys(data.studios).length - 1 ? "" : ","}
                </span>
              );
            })}
          </li>
          <li>
            <span className="font-bold">Status : </span>
            {data.status || "?"}
          </li>

          <li>
            <span className="font-bold">Started At : </span>
            {showDate(data.startDate)}
          </li>

          <li>
            <span className="font-bold">Ended At : </span>
            {showDate(data.endDate)}
          </li>

          <li>
            <span className="font-bold">Rating : </span>
            {data.rating || "?"}
          </li>

          <li>
            <span className="font-bold">Popularity : </span>
            {data.popularity || "?"}
          </li>
        </ul>
      </div>
      <h1 className="font-semibold text-3xl my-4">Characters & their Voice-Actors</h1>
      <div className="flex justify-center items-center">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-cols-fr gap-4">
          {Object.values(data.characters).map((v, i) => {
            if (i<8) {
              let voiceArtist = Object.values(v.voiceActors).filter(
                (artist) => artist.language === "Japanese"
              );
              voiceArtist = voiceArtist[voiceArtist.length - 1];
              return (
                <li className="rounded bg-gray-300 overflow-hidden flex flex-row h-[80px] justify-between items-center p-2">
                  <div className="flex gap-1 flex-row items-center w-[50%]">
                    <img className="aspect-square w-[70px] rounded-[50%] object-cover object-center"  src={v.image} alt="" />
                    <h1>{v.name.userPreferred || "Unknown"}</h1>
                  </div>
                  <div className="flex gap-1 items-center flex-row w-[50%] justify-end text-right">
                    <h1>{voiceArtist.name.userPreferred || "Unknown"}</h1>
                    <img className="aspect-square w-[70px] rounded-[50%] object-cover object-center" src={voiceArtist.image} alt="" />
                  </div>
                </li>
              );
            }
            return "";
          })}
          <li className="rounded bg-gray-300 overflow-hidden flex flex-row h-[80px] text-gray-600 justify-center items-center">+ veiw more</li>
        </ul>
      </div>
      {data.relations ?<SectionSlider title="Related Anime" data={data.relations} /> : <Spinner/>}
      {data.recommendations ? <SectionSlider title="Recommended Anime" data={data.recommendations} /> : <Spinner/>}
    </>
  );
}

function AnimeDetails() {
  const [info, setInfo] = useState(null);

  const params = useParams();

  useEffect(() => {
    fetchInfo(params.id, "zoro", false, setInfo);
  }, [params.id]);

  return (
    <div>
      {info ? (
        <>
          {info.id ? (
            <AnimePage data={info} />
          ) : (
            <div className="w-full h-[90vh] text-5xl font-extrabold flex flex-col items-center justify-center">
              {" "}
              <img className="h-[50%] " src={image} alt="" /> Anime Not Found!!!
            </div>
          )}
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default AnimeDetails;
