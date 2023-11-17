import CostForm from './CostForm';
import './NewCost.css';

const NewCost = (props) => {

    const saveCostDataHandler = (inputCostData) => {
        const cosdData = {
            ...inputCostData,
            id: Math.random().toString()
        }
  
        props.onAddCost(cosdData);
    }

    return (
        <div className="new-cost"> 
            <CostForm onSaveCostData={saveCostDataHandler} />
        </div>
    );
}

export default NewCost;