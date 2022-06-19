import React from "react";
import './Background.css'
import { useSelector } from "react-redux";
export default function Background() {
    const theme = useSelector(state => state.theme)
    const rainy = useSelector(state => state.rainy)
    return (
        <div className="background-video video-player" style={{ width: "640px", height: "360px" }}>
            <video style={(theme == "off" && rainy == false) ? { opacity: "1" } : { opacity: "0" }} src="/background/Interior+-+Sunny+Day.mp4" playsInline muted autoPlay loop>
            </video>
            <video style={(theme == "off" && rainy == true) ? { opacity: "1" } : { opacity: "0" }} src="/background/Interior+-+Rainy+Day.mp4" playsInline muted autoPlay loop>
            </video>
            <video style={(theme == "on" && rainy == false) ? { opacity: "1" } : { opacity: "0" }} src="/background/Interior+-+Night.mp4" playsInline muted autoPlay loop>
            </video>
            <video style={(theme == "on" && rainy == true) ? { opacity: "1" } : { opacity: "0" }} src="/background/Interior+-+Rainy+Night.mp4" playsInline muted autoPlay loop>
            </video>
        </div >
    )
}