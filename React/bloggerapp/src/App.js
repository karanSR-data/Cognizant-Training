import React from "react";

import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {

    const showBooks = true;
    const showBlogs = true;
    const showCourses = true;

    return (

        <div style={{ padding: "20px" }}>

            <h1>Blogger App</h1>

            {/* Method 1 : if using && */}

            {showBooks && <BookDetails />}

            <hr />

            {/* Method 2 : Ternary Operator */}

            {showBlogs ? <BlogDetails /> : <h3>No Blogs Available</h3>}

            <hr />

            {/* Method 3 : Element Variable */}

            {
                (() => {

                    let component;

                    if (showCourses)

                        component = <CourseDetails />;

                    else

                        component = <h3>No Courses Available</h3>;

                    return component;

                })()
            }

        </div>

    );

}

export default App;