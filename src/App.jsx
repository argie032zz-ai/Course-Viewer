import { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import NotFoundPage from "./pages/NotFoundPage";
import './App.css';

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}



function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="app-container">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/courses"
            element={
              <CoursesPage
                selectedCourse={selectedCourse}
                setSelectedCourse={setSelectedCourse}
              />
            }
          />
        </Route>

        {/* 404 — no header */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
