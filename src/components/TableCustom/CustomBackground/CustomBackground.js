import React from "react";

import { FaRegKeyboard } from 'react-icons/fa'
import { BsUmbrella } from 'react-icons/bs'
import { TbTrafficCone } from 'react-icons/tb'
import { RiVipCrown2Line } from 'react-icons/ri'

import './CustomBackground.css'

export default function CustomBackground() {
    return (
        <div className="customBackground">
            <div className='listBackground'>
                <div className='paternBackground'>
                    <img src='/image/kyotopark.png' className="imagePatern" alt='iamge'></img>
                    <p className="nameBackground">
                        Kyoto Park
                    </p>
                    <div className='iconOptionBackground'>
                        <span className='iconCustom'>
                            <BsUmbrella />
                        </span>
                        <span className='iconCustom'>
                            <TbTrafficCone />
                        </span>
                        <span className='iconCustom'>
                            <FaRegKeyboard />
                        </span>
                    </div>
                    <span className='iconVip'><RiVipCrown2Line /></span>
                </div>
                <div className='paternBackground'>
                    <img src='/image/kyotoStreet.png' className="imagePatern" alt='iamge'></img>
                    <p className="nameBackground">
                        Kyoto Street
                    </p>
                    <div className='iconOptionBackground'>
                        <span className='iconCustom'>
                            <BsUmbrella />
                        </span>
                        <span className='iconCustom'>
                            <TbTrafficCone />
                        </span>
                        <span className='iconCustom'>
                            <FaRegKeyboard />
                        </span>
                    </div>
                    <span className='iconVip'><RiVipCrown2Line /></span>
                </div>
                <div className='paternBackground'>
                    <img src='/image/summer.png' className="imagePatern" alt='iamge'></img>
                    <p className="nameBackground">
                        Summer
                    </p>
                    <div className='iconOptionBackground'>
                        <span className='iconCustom'>
                            <BsUmbrella />
                        </span>
                        <span className='iconCustom'>
                            <TbTrafficCone />
                        </span>
                        <span className='iconCustom'>
                            <FaRegKeyboard />
                        </span>
                    </div>
                    <span className='iconVip'><RiVipCrown2Line /></span>
                </div>
            </div>
        </div>
    )
}