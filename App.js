import Timetable from "./pages/Timetable";
import Burnout from "./pages/Burnout";
import Events from "./pages/Events";
import LostFound from "./pages/LostFound";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>CampuseX</h1>

      <Timetable />
      <Burnout />
      <Events />
      <LostFound />
    </div>
  );
}

export default App;
