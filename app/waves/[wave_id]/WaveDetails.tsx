import { Wave } from "@/app/models";
import { ago } from "@/app/utils";
import { useState, useRef, useContext, useEffect } from "react";
import { WaveContext, WaveContextType } from "@/app/AudioContext";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";


function WaveDetails({
    wave
}: {
  wave: Wave | null;
}): React.ReactElement {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const audioRef = useRef()
  const { currentWave,
    setCurrentWave,
    globalIsPlaying,
    setGlobalIsPlaying,
    play,
    pause } = useContext(WaveContext) as WaveContextType;

  useEffect(() => {
    if (isPlaying) {
      play();
    }
  }, [currentWave]);

  const playPause = () => {
    setIsPlaying(curr => !curr)

    if (!isPlaying) {
      setCurrentWave(wave);
    } else {
      pause();
    }
  }

  return (
    <div>
      <div className="p-4 w-full shadow border rounded-xl bg-white flex flex-col space-y-3">
        <div className="flex items-center space-x-1">
        <img className="w-8 h-8 rounded-full" src={wave.avatar_url}></img>
          <p className="text-sm font-medium truncate text-neutral-700">
            {wave?.username}
          </p>
          <span className="text-neutral-300">•</span>
          <p className="text-sm font-light text-neutral-500">
            {wave && ago(new Date(wave.created_at))}
          </p>
        </div>
        <div className="w-full flex items-center space-x-2 text-sm font-medium text-violet-700">
          <button
            className="flex items-center"
            onClick={playPause}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
            {
              !isPlaying
              ? <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              : <path d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z" />
            }
            </svg>
            <span className="ml-2">
              {isPlaying ? "Pause" : "Listen"}
            </span>
          </button>
          <span className="text-neutral-300">/</span>
          <p className="text-sm font-light">on b/{wave?.board_slug}</p>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={() => setShowTranscript(curr => !curr)}
            className="flex items-center text-sm font-medium text-violet-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clipRule="evenodd" />
            </svg>
            <span className="ml-2">{showTranscript ? 'Hide' : 'Show'} transcript</span>
          </button>

          <div className="flex justify-end space-x-4">
            <div className="flex items-center space-x-1">
              <AiOutlineHeart className="w-5 h-5 text-neutral-300"/>
              <p className="text-sm text-neutral-500">{wave.likes}</p>
            </div>
            <div className="flex items-center space-x-1">
              <FaRegComment className="w-5 h-5 text-neutral-300"/>
              <p className="text-sm text-neutral-500">{wave.comment_count}</p>
            </div>
          </div>
        </div>
        {
          showTranscript && <div>
            <p className="text-sm">{wave?.transcript}</p>
          </div>
        }
      </div>
    </div>
  );
}

export default WaveDetails;
