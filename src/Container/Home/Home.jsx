import React, { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey =
          "b9a7aaee9d0a96db2e91a1844a0b7ff7f860da880823abdbc70d2ba22b4fb574";
        const searchQuery = "tequila";
        const url = `https://serpapi.com/search.json?engine=google_shopping&q=${searchQuery}&api_key=${apiKey}`;

        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.home}>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <p>{JSON.stringify(data, null, 2)}</p>
      )}
    </div>
  );
};

export default Home;
