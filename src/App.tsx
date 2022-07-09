import React, {useState} from 'react';
import './App.css';
import {JustAnotherComponent} from "./components/JustAnotherComponent";

export type BanknoteType = {
    banknots: string
    value: number
    number: string
}

export type FilterType = "Rubles" | 'Dollars' | "All"
function App() {


    const [money, setMoney] = useState<BanknoteType[]>([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'Rubles', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'Rubles', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'Rubles', value: 50, number: ' v1234567890'},
    ])


    const [filter, setFilter] = useState<FilterType>("All")

    let currentMoney = money

    if (filter === "Dollars") {
        currentMoney = money.filter(el => el.banknots === "Dollars")
    }
    if (filter === "Rubles") {
        currentMoney = money.filter(el => el.banknots === "Rubles")
    }
    const onClickHandler = (filterValue: FilterType) => {
        setFilter(filterValue)
    }
    return (
        <JustAnotherComponent currentMoney={currentMoney}  buttonCallback={onClickHandler} />
        /*<>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
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
                <button onClick={() => onClickHandler("All")}>all</button>
                <button onClick={() => onClickHandler("Rubles")}>rubles</button>
                <button onClick={() => onClickHandler("Dollars")}>dollars</button>
            </div>
            {/!*<div style={{marginLeft: '20px'}}>
                <JustAnotherComponent buttonName={"Show All"} buttonCallback={showAllBanknotes}/>
                <JustAnotherComponent buttonName={"Rubles"} buttonCallback={showOnlyRubles}/>
                <JustAnotherComponent buttonName={"Dollars"} buttonCallback={showOnlyDollars}/>
            </div>
*!/}
        </>*/
    );
}

export default App;


