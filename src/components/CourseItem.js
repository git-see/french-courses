export default function CourseItem(props) {
  const { course } = props;
  return (
    <div key={course.courseid} className="card">
      <h2>{course.coursename}</h2>
      <h3>Subject</h3>
      <p>{course.coursesubject}</p>
      <h3>Description</h3>
      <p>{course.coursedescription}</p>
    </div>
  );
}
