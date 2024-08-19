import Menu from "./components/Menu";
import Home from "./pages/Home";
import CourseAdd from "./pages/CourseAdd";
import CoursesList from "./pages/CoursesList";
import "./css/app.css";

function App() {
  return (
    <>
      <Menu />;
      <Home />;
      <CourseAdd />;
      <CoursesList />;
    </>
  );
}

export default App;
