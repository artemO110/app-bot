import React from "react";

const Button = () => {
    return (
        <div>
            <button {...props} className={'button' + props.className} />
        </div>
    )
}
export default Button;