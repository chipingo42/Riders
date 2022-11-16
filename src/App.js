import MainDahbord from "./Componets/MainDahbord";
import Sidebar from './Componets/Sidebar'



function App() {
  return (
    <div className=" w-full h-[100vh] bg-[#F4F4F6] flex">
      <Sidebar />
      <MainDahbord />
    </div>
  );
}

export default App;
