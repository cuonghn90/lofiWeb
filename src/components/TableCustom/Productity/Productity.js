import React from 'react'

import { AiFillPlayCircle } from 'react-icons/ai'
import { RiTimerFlashLine, RiDoorLockLine } from 'react-icons/ri'
import { MdEventNote, MdHistory } from 'react-icons/md'


import './Productity.css'
export default function Productity() {
    return (
        <div className='wrapperProductity'>
            <p className='textProductity'>Productity</p>
            <div className='ChooseOption'>
                <span className='iconChoose'>
                    <AiFillPlayCircle />
                </span>
                <span className='nameChoose'>Start Session</span>
                <span className='iconClock'>
                    <RiDoorLockLine />
                </span>
            </div>
            <div className='ChooseOption'>
                <span className='iconChoose'>
                    <RiTimerFlashLine />
                </span>
                <span className='nameChoose'>Timer and Task</span>
                <span className='iconClock'>
                    <RiDoorLockLine />
                </span>
            </div>
            <div className='ChooseOption'>
                <span className='iconChoose'>
                    <MdEventNote />
                </span>
                <span className='nameChoose'>Notes</span>
                <span className='iconClock'>
                    <RiDoorLockLine />
                </span>
            </div>
            <div className='ChooseOption'>
                <span className='iconChoose'>
                    <MdHistory />
                </span>
                <span className='nameChoose'>History</span>
                <span className='iconClock'>
                    <RiDoorLockLine />
                </span>
            </div>
        </div>
    )
}