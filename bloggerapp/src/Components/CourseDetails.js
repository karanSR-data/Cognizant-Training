import React from "react";

function CourseDetails() {

    const courses = [

        {
            id: 1,
            name: "React",
            duration: "2 Months"
        },

        {
            id: 2,
            name: "Spring Boot",
            duration: "3 Months"
        }

    ];

    return (

        <div>

            <h2>Course Details</h2>

            <ul>

                {courses.map(course => (

                    <li key={course.id}>

                        {course.name} - {course.duration}

                    </li>

                ))}

            </ul>

        </div>

    );

}

export default CourseDetails;