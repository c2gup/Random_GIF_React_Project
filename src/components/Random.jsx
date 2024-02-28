

import useGif from "../hooks/useGif";
import Spinner from "./Spinner";



export default function Random() {
 

 const {gif, loading, fetchRandomGif} = useGif();

 
  return (
    <div className='w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>A Random Gif</h1>
      <div>
        {
          loading ?(
            <Spinner/>
          ):(
            <img src={gif} alt="Random Gif" />
          )
        }
      </div>

      {/* Button to generate new random gif */}
      <button className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]" onClick = {()=> fetchRandomGif()}>
        Generate
      </button>
    </div>
  );
}

