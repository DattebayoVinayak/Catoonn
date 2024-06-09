import axios from "axios";

const baseUrl = "https://catoonapi.vercel.app/meta/anilist";

export const fetchSearch = async (
  callback,
  params = {
    type: '["ANIME"]',
  }
) => {
  let url = baseUrl + "/advanced-search";
  try {
    const response = await axios.get(url, {
      params: {
        ...params,
      },
    });
    callback(response.data);
  } catch (error) {
    console.error("Fetch data error:", error);
  }
};

export const fetchCustom = async (callback, endpoint = "/trending") => {
  let url = baseUrl + endpoint;
  try {
    const response = await axios.get(url);
    callback(response.data);
  } catch (error) {
    console.error("Fetch data error:", error);
  }
};

export const fetchInfo = async (
  id,
  provider = "zoro",
  ep = false,
  callback
) => {
  let endpoint;

  if (ep) {
    endpoint = "/info/";
  } else {
    endpoint = "/data/";
  }

  let url = baseUrl + endpoint + id;

  try {
    const response = await axios.get(url, {
      params: {
        provider: provider,
      },
    });
    callback(response.data);
  } catch (error) {
    callback(error.response);
  }
};


export const fetchEpisodes = async (id,callback,provider="gogoanime") => {
  let url = baseUrl + "/watch/" + id;
  try {
    const response = await axios.get(url,{
      variables:{
        provider:provider
      }
    });
    callback(response.data);
  } catch (error) {
    console.error("Fetch data error:", error);
  }
}
