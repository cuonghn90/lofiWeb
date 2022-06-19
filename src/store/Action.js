import {
    TOGGLE_THEME, TOGGLE_TRAFFIC, ID_OPTION_CUSTOM, TOGGLE_RAINY, TOGGLE_KEYBOARD, TYPE_MOOD, PLAYING, NEXT_SONG,
    PREV_SONG, VOLUME_TRAFFIC, VOLUME_RAIN, VOLUME_KEYBOARD, VOLUME, SET_TRUE_TRAFFIC, SET_TRUE_RAIN, SET_TRUE_KEYBOARD
} from './Constant'
export const toggleTheme = () => {
    return {
        type: TOGGLE_THEME,
    }
}
export const toggleRainy = () => {
    return {
        type: TOGGLE_RAINY,
    }
}
export const toggleKeyBoard = () => {
    return {
        type: TOGGLE_KEYBOARD,
    }
}
export const toggleTraffic = () => {
    return {
        type: TOGGLE_TRAFFIC,
    }
}
export const changeIdOptionCustom = (payload) => {
    return {
        type: ID_OPTION_CUSTOM,
        payload
    }
}
export const changeTypeMood = (payload) => {
    return {
        type: TYPE_MOOD,
        payload
    }
}
export const changePlaying = () => {
    return {
        type: PLAYING,
    }
}
export const nextSong = (payload) => {
    return {
        type: NEXT_SONG,
        payload
    }
}
export const prevSong = (payload) => {
    return {
        type: PREV_SONG,
        payload
    }
}
export const changeVolumeTraffic = (payload) => {
    return {
        type: VOLUME_TRAFFIC,
        payload
    }
}
export const changeVolumeRain = (payload) => {
    return {
        type: VOLUME_RAIN,
        payload
    }
}
export const changeVolumeKeyboard = (payload) => {
    return {
        type: VOLUME_KEYBOARD,
        payload
    }
}
export const changeVolume = (payload) => {
    return {
        type: VOLUME,
        payload
    }
}
export const setTrueRain = () => {
    return {
        type: SET_TRUE_RAIN,
    }
}
export const setTrueTraffic = () => {
    return {
        type: SET_TRUE_TRAFFIC,
    }
}
export const setTrueKeyboard = () => {
    return {
        type: SET_TRUE_KEYBOARD,
    }
}

