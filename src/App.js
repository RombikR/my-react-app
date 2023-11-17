import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Cost/Costs";

const App = () => {

    const costs = [
      {
        id: "c1",
        date: new Date(2021, 2, 12),
        description: "Холодильник",
        amount: 999.9
      },
      {
        id: "c2",
        date: new Date(2021, 11, 12),
        description: "MacBook",
        amount: 1999.9
      },
      {
        id: "c3",
        date: new Date(2021, 12, 9),
        description: "Джинсы",
        amount: 39.9
      }
    ]
  
  const addConstHandler = (cost) => {
    console.log(cost);
    console.log("App component");
  }

  return (
    <div>
      <NewCost onAddCost={addConstHandler} />
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
