import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';
import {UniversalButton} from "./UniversalButton";

type UniversalInputType = {
    /*addMessageCallback: (newMessageText: string) => void*/
    title: string
    setTitle: (title: string) => void
}

export const UniversalInput = (props: UniversalInputType) => {


    const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }

    return (
        <>
            <input onChange={onInputChangeHandler} value={props.title}/>
        </>
    );
};
