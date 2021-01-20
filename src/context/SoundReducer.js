import {
  INFORMACION_COVER_SUCCESSFUL,
  INFORMACION_COVER_ERROR,
  SEARCH_SOUND_ERROR,
  SEARCH_SOUND_SUCCESSUL,
  PLAY_SOUND_SUCCESSULL,
  PLAY_SOUND_ERROR,
  DISPLAY_REPRODUCTOR_SUCCESSULL,
  SUBIR_VOLUMEN_SUCCESSFULL,
  PLAYING_OK,
  TOOGLE_ADD,
  SPINNER_ADD,
  CLEAR_SOUND_ARRAY,
  ADD_REPRO_OK
} from "../types/index";

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case PLAYING_OK: {
      return {
        ...state,
        playing: action.payload,
      }
    }
    case INFORMACION_COVER_SUCCESSFUL:
      return {
        ...state,
        cover: action.payload,
      };
    case SEARCH_SOUND_SUCCESSUL:
      return {
        ...state,
        sound: action.payload.data,
        loading: action.payload.value,
      };
    case PLAY_SOUND_SUCCESSULL:
      return {
        ...state,
        play: state.sound.find((item) => item.id === action.payload),
      };
    case CLEAR_SOUND_ARRAY:
      return {
        sound: [],
        play: [],
      };
    case DISPLAY_REPRODUCTOR_SUCCESSULL:
      return {
        ...state,
        display: action.payload,
      };
    case INFORMACION_COVER_ERROR:
    case SEARCH_SOUND_ERROR:
    case PLAY_SOUND_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SUBIR_VOLUMEN_SUCCESSFULL:
      return {
        ...state,
        volumen: action.payload,
      };
    case TOOGLE_ADD:
      return {
        ...state,
        toogle: action.payload,
      };
    case SPINNER_ADD:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_REPRO_OK:
      return{
        ...state,
        repro:action.payload
      }
    default:
      return state;
  }
};
