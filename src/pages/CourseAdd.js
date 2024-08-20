import { useState } from "react";

export default function CourseAdd(props) {
  const [course, setCourse] = useState({
    coursename: "",
    coursesubject: "",
    coursedescription: "",
  });

  const { handleAddCourse } = props;

  function handleSubmit(evt) {
    evt.preventDefault();
    handleAddCourse(course);
    setCourse({
      coursename: "",
      coursesubject: "",
      coursedescription: "",
    });
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setCourse({ ...course, [name]: value });
  }

  return (
    <div className="course-add">
      <h1>Add a course</h1>
      <div>
        <form onSubmit={(evt) => handleSubmit(evt)}>
          <label htmlFor="coursename">Name:</label>
          <br />
          <input
            type="text"
            id="coursename"
            name="coursename"
            value={course.coursename}
            onChange={(evt) => handleChange(evt)}
          />
          <br />
          <label htmlFor="coursesubject">Subject:</label>
          <br />
          <select
            name="coursesubject"
            id="coursesubject"
            value={course.coursesubject}
            onChange={(evt) => handleChange(evt)}
          >
            <option value="spelling">Select a subject</option>
            <option value="spelling">Spelling</option>
            <option value="grammar">Grammar</option>
            <option value="conjugation">Conjugation</option>
            <option value="other">Other</option>
          </select>
          <br />
          <label htmlFor="coursedescription">Description:</label>
          <br />
          <textarea
            id="coursedescription"
            name="coursedescription"
            cols="30"
            rows="10"
            value={course.coursedescription}
            onChange={(evt) => handleChange(evt)}
          ></textarea>
          <br />
          <input type="submit" value="Add course" className="btn" />
          <br />
        </form>
      </div>
    </div>
  );
}
