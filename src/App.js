import { Route, Routes } from "react-router";
import Dashboard from "./Components/Dashboard/Dashboard";
import Riders from "./Components/Riders";
import SideMenu from "./Components/SideMenu";



function App() {
  return (
    <div className="flex  bg-[#555B6A29] min-h-[900px] w-full relative top-0 left-0">
      <SideMenu />
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/Riders" element={<Riders/>}/>
      </Routes>
    </div>
  );
}

export default App;


