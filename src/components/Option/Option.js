import React from "react";
import './Option.css'
import { useDispatch } from "react-redux";
import { changeVolumeRain, changeVolumeTraffic, toggleRainy } from "../../store/Action";
export default function Option({ top, left, text, showInput, toggleType }) {
    const dispatch = useDispatch()
    const handleCheck = () => {
        dispatch(toggleType())
    }
    const changeVolume = (text) => {
        if (text == "City rain") {
            const valueInput = document.querySelector(".City.rain").value
            dispatch(changeVolumeRain(valueInput))
        }
        else if (text == "City Traffic") {
            const valueInput = document.querySelector(".City.Traffic").value
            dispatch(changeVolumeTraffic(valueInput))
        }
    }
    return (
        <div className="option" style={{ top: top + "%", left: left + "%" }}>
            <span className="circleCheck" onClick={() => handleCheck()}>
            </span>
            <div className="toolkitOption">
                <span>{text}</span>
                {showInput && <input type="range" className={text} onChange={() => changeVolume(text)} />}
            </div>
        </div>
    )
}