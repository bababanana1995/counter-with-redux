import React from "react";
import {ButtonComponent} from "../button/ButtonComponent";
import {useDispatch, useSelector} from "react-redux";
import {
    counterReducer,
    CounterType,
    decrementCountAC,
    ErrorAC,
    incrementCountAC,
    resetCountAC
} from "../store/counter-reducer";
import s from './Counter.module.css'
import {AppRootStateType} from "../store/store";
import {Display} from "./display/Display";


type CounterPropsType = {
    setSettings:(settings:boolean)=>void
    settings:boolean
}
export const Counter = (props: CounterPropsType) => {
    const{setSettings,settings}=props
    const dispatch = useDispatch()
    const counter = useSelector<AppRootStateType, CounterType>(state => state.counter.counter)

    const increment = counter.countValue < counter.maxValue ||!!counter.error
    const decrement = counter.countValue > counter.minValue || !!counter.error
    // const reset = counter.countValue < counter.minValue
    const settingsOpenHandler = () => {
        setSettings(!settings)
    }
    const incrementHandler = () => {
        if(counter.countValue < counter.maxValue) {
            dispatch(incrementCountAC())
        }
    }
    const decrementHandler = () => {
        if(decrement)
        dispatch(decrementCountAC())
    }
    const resetHandler = () => {
        dispatch(resetCountAC())
        dispatch(ErrorAC(''))
    }
    return (
        <div className={s.counter}>
            <Display/>
            <div><ButtonComponent disabled={!increment} name={'incr'} callBack={incrementHandler}/>
                <ButtonComponent disabled={!decrement} name={'decr'} callBack={decrementHandler}/>
                <ButtonComponent disabled={!!counter.error} name={'res'} callBack={resetHandler}/>
                <ButtonComponent name={'set'} callBack={settingsOpenHandler}/></div>
        </div>
    )
}
