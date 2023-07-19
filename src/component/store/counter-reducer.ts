
export type GeneralActionType = IncrementCountACActionType|ResetCountACActionType|DecrementCountACActionType|MaxValueACActionType|MinValueACActionType|ErrorACActionType

export type CounterType = {
    countValue: number
    maxValue:number
    minValue:number
  error:string
}
type MaintStateType = {
    counter:CounterType
}
const initialState:MaintStateType = {
    counter: {
        countValue: 0,
        minValue: 0,
        maxValue: 6,
        error:''
    }
}

export const counterReducer=(state:MaintStateType = initialState,action:GeneralActionType):MaintStateType=>{
switch (action.type){
    case "INCREMENT-COUNT":{
        return {...state,counter:{...state.counter, countValue: state.counter.countValue + 1}}
    }
    case "DECREMENT-COUNT":{
        return {...state,counter:{...state.counter, countValue: state.counter.countValue - 1}}
    }
    case "RESET-COUNT":{
        return {...state, counter:{...state.counter,countValue:state.counter.minValue}}
    }
    case "GET-MAX-VALUE":{
        return {...state,counter:{...state.counter,maxValue:action.max}}
    }
    case "GET-MIN-VALUE":{
        return {...state,counter:{...state.counter,minValue:action.min}}
    }
    case "GET-ERROR":{
        return {...state,counter:{...state.counter,error:action.error}}
    }
    default:return state
}
}
export type IncrementCountACActionType = ReturnType<typeof incrementCountAC>
export type ResetCountACActionType = ReturnType<typeof resetCountAC>
export type DecrementCountACActionType = ReturnType<typeof decrementCountAC>
export type MaxValueACActionType = ReturnType<typeof maxValueAC>
export type MinValueACActionType = ReturnType<typeof minValueAC>
export type ErrorACActionType = ReturnType<typeof ErrorAC>
export const incrementCountAC =()=>{
    return  {
        type:'INCREMENT-COUNT'
    }as const
}
export const resetCountAC =()=>{
    return  {
        type:'RESET-COUNT'
    }as const
}
export const decrementCountAC =()=>{
    return  {
        type:"DECREMENT-COUNT"
    }as const
}
export const maxValueAC =(max:number)=>{
    return  {
        type:"GET-MAX-VALUE",
        max
    }as const
}
export const minValueAC =(min:number)=>{
    return  {
        type:"GET-MIN-VALUE",
        min
    }as const
}
export const ErrorAC =(error:string)=>{
    return  {
        type:"GET-ERROR",
        error
    }as const
}

