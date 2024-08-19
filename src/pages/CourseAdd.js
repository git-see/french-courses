export default function CourseAdd() {
  return (
    <div className="course-add">
      <h1>Add a course</h1>
      <div>
        <form>
          <label htmlFor="course-name">Name:</label>
          <br />
          <input type="text" id="course-name" name="course-name" />
          <br />
          <label htmlFor="course-subject">Subject:</label>
          <br />
          <select name="course-subject" id="course-subject">
            <option value="spelling">Select a subject</option>
            <option value="spelling">Spelling</option>
            <option value="grammar">Grammar</option>
            <option value="conjugation">Conjugation</option>
            <option value="other">Other</option>
          </select>
          <br />
          <label htmlFor="course-description">Description:</label>
          <br />
          <textarea
            id="course-description"
            name="course-description"
            cols="30"
            rows="10"
          ></textarea>
          <br />
          <input type="submit" value="Add course" />
          <br />
        </form>
      </div>
    </div>
  );
}
