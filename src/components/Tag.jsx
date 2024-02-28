import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Tag() {
  const { gif, loading, fetchRandomGif } = useGif();
 
  const [tag, setTag] = useState("car");

 

  return (
    <div className="w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">
        A Random Gif {tag}
      </h1>
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <img src={gif} alt="Random Gif" />
        )}
      </div>

      {/* Input field to enter tag */}
      <input
        type="text"
        className="w-10/12 text-lg text-center py-2 rounded-lg mb-[20px]"
        onChange={(event)=>setTag(event.target.value)}
        value={tag}
      />

      {/* Button to generate new random gif */}
      <button
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]"
        onClick={()=>fetchRandomGif(tag)}
      >
        Generate
      </button>
    </div>
  );
}



