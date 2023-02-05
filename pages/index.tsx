import MusicBoxContainer from "@/components/audio/MusicBoxContainer";
import SearchContainer from "@/components/search/SearchContainer";
import { useEffect, useRef, useState } from "react";
import PlayList from "@/components/playlist/PlayList";
import Notification from "@/components/notification/Notification";

// https://www.youtube.com/watch?v=Ws-QlpSltr8&ab_channel=ĐenVâuOfficial
export default function Home() {
  const audioRef = useRef<any>();
  const progressBarRef = useRef<any>();
  const rangeRef = useRef<any>();
  const thumbRef = useRef<any>();
  const searchRef = useRef<any>();

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

  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [isNotificationClicked, setIsNotificationClicked] = useState<boolean>(false);
  const [isFlipped, setIsFlipped] = useState<boolean>(true)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const youtubeRegex = /^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.be)\/.+$/
  
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

  const onHandleSubmit = (e: any) => {
    e.preventDefault();
    const currentURL = searchRef.current.value

    if(!currentURL){
      setError("Please fill in search box before searching!");
      setSuccess("")
      setIsNotificationClicked(false);
      setSearchResult(null)
    }
    else if(!youtubeRegex.test(currentURL)){
      setError("Invalid URL!");
      setSuccess("")
      setIsNotificationClicked(false);
      setSearchResult(null)
    } else{
      searchMp3(searchRef.current.value);
    }
  };

  const searchMp3 = (youtubeLink: string) => {
    const url = new URL(youtubeLink);
      console.log(url.pathname.slice(1));
      console.log(url.searchParams.get("v"));

      const getVideoInformation = async () => {
        const fetchApi = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?id=${url.searchParams.get("v") || url.pathname.slice(1)}&key=AIzaSyCy53gb1X9v_9HqEe1tyWeIYU0Y7mx8ioI&part=snippet`
        );

        fetchApi.json().then((res) => {
          setSearchResult(res.items[0]);
        }).catch(err => {
          console.log(err)
        })
      };

      const getMp3Link = async () => {
        const fetchApi = await fetch(
          `https://youtube-mp36.p.rapidapi.com/dl?id=${url.searchParams.get("v") || url.pathname.slice(1)}`,
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
        }).catch(err => {
          console.log(err)
        })

      };
      getVideoInformation();
      getMp3Link();
  }

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
    if (isLoopedOnce) {
      setIsLoopedOnce(false);
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

  const onCloseClick = () => {
    setIsNotificationClicked(true);
  };

  const onFlipDown = () => {
    setIsFlipped(true)
  }
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
      var currentIndex = songs.indexOf(currentSongPlaylist);
      console.log(currentIndex);
      if (isLooped || (!isLooped && !isLoopedOnce)){
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
      } else{
        if (currentTime >= duration) {
          autoPlayNext(songs[currentIndex])
          setCurrentSongPlaylist(songs[currentIndex]);
          setCurrentIndex(currentIndex);
        }
      } 
    }else{
      if(isLooped && currentTime > duration){
        audioRef.current.play()
      } 
    }
  }, [currentAudioLink, currentSongPlaylist, currentTime, duration, isLooped, isLoopedOnce, isPlaylist, songs]);

  const handleLoopButton = () => {
    setIsLooped((state) => !state);
    if (isLoopedOnce) {
      setIsLoopedOnce(false);
    }
  };

  const handleLoopOnceButton = () => {
    setIsLoopedOnce((state) => !state);
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
    <div className="overflow-hidden relative min-h-screen w-full bg-gradient-to-r from-[#2C69D1] to-[#0ABCF9] flex justify-center flex-col md:flex-row items-center">
      <div className="w-full px-4 sm:px-20">
        <SearchContainer
          setIsNotificationClicked={setIsNotificationClicked}
          searchMp3={searchMp3}
          searchRef={searchRef}
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
          onHandleSubmit={(e: any) => onHandleSubmit(e)}
          setError={setError}
          setSuccess={setSuccess}
          setYoutubeLink={setYoutubeLink}
          searchResult={searchResult}
          setCurrentAudioLink={setCurrentAudioLink}
          setSongImage={setSongImage}
          setSongTitle={setSongTitle}
        />
        <div className="md:flex md:gap-20 md:justify-center max-h-[500px] md:h-[500px]">
          <MusicBoxContainer
            onShowPlaylist={() => setIsFlipped(false)}
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
            setIsNotificationClicked={setIsNotificationClicked}
            setSuccess={setSuccess}
            setError={setError}
            isFlipped={isFlipped}
            onFlipDown={onFlipDown}
            songs={songs}
            setSongs={setSongs}
            playAudioFromPlaylist={playAudioFromPlaylist}
          />
        </div>
      </div>

      <Notification
        isNotificationClicked={isNotificationClicked}
        onCloseClick={onCloseClick}
        error={error}
        success={success}
        className={`${error ? "bg-[#FF6464]" : success ? "bg-[#50D890]" : ""}  max-w-[400px] min-h-[60px] fixed bottom-0 left-1/2 -translate-x-1/2 z-50`}
      />
    </div>
  );
}
