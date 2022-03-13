import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ResumePage from "./pages/ResumePage";
//
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/page-1" element={<ResumePage id={1} />} />
        <Route path="/page-2" element={<ResumePage id={2} />} />
        <Route path="/page-3" element={<ResumePage id={3} />} />
        <Route path="/page-4" element={<ResumePage id={4} />} />
        <Route path="/page-5" element={<ResumePage id={5} />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default App;
