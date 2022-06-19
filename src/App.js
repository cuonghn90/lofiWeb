import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { BiFullscreen } from 'react-icons/bi'
import { useRef, useEffect } from 'react';

import ToggleTheme from './components/toggleTheme/ToggleTheme';
import Background from './components/Background/Background';
import {
  toggleRainy, toggleKeyBoard, toggleTraffic,
} from './store/Action'
import Option from './components/Option/Option';
import TableCustom from './components/TableCustom/TableCustomDetail/TableCustom';
import DetailCustom from './components/TableCustom/DetailCustom/DetailCustom';
import DetailCustomPlayList from './components/TableCustom/DetailCustomPlayList/DetailCustomPlayList';
import CustomBackground from './components/TableCustom/CustomBackground/CustomBackground';
import Productity from './components/TableCustom/Productity/Productity';
import ManupulationMusic from './components/TableCustom/ManupulationMusic/ManupulationMusic';
import { listSongs } from './constantSong';


function App() {
  const dispatch = useDispatch()

  const idOptionCustom = useSelector(state => state.idOptionCustom)
  const dbClickOption = useSelector(state => state.dbClickOption)
  const currentSong = useSelector(state => state.currentSong)

  const rainy = useSelector(state => state.rainy)
  const keyBoard = useSelector(state => state.keyBoard)
  const traffic = useSelector(state => state.traffic)
  const isPlaying = useSelector(state => state.isPlaying)

  const volumeTraffic = useSelector(state => state.volumeTraffic)
  const volumeRain = useSelector(state => state.volumeRain)
  const volumeKeyboard = useSelector(state => state.volumeKeyboard)
  const volume = useSelector(state => state.volume)

  const audioRef = useRef()
  const audioRain = useRef()
  const audioTraffic = useRef()
  const audioKeyboard = useRef()

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause()
  }, [isPlaying])
  useEffect(() => {
    audioRef.current.src = listSongs[currentSong]
    isPlaying ? audioRef.current.play() : audioRef.current.pause()
  }, [currentSong])
  useEffect(() => {
    rainy ? audioRain.current.play() : audioRain.current.pause()
  }, [rainy])
  useEffect(() => {
    keyBoard ? audioKeyboard.current.play() : audioKeyboard.current.pause()
  }, [keyBoard])
  useEffect(() => {
    traffic ? audioTraffic.current.play() : audioTraffic.current.pause()
  }, [traffic])

  useEffect(() => {
    audioRef.current.volume = (volume / 100).toFixed(1)
  }, [volume])
  useEffect(() => {
    audioRain.current.volume = !!volumeTraffic ? (volumeTraffic / 100).toFixed(1) : 0.5
  }, [volumeTraffic])
  useEffect(() => {
    audioKeyboard.current.volume = !!volumeRain ? (volumeRain / 100).toFixed(1) : 0.5
  }, [volumeRain])
  useEffect(() => {
    audioTraffic.current.volume = !!volumeKeyboard ? (volumeKeyboard / 100).toFixed(1) : 0.5
  }, [volumeKeyboard])


  return (
    <div className="lofi">
      <div className='wrapper'>
        <Option top={15} left={22} text={"City rain"} showInput toggleType={toggleRainy} />
        <Option top={78} left={88} text={"Keyboard"} showInput={false} toggleType={toggleKeyBoard} />
        <Option top={15} left={40} text={"City Traffic"} showInput toggleType={toggleTraffic} />
        <div className='fullWidth'>
          <BiFullscreen />
        </div>
        <ToggleTheme />
        <TableCustom />
        {
          idOptionCustom == 0 && !dbClickOption ? <DetailCustom /> : ''
        }
        {
          idOptionCustom == 1 && !dbClickOption ? <DetailCustomPlayList /> : ''
        }
        {
          idOptionCustom == 2 && !dbClickOption ? <CustomBackground /> : ''
        }
        {
          idOptionCustom == 3 && !dbClickOption ? <Productity /> : ''
        }
        <Background />
        <ManupulationMusic />
        <div className='audio'>
          <audio ref={audioRef} src='/sound/song/chill_16.mp3' loop ></audio>
          <audio ref={audioRain} src='/sound/summer_storm.mp3' loop ></audio>
          <audio ref={audioTraffic} src='/sound/city_traffic.mp3' loop ></audio>
          <audio ref={audioKeyboard} src='/sound/keyboard.mp3' loop ></audio>
        </div>
        <div className='musicBy'>Music by - lofi.co 2021</div>
      </div>
    </div>
  );
}

export default App;