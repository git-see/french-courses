export default function CoursesList(props) {
  const { courses } = props;
  return (
    <div className="courses-list">
      <h1>All courses</h1>
      <div>
        {courses.map((course) => (
          <div key={course.courseid}>
            <h2>{course.coursename}</h2>
            <h3>Subject</h3>
            <p>{course.coursesubject}</p>
            <h3>Description</h3>
            <p>{course.coursedescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
