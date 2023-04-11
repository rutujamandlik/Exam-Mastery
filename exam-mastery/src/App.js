import { useState } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Components/Navigation/Topbar";
import Sidebar from "./Components/Navigation/Sidebar";
import ContactUs from "./Pages/ContactUs/ContactUs";
import FAQ from "./Pages/FAQ/FAQ";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import StudentDashboard from "./Pages/Student/StudentDashboard";
import TeamMembers from "./Pages/Team/TeamMembers";
import PracticeTestDashBoard from "./Pages/PracticeTests/PracticeTestDashBoard";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              {
                <Route
                  path="/student/dashboard"
                  element={<StudentDashboard />}
                />
              }
              {
                <Route
                  path="/student/practice-tests"
                  element={<PracticeTestDashBoard />}
                />
              }
              {<Route path="/student/team-members" element={<TeamMembers />} />}
              {<Route path="/student/contact-us" element={<ContactUs />} />}
              {<Route path="/student/faq" element={<FAQ />} />}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
