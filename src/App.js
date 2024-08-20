import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Menu from "./components/Menu";
import Home from "./pages/Home";
import CourseAdd from "./pages/CourseAdd";
import CoursesList from "./pages/CoursesList";
import "./css/app.css";

function App() {
  const [courses, setCourses] = useState([]);

  function handleAddCourse(course) {
    console.log("handleAddCourse", course);
    setCourses([...courses, { ...course, courseid: uuidv4() }]);
  }

  function handleDeleteCourse(id) {
    setCourses(courses.filter((cours) => cours.courseid !== id));
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
        <Route
          path="/list"
          element={
            <CoursesList
              courses={courses}
              handleDeleteCourse={handleDeleteCourse}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
