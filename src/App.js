import Dashboard from "./Components/Dashboard/Dashboard";
import SideMenu from "./Components/SideMenu";



function App() {
  return (
    <div className="flex  bg-[#555B6A29] min-h-[900px] w-full relative top-0 left-0">
      <SideMenu />
      <Dashboard />
    </div>
  );
}

export default App;


