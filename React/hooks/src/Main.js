import React from "react";
import { useAlert } from "./alert/AlertContext";

const Main = () => {
    const {show} = useAlert()
    return (
        <div>
            <h1>
                Привет в примере с Context
            </h1>
            <button onClick={()=> show('Этот текст из Main.js')}>Show Alert</button>
        </div>
    )
}

export default Main;