import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";


const Courses = () => {

    // const courses = useLoaderData();
    // // console.log(courses)

    return (
        <section>
           <div className="flex ">
            <div className="w-48 bg-orange-400 border h-[1000px] rounded p-4">
            <LeftSide></LeftSide>
            </div>
            <div className="flex-1 border border-primary bg-slate-800 text-white p-4">
            <RightSide></RightSide>
            </div>
           </div>
        </section>
    );
};

export default Courses;