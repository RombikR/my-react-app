import CostItem from "./CostItem";
import "./Costs.css";
import Card from "../UI/Card";

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
    return (
        <Card className="costs">
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
    )      
}
export default Costs;
