// const url =
//   "https://serpapi.com/search.json?engine=google_shopping&q=Macbook+M3&api_keyb9a7aaee9d0a96db2e91a1844a0b7ff7f860da880823abdbc70d2ba22b4fb574";

// export const fetchData = async (url) => {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error.message);
//     throw error;
//   }
// };

// export const { getJson } = serpapi;

// getJson(
//   {
//     engine: "google_shopping",
//     q: "Sierra Tequila Reposado",
//     location: "Greater Western Sydney, New South Wales, Australia",
//     hl: "en",
//     gl: "au",
//     api_key: "b9a7aaee9d0a96db2e91a1844a0b7ff7f860da880823abdbc70d2ba22b4fb574",
//   },
//   (json) => {
//     console.log(json["shopping_results"]);
//   }
// );

import axios from "axios";
// const apiKey =
//   "b9a7aaee9d0a96db2e91a1844a0b7ff7f860da880823abdbc70d2ba22b4fb574";
// const searchQuery = `tequila`;
// const url = `https://serpapi.com/search.json?engine=google_shopping&q=${searchQuery}&api_key=${apiKey}&num=1`;

// axios
//   .get(url)
//   .then((response) => {
//     if (response.status === 200) {
//       const data = response.data;
//       console.log(data);
//     } else {
//       console.log("Error occurred:", response.status);
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//   });

export const fetchData = async (searchTerm) => {
  try {
    const apiKey =
      "b9a7aaee9d0a96db2e91a1844a0b7ff7f860da880823abdbc70d2ba22b4fb574";
    const url = `https://serpapi.com/search.json?engine=google_shopping&q=${searchTerm}&api_key=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};
