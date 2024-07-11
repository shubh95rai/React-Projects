import { useEffect, useRef, useState } from "react";
import songsData from "./songsData";
import {
  IoPauseCircle,
  IoPlayCircle,
  IoPlaySkipBackCircle,
  IoPlaySkipForwardCircle,
} from "react-icons/io5";

function MusicPlayer() {
  const [songs, setSongs] = useState(songsData);
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songProgress, setSongProgress] = useState(0);

  const audioRef = useRef();
  const seekRef = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSong]);

  function handlePlayPause() {
    setIsPlaying(!isPlaying);
  }

  function handleNext() {
    if (currentSong === songs.length - 1) {
      setCurrentSong(0);
    } else {
      setCurrentSong(currentSong + 1);
    }
  }

  function handlePrev() {
    if (currentSong === 0) {
      setCurrentSong(songs.length - 1);
    } else {
      setCurrentSong(currentSong - 1);
    }
  }

  function handleProgressWidth() {
    // console.log("playing..");
    const width =
      (audioRef.current?.currentTime / audioRef.current?.duration) * 100;

    setSongProgress(width);
  }

  function handleSeekBar(e) {
    audioRef.current.currentTime =
      ((e.clientX - seekRef.current.getBoundingClientRect().left) /
        seekRef.current.getBoundingClientRect().width) *
      audioRef.current.duration;
  }

  return (
    <main className="flex h-screen items-center justify-center bg-neutral-800 font-inter text-neutral-400">
      <section className="flex h-[200px] w-[500px]  flex-col items-center justify-center gap-5 rounded-xl bg-neutral-900 p-10">
        <h1 className="text-lg">{songs[currentSong].title}</h1>
        <audio
          src={songs[currentSong].source}
          ref={audioRef}
          onTimeUpdate={handleProgressWidth}
        ></audio>
        <div
          className="h-2 w-full cursor-pointer rounded-full bg-neutral-700"
          ref={seekRef}
          onClick={handleSeekBar}
        >
          <div
            className="h-2 rounded-full bg-green-700"
            style={{ width: `${songProgress}%` }}
          ></div>
        </div>
        <div className="flex items-center gap-2">
          <IoPlaySkipBackCircle
            className="cursor-pointer text-4xl transition hover:text-neutral-300"
            onClick={handlePrev}
          />
          {isPlaying ? (
            <IoPauseCircle
              className="cursor-pointer text-7xl transition hover:text-neutral-300"
              onClick={handlePlayPause}
            />
          ) : (
            <IoPlayCircle
              className="cursor-pointer text-7xl transition hover:text-neutral-300"
              onClick={handlePlayPause}
            />
          )}
          <IoPlaySkipForwardCircle
            className="cursor-pointer text-4xl transition hover:text-neutral-300"
            onClick={handleNext}
          />
        </div>
      </section>
    </main>
  );
}

export default MusicPlayer;
