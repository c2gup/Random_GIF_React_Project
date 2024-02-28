import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function useGif() {
  const [gif, setGif] = useState();
  const [loading, setLoading] = useState(false);

  const fetchRandomGif = async (tag) => {
    setLoading(true);
    try {
      console.log(tag);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
      const {data} = await axios.get(tag ? `${url}&tag=${tag}`:url);
      const imageSource = data.data.images.downsized_large.url;

      setGif(imageSource);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Set loader to false after handling response
    }
  };

  useEffect(() => {
    fetchRandomGif();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // No dependencies for now, you might add them later

  return { gif, loading, fetchRandomGif };
}

