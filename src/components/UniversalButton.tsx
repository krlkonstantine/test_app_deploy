import React from 'react';

type UniversalButtonType = {
    callbackForButton: () => void
    buttonTitle: string
}

export const UniversalButton = (props: UniversalButtonType) => {

    const onButtonCLickHandler = () => {
        props.callbackForButton()
    }

    return (
        <button onClick={onButtonCLickHandler}>{props.buttonTitle}</button>
    );
};
