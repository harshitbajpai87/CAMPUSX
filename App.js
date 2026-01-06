import { useState } from "react";
import Timetable from "./pages/Timetable";
import Burnout from "./pages/Burnout";
import Events from "./pages/Events";
import LostFound from "./pages/LostFound";

function App() {
  const [page, setPage] = useState("timetable");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>CampuseX</h1>
      <p>Smart Campus Website</p>

      {/* MENU */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setPage("timetable")}>📅 Timetable</button>{" "}
        <button onClick={() => setPage("burnout")}>🧠 Burnout</button>{" "}
        <button onClick={() => setPage("events")}>📢 Events</button>{" "}
        <button onClick={() => setPage("lost")}>🔍 Lost & Found</button>
      </div>

      <hr />

      {/* PAGE CONTENT */}
      {page === "timetable" && <Timetable />}
      {page === "burnout" && <Burnout />}
      {page === "events" && <Events />}
      {page === "lost" && <LostFound />}
    </div>
  );
}

export default App;
