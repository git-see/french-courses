import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";
import Home from "./pages/Home";
import CourseAdd from "./pages/CourseAdd";
import CoursesList from "./pages/CoursesList";
import "./css/app.css";

function App() {
  const [courses, setCourses] = useState([]);

  function handleAddCourse(course) {
    console.log("handleAddCourse", course);
    setCourses([...courses, course]);
  }

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/add"
          element={<CourseAdd handleAddCourse={handleAddCourse} />}
        />
        <Route path="/list" element={<CoursesList />} />
      </Routes>
    </>
  );
}

export default App;
