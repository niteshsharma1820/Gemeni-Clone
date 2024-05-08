import { createContext } from "react";
import runChat from "../config/gemeni";

export  const Context  = new createContext();

const ContextProvider = (props) => {

    const onSent = async (prompt) => {
        await runChat(prompt)
    }

    runChat("what is react js") 
     const contextValue = {

     }


     return (
        <ContextProvider value={contextValue}>
            {props.children}
        </ContextProvider>
     )

}
export default ContextProvider