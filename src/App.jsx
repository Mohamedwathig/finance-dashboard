import Dashboard from "./component/dashboard/Dashboard";
import Sidebar from "./component/sidebar/Sidebar";




export default function App() {
  return (
    <div className="grid p-5 gap-2  grid-cols-[230px_1fr]
 ">
      <Sidebar/>
      <Dashboard/>
    </div>
  );
}
