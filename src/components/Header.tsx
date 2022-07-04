import React from 'react';

type HeaderType = {
    headerTitle:string
}

export const Header = (props:HeaderType) => {
    return (
        <div>
            {props.headerTitle}
        </div>
    )
}