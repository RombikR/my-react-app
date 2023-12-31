import React, { useState } from "react";
import './CostForm.css';

const CostForm = (props) => {

    /*********************** подход 2 ***********//*
    const [userInput, setUserInput]  = useState({
        name: '',
        amount: '',
        date: ''
    })
    const nameChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            name: event.target.value
        })
    }
    const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            amount: event.target.value
        })
    }
    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            date: event.target.value
        })
    }
    /******************************************* */
    /*********************** подход 3 ************/
    // когда зависим от предыдущего состояния (например счетчики) используем этот вариант
    /*
    const [userInput, setUserInput]  = useState({
        name: '',
        amount: '',
        date: ''
    })
    const nameChangeHandler = (event) => {
        setUserInput((previousState) => {
            return {
                ...previousState,
                name: event.target.value
            }
        })
    }
    const amountChangeHandler = (event) => {
        setUserInput((previousState) => {
            return {
                ...previousState,
                amount: event.target.value
            }
        })
    }
    const dateChangeHandler = (event) => {
        setUserInput((previousState) => {
            return {
                ...previousState,
                date: event.target.value
            }
        })
    }
    /******************************************* */

    /*********************** подход 1 ************/
    // получаем состояния
    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
    }
    /******************************************* */

    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date(inputDate)
        };


        props.onSaveCostData(costData);

        setInputName("");
        setInputAmount("");
        setInputDate("");
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Название</label>
                    <input 
                        value={inputName} 
                        onChange={nameChangeHandler}
                        type="text" 
                    />
                 </div>
                 <div className="new-cost__control">
                    <label>Сумма</label>
                    <input
                        value={inputAmount} 
                        onChange={amountChangeHandler}
                        type="number" 
                        min="0.01" 
                        step="0.01" 
                    />
                 </div>
                 <div className="new-cost__control">
                    <label>Дата</label>
                    <input 
                        value={inputDate} 
                        onChange={dateChangeHandler}
                        type="date" 
                        min="2019-01-01" 
                        step="2024-12-31" 
                    />
                 </div>
                 <div className="new-cost__actions">
                    <button type="submit">Добавить расход</button>
                    <button type="button" onClick={props.onCancel}>Отмена</button>
                 </div>
            </div>
        </form>
    )

}
export default CostForm;