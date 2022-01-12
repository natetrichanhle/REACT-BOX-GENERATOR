import React from "react";

const Box = (props) => {
    const css = {
        backgroundColor: props.inputs.color,
        width: parseInt(props.inputs.size),
        height: parseInt(props.inputs.size)
    }

    return(
        <div style = {css}></div>
    );
}

export default Box;