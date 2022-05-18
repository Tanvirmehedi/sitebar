import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import NotFound from "./pages/NotFound";
import Overview from "./pages/Overview";
import { Reports, ReportsOne, ReportsThree, ReportsTwo } from "./pages/Reports";
import Team from "./pages/Team";

function App() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/reports/reports1" element={<ReportsOne />} />
        <Route path="/reports/reports2" element={<ReportsTwo />} />
        <Route path="/reports/reports3" element={<ReportsThree />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
