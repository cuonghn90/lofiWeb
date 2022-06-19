import React from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { IoMdMoon } from 'react-icons/io'
import { GiTrumpet } from 'react-icons/gi'
import { GiCoffeeCup } from 'react-icons/gi'
import { BiTrafficCone } from 'react-icons/bi'
import { MdOutlineKeyboardAlt } from 'react-icons/md'
import { BsUmbrellaFill } from 'react-icons/bs'
import { IoIosVolumeMute, IoIosVolumeLow } from 'react-icons/io'


import {
    changeTypeMood,
    changeVolumeTraffic,
    changeVolumeRain,
    changeVolumeKeyboard,
    changeVolume,
    setTrueKeyboard,
    setTrueTraffic,
    setTrueRain
} from '../../../store/Action'
import './DetailCustom.css'

export default function DetailCustom() {

    const dispatch = useDispatch()
    const typeMood = useSelector(state => state.typeMood)

    const VolumeRef = useRef()
    const TrafficRef = useRef()
    const RainRef = useRef()
    const KeyboardRef = useRef()

    const CursorRef = useRef()
    const CursorTrafficRef = useRef()
    const CursorRainRef = useRef()
    const CursorKeyboardRef = useRef()

    const IconTrafficRef = useRef()
    const IconRainRef = useRef()
    const IconKeyboardRef = useRef()

    const handleChangeMood = (text) => {
        dispatch(changeTypeMood(text))
    }
    const handleGetPosition = (e) => {
        const percentWidth = Math.floor((e.clientX - VolumeRef.current.getBoundingClientRect().x) / VolumeRef.current.getBoundingClientRect().width * 100)

        var styleElem = document.head.appendChild(document.createElement("style"));
        styleElem.innerHTML = `.rangeVolume:before {width: ${percentWidth}%}`;
        CursorRef.current.style.left = `${percentWidth}%`
        dispatch(changeVolume(percentWidth.toFixed(0)))
    }
    const handleGetPositionTraffic = (e) => {
        const percentWidth = Math.floor((e.clientX - TrafficRef.current.getBoundingClientRect().x) / TrafficRef.current.getBoundingClientRect().width * 100)

        var styleElem = document.head.appendChild(document.createElement("style"));
        styleElem.innerHTML = `.traffic:before {width: ${percentWidth}%}`;
        CursorTrafficRef.current.style.left = `${percentWidth}%`
        IconTrafficRef.current.style.left = `${percentWidth}%`
        dispatch(changeVolumeTraffic(percentWidth.toFixed(0)))
        // dispatch(setTrueTraffic())
    }
    const handleGetPositionRain = (e) => {
        const percentWidth = Math.floor((e.clientX - RainRef.current.getBoundingClientRect().x) / RainRef.current.getBoundingClientRect().width * 100)

        var styleElem = document.head.appendChild(document.createElement("style"));
        styleElem.innerHTML = `.rain:before {width: ${percentWidth}%}`;
        CursorRainRef.current.style.left = `${percentWidth}%`
        IconRainRef.current.style.left = `${percentWidth}%`
        dispatch(changeVolumeRain(percentWidth.toFixed(0)))
        // dispatch(setTrueRain())
    }
    const handleGetPositionKeyboard = (e) => {
        const percentWidth = Math.floor((e.clientX - KeyboardRef.current.getBoundingClientRect().x) / KeyboardRef.current.getBoundingClientRect().width * 100)

        var styleElem = document.head.appendChild(document.createElement("style"));
        styleElem.innerHTML = `.keyboard:before {width: ${percentWidth}%}`;
        CursorKeyboardRef.current.style.left = `${percentWidth}%`
        IconKeyboardRef.current.style.left = `${percentWidth}%`
        dispatch(changeVolumeKeyboard(percentWidth.toFixed(0)))
        // dispatch(setTrueKeyboard())
    }
    return (
        <div className='wrapperCustom'>
            <div className='customMood'>
                <p className='textCustom'>Mood</p>
                <div className='typeMood'>
                    <span className='nameMood' onClick={() => handleChangeMood('Sleepy')}>
                        <IoMdMoon className={'iconMood ' + (typeMood == 'Sleepy' ? 'active' : '')} />
                        <p className={'textMood ' + (typeMood == 'Sleepy' ? 'active' : '')}>Sleepy</p>
                    </span>
                    <span className='nameMood' onClick={() => handleChangeMood('Jazzy')}>
                        <GiTrumpet className={'iconMood ' + (typeMood == 'Jazzy' ? 'active' : '')} />
                        <p className={'textMood ' + (typeMood == 'Jazzy' ? 'active' : '')}>Jazzy</p>
                    </span>
                    <span className='nameMood' onClick={() => handleChangeMood('Chill')}>
                        <GiCoffeeCup className={'iconMood ' + (typeMood == 'Chill' ? 'active' : '')} />
                        <p className={'textMood ' + (typeMood == 'Chill' ? 'active' : '')}>Chill</p>
                    </span>
                </div>
                <div className='volumeMood'>
                    <IoIosVolumeMute className='volumeMute' />
                    <div ref={VolumeRef} className='rangeVolume' onMouseDown={(e) => handleGetPosition(e)}>
                        <span ref={CursorRef} className='cursorVolume'></span>
                    </div>
                    <IoIosVolumeLow className='volumeLow' />
                </div>
                <p className='backgroundNoies'>
                    Background Noies
                </p>
                <div className='listInputRange'>
                    <div className='inputRange'>
                        <p className='nameInputNoies'>City Traffic</p>
                        <div ref={TrafficRef} className='rangeInputNoies traffic' onMouseDown={(e) => handleGetPositionTraffic(e)}>
                            <div ref={IconTrafficRef} className='wrapperIconNoies'>
                                <BiTrafficCone className='iconNoies' />
                            </div>
                            <span ref={CursorTrafficRef} className='cursorInputNoies trafficCursor'></span>
                            <span className='iconInputNoies'></span>
                        </div>
                    </div>
                    <div className='inputRange'>
                        <p className='nameInputNoies'>City Rain</p>
                        <div ref={RainRef} className='rangeInputNoies rain' onMouseDown={(e) => handleGetPositionRain(e)}>
                            <div ref={IconRainRef} className='wrapperIconNoies'>
                                <BsUmbrellaFill className='iconNoies' />
                            </div>
                            <span ref={CursorRainRef} className='cursorInputNoies rainCursor'></span>
                            <span className='iconInputNoies'></span>
                        </div>
                    </div>
                    <div className='inputRange'>
                        <p className='nameInputNoies'>Keyboard</p>
                        <div ref={KeyboardRef} className='rangeInputNoies keyboard' onMouseDown={(e) => handleGetPositionKeyboard(e)}>
                            <div ref={IconKeyboardRef} className='wrapperIconNoies'>
                                <MdOutlineKeyboardAlt className='iconNoies' />
                            </div>
                            <span ref={CursorKeyboardRef} className='cursorInputNoies keyboardCursor'></span>
                            <span className='iconInputNoies'></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}