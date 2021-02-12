import React from "react";

const toFirstUpperCase = (label) => {
    const string = label[0].toUpperCase() + label.substring(1);
    return string;
}

export default toFirstUpperCase;