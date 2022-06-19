import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { changePlaying } from '../../../store/Action'

import { prevSong, nextSong } from '../../../store/Action'
import './ManupulationMusic.css'

import { listSongs } from '../../../constantSong'

export default function ManupulationMusic() {
    const dispatch = useDispatch()
    const isPlaying = useSelector(state => state.isPlaying)
    const currentSong = useSelector(state => state.currentSong)
    const handleChangePlaying = () => {
        dispatch(changePlaying())
    }
    const handlePrevSong = () => {
        if (currentSong > 0) {
            dispatch(prevSong(currentSong - 1))
        }
        else {
            dispatch(prevSong(0))
        }
    }
    const handleNextSong = () => {
        if (currentSong < listSongs.length - 1) {
            dispatch(nextSong(currentSong + 1))
        }
        else {
            dispatch(nextSong(listSongs.length - 1))
        }
    }
    return (
        <div className='wrapperManupulation'>
            <span className='prevMusic' onClick={() => handlePrevSong()}>
                <img src='https://lofi.co/static/media/previous.3b3474665d6b8d95bb081b41d67270fe.svg'></img>
            </span>
            <span className='pauseMusic'>
                {isPlaying ?
                    <img onClick={() => handleChangePlaying()} className='pause' src='https://lofi.co/static/media/pause.4ac709263a083f4039b11e120950f9d3.svg'></img> :
                    <img onClick={() => handleChangePlaying()} className='play' src='https://lofi.co/static/media/play.18d46dd90ca12db32170bea8b2d46404.svg'></img>}
            </span>
            <span className='nextMusic' onClick={() => handleNextSong()}>
                <img src='https://lofi.co/static/media/next.9551d6f2d952cb6759a725aac878ab09.svg'></img>
            </span>
        </div>
    )
}