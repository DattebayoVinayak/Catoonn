import React from "react";
import Tag from "./Tag";
import { Link } from "react-router-dom";

function CarSlide(props) {
  const { rank, data, key } = props;

  return (
    <Link to={"/anime/" + data.id} className="link" draggable={false}>
      <div className="w-full relative aspect-video md:aspect-[16/4] bg-gray-50">
        <img
          src={data.cover ? data.cover : data.image}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
        />
        <div className="bg-gradient-to-t from-black to-rgba(255,255,255,0.34) h-full w-full absolute top-0 left-0" />
        <div className="flex flex-col-reverse absolute h-full w-full top-0 left-0 p-4">
          <h1 className="font-bold text-white md:text-5xl text-lg">
            {data.title.english ? data.title.english : data.title.userPreferred}
          </h1>
          <ul className="sm:flex hidden flex-row gap-2">
            {data.genres ? (
              Object.values(data.genres).map((v, i) => {
                return (
                  <Tag
                    text={v}
                    color="rgba(255,255,255,0.34)"
                    size="sm"
                    key={key + "genre" + i}
                  />
                );
              })
            ) : (
              <></>
            )}
          </ul>
          <ul className="flex gap-2 flex-col absolute top-4 right-4 justify-start items-end ">
            <li key={key + "group1"}>
              <ul className="flex gap-2">
                <Tag
                  key={key + "group1item1"}
                  text={
                    data.duration ? (
                      <>
                        {data.duration > 60
                          ? Math.trunc(data.duration / 60) +
                            " hrs " +
                            (data.duration % 60) +
                            " mins"
                          : data.duration + " mins"}
                      </>
                    ) : (
                      "? mins"
                    )
                  }
                  color="rgba(255,255,255,0.34)"
                />
                <Tag
                  key={key + "group1item2"}
                  text={
                    data.totalEpisodes ? data.totalEpisodes + " eps" : "? eps"
                  }
                  color="rgba(255,255,255,0.34)"
                />
              </ul>
            </li>
            <li className="flex gap-2" key={key + "group2"}>
              <Tag text={data.type} color="rgba(255,255,255,0.34)" />
              <Tag text={data.status} color="rgba(255,255,255,0.34)" />
            </li>
            <li>
              <div className="glass rounded">
                <Tag
                  text={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#FFFF00"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {data.rating / 10}
                    </>
                  }
                />
              </div>
            </li>
          </ul>
        </div>
        <div className="rounded-[50%] w-fit aspect-square p-2 text-2xl absolute glass text-white top-4 left-4">
          #{rank}
        </div>
      </div>
    </Link>
  );
}

export default CarSlide;
