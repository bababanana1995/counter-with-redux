import React, {useState} from "react";
import {AddItemForm} from "../AddItemForm/AddItemForm";
import {ButtonComponent} from "../button/ButtonComponent";
import {useDispatch, useSelector} from "react-redux";
import {
    CounterType,
    ErrorAC,
    maxValueAC,
    minValueAC
} from "../store/counter-reducer";
import s from './Settings.module.css'
import {AppRootStateType} from "../store/store";


type SettingsPropsType = {
    setSettings: (switched: boolean) => void
    settings: boolean
}
export const Settings = (props: SettingsPropsType) => {
    const {setSettings} = props
    const dispatch = useDispatch()
    const counter = useSelector<AppRootStateType, CounterType>(state => state.counter.counter)
    const maxValueChangeHandler = (max: number) => {
        if (max < counter.countValue || max <= 0 || max < counter.minValue + 1) {
            dispatch(ErrorAC('некоректное максимальное значение'))
        } else {
            dispatch(maxValueAC(max))
            dispatch(ErrorAC(''))
        }
    }
        const minValueChangeHandler = (min: number) => {
            if (min <= 0 || min > counter.maxValue - 1) {
                dispatch(ErrorAC("некоректное минимальное значение"))
            } else {
                dispatch(minValueAC(min))
                dispatch(ErrorAC(''))
            }
        }
        const useSettingsHandler = () => {
            setSettings(false)
        }

        return (
            <div className={s.settings}>
                <div className={s.inputs}>
                    <AddItemForm value={counter.maxValue} callBack={maxValueChangeHandler}
                                 placeholderText={'Pleace write max-value'}/>
                    <AddItemForm value={counter.minValue} callBack={minValueChangeHandler}
                                 placeholderText={'Pleace write min-value'}/>
                </div>
                    <ButtonComponent name={'useSet'} callBack={useSettingsHandler}/>
            </div>
        )
    }

