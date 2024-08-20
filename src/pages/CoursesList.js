import CourseItem from "../components/CourseItem";

export default function CoursesList(props) {
  const { courses, handleDeleteCourse } = props;
  return (
    <div className="courses-list">
      <h1>All courses</h1>
      <div>
        {courses.map((course) => (
          <CourseItem
            course={course}
            key={course.courseid}
            handleDeleteCourse={handleDeleteCourse}
          />
        ))}
      </div>
    </div>
  );
}
