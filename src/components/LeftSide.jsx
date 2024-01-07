import { Link, useLoaderData } from "react-router-dom";


const LeftSide = () => {

    const courses = useLoaderData();
    // console.log(courses)

    return (
        <div>
            <h2 className="text-xl font-bold text-center mb-10">Courses</h2>

            <div>
            {
                courses.map(course => <p className="text-center font-bold text-lg text-primary" key={course._id}>
                    <Link to={`/courseDetails/${course._id}`}>{course.type}</Link>
                    </p> )
            }
            </div>

        </div>
    );
};

export default LeftSide;