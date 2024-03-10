import React from "react";
import { Styles } from "../styles/courseSearch.js";

const CourseSearch = () => {
  return (
    <Styles>
      {/* Course Search */}
      <div className="course-search">
        <h5>Search Course</h5>
        <form action="#">
          <input type="text" name="search" placeholder="Search Here" />
          <button type="submit">
            <i className="las la-search"></i>
          </button>
        </form>
      </div>
    </Styles>
  );
};

export default CourseSearch;
