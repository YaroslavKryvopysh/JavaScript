import React from "react";
import { useAlert } from "./AlertContext";

const styles = {
    border: '1px solid red',
    background: 'lightpink',
    color: 'darkred',
    padding: '10px',
    margin:'20px'
}

const Alert = () => {
    const alert = useAlert()

    if (!alert.visible) return null

    return (
        <div onClick={alert.hide}>
            <p style={styles}>
                {alert.text}
            </p>
        </div>
    )
}

export default Alert;