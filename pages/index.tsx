import MusicBoxContainer from "@/components/audio/MusicBoxContainer";
import SearchContainer from "@/components/search/SearchContainer";
import { useEffect, useRef, useState } from "react";
import PlayList from "@/components/playlist/PlayList";

// https://www.youtube.com/watch?v=Ws-QlpSltr8&ab_channel=ĐenVâuOfficial
export default function Home() {
  const audioRef = useRef<any>();
  const progressBarRef = useRef<any>();

  const [togglePlayButton, setTogglePlayButton] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(NaN);

  const [currentAudioLink, setCurrentAudioLink] = useState<string>("");
  const [youtubeLink, setYoutubeLink] = useState<string>("");
  const [searchResult, setSearchResult] = useState<any>();

  const [songImage, setSongImage] = useState<string>("");
  const [songTitle, setSongTitle] = useState<string>("");

  const [searchAudioLink, setSearchLinkAudio] = useState<string>("");

  const [songs, setSongs] = useState<any[]>([]);
  const [percentage, setPercentage] = useState<number>(0);

  const [position, setPosition] = useState<number>(0);
  const [marginLeft, setMarginLeft] = useState<number>(0);
  const [progressBarWidth, setProgressBarWidth] = useState<number>(0);

  const [volumeMute, setVolumeMute] = useState<boolean>(false);
  const [volumeLevel, setVolumeLevel] = useState<number>(50);

  const [currentSongPlaylist, setCurrentSongPlaylist] = useState<any>();
  const [isPlaylist, setIsPlaylist] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLooped, setIsLooped] = useState<boolean>(false);
  const [isLoopedOnce, setIsLoopedOnce] = useState<boolean>(false);

  const rangeRef = useRef<any>();
  const thumbRef = useRef<any>();

  const handleMuteClick = () => {
    setVolumeMute((state) => !state);
  };

  const onChange = (e: any) => {
    audioRef.current.currentTime =
      (audioRef.current.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  };

  const getCurrentDuration = (e: any) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    const time = e.currentTarget.currentTime;

    setPercentage(+percent);
    setCurrentTime(time);
  };

  const calcTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const handleOnClickPlayButton = () => {
    const prevValue = togglePlayButton;
    setTogglePlayButton((state) => !state);

    if (!prevValue && currentAudioLink) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const onChangeLinkYoutube = (e: any) => {
    setYoutubeLink(e.target.value);
  };

  const searchVideoMp3 = () => {
    const url = new URL(youtubeLink);
    console.log(url.searchParams.get("v"));
    const getVideoInformation = async () => {
      const fetchApi = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?id=${url.searchParams.get(
          "v"
        )}&key=AIzaSyCy53gb1X9v_9HqEe1tyWeIYU0Y7mx8ioI&part=snippet`
      );

      fetchApi.json().then((res) => {
        setSearchResult(res.items[0]);
      });
    };

    const getMp3Link = async () => {
      const fetchApi = await fetch(
        `https://youtube-mp36.p.rapidapi.com/dl?id=${url.searchParams.get(
          "v"
        )}`,
        {
          headers: {
            "X-RapidAPI-Key":
              "f67a6ec0ffmsh5fbe2152f4cb7f7p1151adjsnc93ad2e77038",
            "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
          },
        }
      );

      fetchApi.json().then((res) => {
        setSearchLinkAudio(res.link);
        console.log(res.link);
      });
    };
    getVideoInformation();
    getMp3Link();
  };

  const playNextSong = () => {
    if (songs.length > 0) {
      if (currentSongPlaylist.audioLink === currentAudioLink) {
        var currentIndex = songs.indexOf(currentSongPlaylist);
        console.log(currentIndex);
        if (currentIndex + 1 >= songs.length) {
          currentIndex = 0;
          setCurrentIndex(currentIndex);
          playAudioFromPlaylist(songs[currentIndex]);
          setCurrentSongPlaylist(songs[currentIndex]);
        } else {
          setCurrentIndex(currentIndex);
          playAudioFromPlaylist(songs[currentIndex + 1]);
          setCurrentSongPlaylist(songs[currentIndex + 1]);
        }
      }
    }
    if (isLoopedOnce){
      setIsLoopedOnce(false)
    }
  };

  const playPrevSong = () => {
    if (songs.length > 0) {
      if (currentSongPlaylist.audioLink === currentAudioLink) {
        var currentIndex = songs.indexOf(currentSongPlaylist);
        console.log(currentIndex);
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex);
          playAudioFromPlaylist(songs[currentIndex - 1]);
          setCurrentSongPlaylist(songs[currentIndex - 1]);
        } else {
          currentIndex = songs.length - 1;
          setCurrentIndex(currentIndex);
          playAudioFromPlaylist(songs[currentIndex]);
          setCurrentSongPlaylist(songs[currentIndex]);
        }
      }
    }
  };

  const playAudioFromPlaylist = (song: any) => {
    console.log(songs);
    setCurrentTime(0);
    setDuration(NaN);
    setPosition(0);
    setMarginLeft(0);
    setProgressBarWidth(0);
    setPercentage(0);
    setCurrentAudioLink(song.audioLink);
    setSongImage(song.searchResult.snippet.thumbnails.high.url);
    setSongTitle(song.searchResult.snippet.title);
    setCurrentSongPlaylist(song);
    setIsPlaylist(true);
  };

  useEffect(() => {
    const autoPlayNext = (song: any) => {
      setCurrentTime(0);
      setDuration(NaN);
      setPosition(0);
      setMarginLeft(0);
      setProgressBarWidth(0);
      setPercentage(0);
      setCurrentAudioLink(song.audioLink);
      setSongImage(song.searchResult.snippet.thumbnails.high.url);
      setSongTitle(song.searchResult.snippet.title);
      setCurrentSongPlaylist(song);
    };
    if (isPlaylist && currentSongPlaylist.audioLink === currentAudioLink) {
      if (isLooped) {
        var currentIndex = songs.indexOf(currentSongPlaylist);
        console.log(currentIndex);
        if (currentTime >= duration) {
          if (currentIndex + 1 >= songs.length) {
            setCurrentIndex(currentIndex + 1);
            currentIndex = 0;
            autoPlayNext(songs[currentIndex]);
          } else {
            autoPlayNext(songs[currentIndex + 1]);
            setCurrentSongPlaylist(songs[currentIndex + 1]);
            setCurrentIndex(currentIndex + 1);
          }
        }
      }
    }
  }, [
    currentAudioLink,
    currentSongPlaylist,
    currentTime,
    duration,
    isLooped,
    isPlaylist,
    songs,
  ]);

  const handleLoopButton = () => {
    setIsLooped((state) => !state);
    if (isLoopedOnce) {
      setIsLoopedOnce(false);
    }
  };

  const handleLoopOnceButton = () => {
    setIsLoopedOnce((state) => !state);
    // const currentLoopType = isLoopedOnce
    if (isLooped) {
      setIsLooped(false);
    }
  };

  useEffect(() => {
    localStorage.getItem("songs") !== null
      ? setSongs(JSON.parse(localStorage.getItem("songs") || ""))
      : setSongs([]);
  }, []);

  useEffect(() => {
    audioRef.current.volume = volumeLevel / 100;
  }, [volumeLevel]);

  useEffect(() => {
    if (currentAudioLink) {
      if (isPlaylist) {
        if (isLoopedOnce || isLooped || currentIndex < songs.length) {
          setTogglePlayButton(true);
          audioRef.current.play();
        }
      } else {
        setTogglePlayButton(true);
        audioRef.current.play();
      }
    } else {
      setTogglePlayButton(false);
      audioRef.current.pause();
    }
  }, [
    currentAudioLink,
    currentIndex,
    isLooped,
    isLoopedOnce,
    isPlaylist,
    songs.length,
  ]);

  useEffect(() => {
    if (currentTime >= duration) {
      if (!isLooped && !isLoopedOnce) {
        setTogglePlayButton(false);
      } else {
        setTogglePlayButton(true);
      }
      setCurrentTime(0);
      setPosition(0);
      setMarginLeft(0);
      setProgressBarWidth(0);
      setPercentage(0);
    }
  }, [currentTime, duration, isLooped, isLoopedOnce]);

  return (
    <div className="relative h-screen w-full bg-gradient-to-r from-[#2C69D1] to-[#0ABCF9]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full px-20">
        <SearchContainer
          songs={songs}
          setCurrentTime={setCurrentTime}
          setDuration={setDuration}
          setPercentage={setPercentage}
          setPosition={setPosition}
          setMarginLeft={setMarginLeft}
          setProgressBarWidth={setProgressBarWidth}
          audioRef={audioRef}
          progressBarRef={progressBarRef}
          handleOnClickPlayButton={() => handleOnClickPlayButton()}
          setSongs={setSongs}
          searchAudioLink={searchAudioLink}
          onSearchClick={() => searchVideoMp3()}
          onChange={(e: any) => onChangeLinkYoutube(e)}
          searchResult={searchResult}
          setCurrentAudioLink={setCurrentAudioLink}
          setSongImage={setSongImage}
          setSongTitle={setSongTitle}
        />
        <div className="flex gap-20 justify-center h-[500px]">
          <MusicBoxContainer
            isLoopedOnce={isLoopedOnce}
            isLooped={isLooped}
            handleLoopOnceButton={handleLoopOnceButton}
            loopFunc={handleLoopButton}
            nextFunc={playNextSong}
            prevFunc={playPrevSong}
            volumeLevel={volumeLevel}
            setVolumeLevel={setVolumeLevel}
            volumeMute={volumeMute}
            handleMuteClick={handleMuteClick}
            rangeRef={rangeRef}
            thumbRef={thumbRef}
            setPosition={setPosition}
            setMarginLeft={setMarginLeft}
            setProgressBarWidth={setProgressBarWidth}
            position={position}
            progressBarWidth={progressBarWidth}
            marginLeft={marginLeft}
            getCurrentDuration={getCurrentDuration}
            percentage={percentage}
            handleOnClickPlayButton={() => handleOnClickPlayButton()}
            onChange={onChange}
            start={calcTime(currentTime)}
            end={calcTime(duration)}
            togglePlayButton={togglePlayButton}
            progressBarRef={progressBarRef}
            audioRef={audioRef}
            audioLink={currentAudioLink}
            songBanner={songImage}
            title={songTitle}
            setDuration={setDuration}
            setCurrentTime={setCurrentTime}
          />
          <PlayList
            songs={songs}
            setSongs={setSongs}
            playAudioFromPlaylist={playAudioFromPlaylist}
          />
        </div>
      </div>
    </div>
  );
}
