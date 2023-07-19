import React from "react";
import s from './ButtonComponent.module.css'

type ButtonComponentPropsType={
    name:string
    callBack:()=>void
    disabled?:boolean
}
export const ButtonComponent=(props:ButtonComponentPropsType)=>{
    const{callBack, name,disabled}=props
    return(
        <button disabled={disabled} onClick={callBack} className={s.buttonComp}>{name}</button>
    )
}
