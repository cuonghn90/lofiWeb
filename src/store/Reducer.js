import { TOGGLE_RAINY, TOGGLE_THEME, TOGGLE_KEYBOARD, TOGGLE_TRAFFIC, ID_OPTION_CUSTOM, TYPE_MOOD, PLAYING, PREV_SONG, NEXT_SONG, VOLUME_TRAFFIC, VOLUME, VOLUME_KEYBOARD, VOLUME_RAIN, SET_TRUE_TRAFFIC, SET_TRUE_RAIN, SET_TRUE_KEYBOARD } from "./Constant";

const initValue = {
    theme: "on",
    rainy: false,
    keyBoard: false,
    traffic: false,
    idOptionCustom: null,
    dbClickOption: true,
    typeMood: 'Chill',
    isPlaying: false,
    currentSong: 0,
    volumeTraffic: 50,
    volumeRain: 50,
    volumeKeyboard: 50,
    volume: 50
}

const reducer = (state = initValue, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            const newTheme = state.theme == "on" ? "off" : "on"
            return {
                ...state,
                theme: newTheme
            }
        case TOGGLE_RAINY:
            const newRainy = !state.rainy
            return {
                ...state,
                rainy: newRainy
            }
        case TOGGLE_KEYBOARD:
            const newKeyBoard = !state.keyBoard
            return {
                ...state,
                keyBoard: newKeyBoard
            }
        case TOGGLE_TRAFFIC:
            const newTraffic = !state.traffic
            return {
                ...state,
                traffic: newTraffic
            }
        case ID_OPTION_CUSTOM:
            const newDbClickOption = !state.dbClickOption
            if (state.idOptionCustom != action.payload) {
                return {
                    ...state,
                    idOptionCustom: action.payload,
                    dbClickOption: false
                }
            }
            else {
                return {
                    ...state,
                    idOptionCustom: action.payload,
                    dbClickOption: newDbClickOption
                }
            }
        case TYPE_MOOD:
            const newTypeMood = action.payload
            return {
                ...state,
                typeMood: newTypeMood
            }
        case PLAYING:
            const isPlaying = !state.isPlaying
            return {
                ...state,
                isPlaying
            }
        case PREV_SONG:
            return {
                ...state,
                currentSong: action.payload
            }
        case NEXT_SONG:
            return {
                ...state,
                currentSong: action.payload
            }
        case VOLUME:
            return {
                ...state,
                volume: action.payload
            }
        case VOLUME_TRAFFIC:
            return {
                ...state,
                volumeTraffic: action.payload,
                traffic: true
            }
        case VOLUME_RAIN:
            return {
                ...state,
                volumeRain: action.payload,
                rainy: true
            }
        case VOLUME_KEYBOARD:
            return {
                ...state,
                volumeKeyboard: action.payload,
                keyBoard: true
            }
        case SET_TRUE_TRAFFIC:
            return {
                ...state,
                traffic: true
            }
        case SET_TRUE_RAIN:

            return {
                ...state,
                rainy: true
            }
        case SET_TRUE_KEYBOARD:
            return {
                ...state,
                keyBoard: true
            }

        default:
            return state;
    }
}
export default reducer