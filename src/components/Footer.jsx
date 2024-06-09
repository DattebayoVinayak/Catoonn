import React from "react";
import Logo from "./Logo";
import * as vars from "../utils/vars";
import { Link } from "react-router-dom";
import { capitalize } from "lodash";

function Footer() {
  return (
    <div className="w-full bg-slate-300 flex justify-center m-0">
      <footer className="capitalize md:container md:px-1 md:mx-auto px-4 flex flex-col gap-6 py-4 text-slate-600 w-full">
        <Logo />

        <div className=" grid grid-cols-2 lg:grid-cols-4 gap-2 justify-items-center text-sm">
          <ul className="flex max-lg:items-center flex-col">
            <li key={"season-1"}>
              <h1 className="font-bold text-base">season</h1>
            </li>
            {vars.seasons.map((v, i) => {
              return (
                <Link to={"/exclusive/season/" + v} key={"season" + i}>
                  {capitalize(v)}
                </Link>
              );
            })}
          </ul>
          <ul className="flex max-lg:items-center flex-col">
            <li key={"type-1"}>
              <h1 className="font-bold text-base">type</h1>
            </li>
            {vars.formats.map((v, i) => {
              return (
                <Link to={"/exclusive/type/" + v} key={"type" + i}>
                  {capitalize(v)}
                </Link>
              );
            })}
          </ul>
          <ul className="flex max-lg:items-center flex-col">
            <li key={"genre-1"}>
              <h1 className="font-bold text-base">genre</h1>
            </li>
            {vars.genres.map((v, i) => {
              return (
                <Link to={"/exclusive/genre/" + v} key={"genre" + i}>
                  {capitalize(v)}
                </Link>
              );
            })}
          </ul>
          <ul className="flex max-lg:items-center flex-col">
            <li key={"fromat-1"}>
              <h1 className="font-bold text-base">status</h1>
            </li>
            {vars.status.map((v, i) => {
              return (
                <Link to={"/exclusive/status/" + v} key={"status" + i}>
                  {capitalize(v)}
                </Link>
              );
            })}
          </ul>
        </div>
        <h1 className="text-base font-bold text-center w-full">
          Catoon © 2027
        </h1>
      </footer>
    </div>
  );
}

export default Footer;
