import React, { useState } from "react";
import './CostForm.css';

const CostForm = () => {

    /*********************** подход 1 ***********/
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const nameChangeHandler = (enent) => {
        setName(enent.target.value);
    }

    const amountChangeHandler = (enent) => {
        setAmount(enent.target.value);
    }

    const dateChangeHandler = (enent) => {
        setDate(enent.target.value);
    }
    /******************************************* */

    /*********************** подход 2 ***********//*
    const [userInput, setUserInput]  = useState({
        name: '',
        amount: '',
        date: ''
    })

    const nameChangeHandler = (enent) => {
        setUserInput({
            ...userInput,
            name: enent.target.value
        })
    }

    const amountChangeHandler = (enent) => {
        setUserInput({
            ...userInput,
            amount: enent.target.value
        })
    }

    const dateChangeHandler = (enent) => {
        setUserInput({
            ...userInput,
            date: enent.target.value
        })
    }
    /******************************************* */
    /*********************** подход 3 ***********//*
    const [userInput, setUserInput]  = useState({
        name: '',
        amount: '',
        date: ''
    })
    const nameChangeHandler = (enent) => {
        setUserInput((previousState) => {
            return {
                ...previousState,
                name: enent.target.value
            }
        })
    }
    const amountChangeHandler = (enent) => {
        setUserInput((previousState) => {
            return {
                ...previousState,
                amount: enent.target.value
            }
        })
    }
    const dateChangeHandler = (enent) => {
        setUserInput((previousState) => {
            return {
                ...previousState,
                date: enent.target.value
            }
        })
    }
    /******************************************* */

    return (
        <form>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Название</label>
                    <input type="text" onChange={nameChangeHandler}/>
                 </div>
                 <div className="new-cost__control">
                    <label>Сумма</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                 </div>
                 <div className="new-cost__control">
                    <label>Дата</label>
                    <input type="date" min="2019-01-01" step="2024-12-31" onChange={dateChangeHandler}/>
                 </div>
                 <div className="new-cost__actions">
                    <button type="submit">Добавить расход</button>
                 </div>
            </div>
        </form>
    )

}
export default CostForm;