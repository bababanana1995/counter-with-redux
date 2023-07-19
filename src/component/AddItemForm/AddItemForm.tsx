import React, {ChangeEvent, useState} from "react";
import s from './AddItemForm.module.css'

type AddItemFormPropsType={
    callBack:(max:number)=>void
    placeholderText:string
value:number
}
export const AddItemForm=(props:AddItemFormPropsType)=>{
    const{callBack,placeholderText,value}=props
    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        callBack(Number(e.currentTarget.value))
    }
    return(
        <input value={value} onChange={onChangeHandler} type={"number"} className={s.InputAddItemForm} placeholder={placeholderText}/>
    )
}
