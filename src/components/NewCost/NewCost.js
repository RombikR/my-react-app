import React, { useState } from "react";
import CostForm from './CostForm';
import './NewCost.css';

const NewCost = (props) => {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const saveCostDataHandler = (inputCostData) => {
        const cosdData = {
            ...inputCostData,
            id: Math.random().toString()
        }
        setIsFormVisible(false);
        props.onAddCost(cosdData);
    }

    const cancelCostHandler = () => {
        setIsFormVisible(false);
    }

    const inputCostDataHandler = () => {
        setIsFormVisible(true);
    }

    let contentForm = <button onClick={inputCostDataHandler}>Добавить новый расход</button>
    if(isFormVisible===true){
        contentForm = <CostForm onCancel={cancelCostHandler} onSaveCostData={saveCostDataHandler} />
    }

    return (
        <div className="new-cost"> 
            {contentForm}
        </div>
    );
}

export default NewCost;