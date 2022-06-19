import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'

import { BsFillSunFill } from 'react-icons/bs'
import { BiMoon } from 'react-icons/bi'
import './ToggleTheme.css'


import { toggleTheme } from '../../store/Action'
export default function ToggleTheme() {
    // const [theme, setTheme] = useState("off")
    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch()

    const handleToglleTheme = () => {
        dispatch(toggleTheme())
        // setTheme(theme == "off" ? "on" : "off")
    }
    return (
        <div className={"buttonToggle " + theme} onClick={() => handleToglleTheme()}>
            <BsFillSunFill className="iconSun" />
            <span className={"circleButton " + theme}></span>
            <BiMoon className="iconMoon" />
        </div>
    )
}