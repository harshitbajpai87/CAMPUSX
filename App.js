import { useState } from "react";
import "./App.css";

import Timetable from "./pages/Timetable";
import Burnout from "./pages/Burnout";
import Events from "./pages/Events";
import LostFound from "./pages/LostFound";

function App() {
  const [page, setPage] = useState("timetable");

  return (
    <div className="container">
      <div className="header">
        <h1>CampuseX</h1>
        <p>All-in-One Operating System for Student Life</p>
      </div>

      <div className="menu">
        <button onClick={() => setPage("timetable")}>📅 Timetable</button>
        <button onClick={() => setPage("burnout")}>🧠 Burnout</button>
        <button onClick={() => setPage("events")}>📢 Events</button>
        <button onClick={() => setPage("lost")}>🔍 Lost & Found</button>
      </div>

      <div className="card">
        {page === "timetable" && <Timetable />}
        {page === "burnout" && <Burnout />}
        {page === "events" && <Events />}
        {page === "lost" && <LostFound />}
      </div>
    </div>
  );
}

export default App;
