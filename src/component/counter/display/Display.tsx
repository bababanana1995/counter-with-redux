import React from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {CounterType} from "../../store/counter-reducer";
import s from './Display.module.css'

type DisplayPropsType={
}
export const Display=(props:DisplayPropsType)=>{
    const{}=props
    const counter = useSelector<AppRootStateType, CounterType>(state => state.counter.counter)

    return(
        <div className={s.display}>{counter.error?counter.error : counter.countValue}</div>
    )
}
