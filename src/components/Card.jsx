import React from "react";
import Tag from "./Tag";
import { Link } from "react-router-dom";

function Card(props) {
  const { data } = props;

  let epCard = false;

  if ("episodeNumber" in data) {
    epCard = true;
  }

  let title = data.title.english
    ? data.title.english
    : data.title.userPreferred;

  if (title.length > 30) {
    title = title.slice(0, 27) + "...";
  }

  return (
    <Link to={"/anime/" + data.id} className="link" draggable={false}>
      <div className="relative max-h-[400px] shadow-lg mb-4 mr-4  h-full aspect-[9/16]">
        <img
          className="absolute top-0 left-0 object-center object-cover size-full w-full h-[80%]"
          src={
            data.image ? (
              data.image
            ) : (
              <>
                {data.cover
                  ? data.cover
                  : "https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              </>
            )
          }
          alt=""
        />
        <div className="absolute top-2 left-2 flex flex-col gap-1 justify-center">
          {epCard ? (
            ""
          ) : (
            <>
              <Tag
                text={
                  data.totalEpisodes ? data.totalEpisodes + " eps" : "? eps"
                }
                color="rgba(255,255,255,0.34)"
                size="xs"
              />
              <Tag
                text={data.type ? data.type : ""}
                color="rgba(255,255,255,0.34)"
                size="xs"
              />
            </>
          )}
        </div>
        <div className="h-[20%] p-2 bg-gray-100 w-full absolute bottom-0">
          <h1 className="break-all text-sm lg:text-base">
            {title}
            {epCard ? (
              <>{" || " + data.episodeTitle}</>
            ) : (
              <div className="inline">
                {" "}
                ||{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#FFFF00"
                  className="size-6 inline-block"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
                {data.rating ? data.rating / 10 : ""}
              </div>
            )}
          </h1>
        </div>
        <div className="absolute top-0 flex h-[80%] bg-white bg-opacity-20 opacity-0 backdrop-blur-sm items-center justify-center w-full play">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="size-8"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default Card;
