import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Cost/Costs";

const App = () => {

    const costs = [
      {
        date: new Date(2021, 2, 12),
        description: "Холодильник",
        amount: 999.9
      },
      {
        date: new Date(2021, 11, 12),
        description: "MacBook",
        amount: 1999.9
      },
      {
        date: new Date(2021, 12, 9),
        description: "Джинсы",
        amount: 39.9
      }
    ]

  return (
    <div>
      <NewCost />
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
