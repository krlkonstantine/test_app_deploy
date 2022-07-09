import React from 'react';
import {BanknoteType, FilterType} from "../App";

type JustAnotherComponentType = {
    currentMoney: Array<BanknoteType>
    buttonCallback: (filterValue: FilterType) => void
}

export const JustAnotherComponent = (props:JustAnotherComponentType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => props.buttonCallback("All")}>all</button>
                <button onClick={() => props.buttonCallback("Rubles")}>rubles</button>
                <button onClick={() => props.buttonCallback("Dollars")}>dollars</button>
            </div>

        </>
    );
};
