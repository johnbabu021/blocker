import { Children, createContext, useReducer } from "react"
import { initialState, reducer } from "./reducers"
export  const   MainContext=createContext('light')

export default  function        GlobalContext({children}){
const   [state,dispatch]=useReducer(reducer,initialState)
return(
    <MainContext.Provider value={{state,dispatch}}>
        {children}
    </MainContext.Provider>
)

}