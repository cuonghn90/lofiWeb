import React from "react";

import { FaHeadphonesAlt } from 'react-icons/fa'
import { GiChestnutLeaf } from 'react-icons/gi'
import { GiNightSleep } from 'react-icons/gi'

import './DetailCustomPlayList.css'

export default function DetailCustomPlayList() {
    return (
        <div className='customPlayList'>
            <p className='textPlayList'>Playlists</p>
            <div className='flexOptionPlaylists'>
                <span className="optionPlaylist">
                    <FaHeadphonesAlt className='iconPlaylist' />
                    <p className="textPlaylist">Chill</p>
                </span>
                <span className="optionPlaylist">
                    <GiChestnutLeaf className='iconPlaylist' />
                    <p className="textPlaylist">Focus</p>
                </span>
                <span className="optionPlaylist">
                    <GiNightSleep className='iconPlaylist' />
                    <p className="textPlaylist">Sleep</p>
                </span>
            </div>
            <p className='textTemplates'>Templates</p>
            <p className='noTemplates'>
                You haven't saved any template yet, open the mixer to save one
            </p>
        </div>
    )
}