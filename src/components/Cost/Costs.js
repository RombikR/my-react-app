import CostItem from "./CostItem";
import "./Costs.css";
import Card from "../UI/Card";
import CostFilter from "./CostFilter";
import React, { useState } from "react";

const Costs = (props) => {
    /*const costItemProp = props.costs;
    const rows = [];
    for (var i = 0; i < costItemProp.length; i++){
        rows.push(<CostItem 
            date={costItemProp[i].date}
            description={costItemProp[i].description}
            amount={costItemProp[i].amount}
           />);
    }
    return (
        <div className="costs">{rows}</div>
    );*/

    const [selectYear, setSelectYear] = useState('2019');

    const yearChangeHandler = (year) => {
        setSelectYear(year);
    };

    return (
        <div>
            
        <Card className="costs">
        <CostFilter year={selectYear} onChangeYear={yearChangeHandler}/>
        <CostItem 
        date={props.costs[0].date}
        description={props.costs[0].description}
        amount={props.costs[0].amount}
       />
      <CostItem 
        date={props.costs[1].date}
        description={props.costs[1].description}
        amount={props.costs[1].amount}
        />
      <CostItem 
        date={props.costs[2].date}
        description={props.costs[2].description}
        amount={props.costs[2].amount}
        />
        </Card>
        </div>
    )      
}
export default Costs;
