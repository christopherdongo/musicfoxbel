import React, { useReducer } from "react";

/*context*/
import SoundContext from "./SoundContext";
import SoundReducer from "./SoundReducer";
/*type*/
import {
  INFORMACION_COVER_SUCCESSFUL,
  INFORMACION_COVER_ERROR,
  SEARCH_SOUND_SUCCESSUL,
  SEARCH_SOUND_ERROR,
  PLAY_SOUND_SUCCESSULL,
  PLAY_SOUND_ERROR,
  DISPLAY_REPRODUCTOR_SUCCESSULL,
  SUBIR_VOLUMEN_SUCCESSFULL,
  PLAYING_OK,
  TOOGLE_ADD,
  SPINNER_ADD,
  CLEAR_SOUND_ARRAY,
  ADD_REPRO_OK
} from "../../types/index";

import clienteAxios from "../../apis/apis";

const initial_state = {
  sound: [],
  error: null,
  loading: false,
  cover: [],
  play: [],
  display: "none",
  volumen: null,
  playing: false,
  toogle:false,
  repro:false
};
export const GlobalSoundState = ({ children }) => {
  const [state, dispatch] = useReducer(SoundReducer, initial_state);

  const AddCoverSound = async () => {
    try {
      const res = await clienteAxios.get("/album/192713382");

      dispatch({
        type: INFORMACION_COVER_SUCCESSFUL,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: INFORMACION_COVER_ERROR,
        payload: error.response,
      });
    }
  };
  const SearchSound = async (search, value) => {
    try {
      const res = await clienteAxios.request(`/search?q=${search}`);
      const { data } = res.data;

      dispatch({
        type: SEARCH_SOUND_SUCCESSUL,
        payload: {data,value}
      });
    } catch (err) {
      dispatch({
        type: SEARCH_SOUND_ERROR,
        payload: err.response,
      });
    }
  };
  const AddPlay =  (display, id) => {
    if (display) {
      dispatch({
        type: PLAY_SOUND_SUCCESSULL,
        payload:id
      });
      dispatch({
        type: DISPLAY_REPRODUCTOR_SUCCESSULL,
        payload: display,
      });
    } else {
      const error = "Error al reproducir";
      dispatch({
        type: PLAY_SOUND_ERROR,
        payload: error,
      });
    }
  };
  const AddVolumen = (value) => {
    dispatch({
      type: SUBIR_VOLUMEN_SUCCESSFULL,
      payload: value,
    });
  };

  const PlayingAdd=(value)=>{
     dispatch({
       type:PLAYING_OK,
       payload:value
     })
  }

  const ToogleAdd=(value)=>{
   dispatch({
     type:TOOGLE_ADD,
     payload:value
   })
  }

  const SpinnerAdd=(value)=>{
    dispatch({
      type:SPINNER_ADD,
      payload:value
    })
  }

  const ClearSound=()=>{
    dispatch({
      type:CLEAR_SOUND_ARRAY
    })
  }

  const ADDrepro=(value)=>{
     dispatch({
       type:ADD_REPRO_OK,
       payload:value
     })
  } 

  return (
    <SoundContext.Provider
      value={{
        //estados
        sound: state.sound,
        error: state.error,
        loading: state.loading,
        cover: state.cover,
        display: state.display,
        play: state.play,
        volumen: state.volumen,
        playing: state.playing,
        toogle:state.toogle,
        repro:state.repro,
        //funciones
        AddCoverSound,
        SearchSound,
        AddPlay,
        AddVolumen,
        PlayingAdd,
        ToogleAdd,
        SpinnerAdd,
        ClearSound,
        ADDrepro

      }}
    >
      {children}
    </SoundContext.Provider>
  );
};
