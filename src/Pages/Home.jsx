import { PiExport } from "react-icons/pi";
import { Link } from "react-router-dom";
import banner from '../assets/images/learning.jpg';

const Home = () => {
    return (
        <section className=" bg-gradient-to-r from-cyan-500 via-orange-200 to-blue-500 h-screen w-full  flex justify-center items-center px-4">
          <div className=" flex justify-center items-center">
          <div className="flex-1 space-y-3">
          <h1 className="text-6xl font-bold"><span className="text-secondary">Start learning</span> from <br /> the worlds best <br /> institutions</h1>
          <p className="font-bold pb-16">Flexible easy to access learning opportunities can bring a significant change in how individuals prefer to learn! The eDash can offer you to enjoy the beauty of eLearning!</p>

          <Link to='/course'><button className="btn btn-secondary">Explore More <PiExport className="text-2xl" /></button></Link>
          </div>

          <div className="flex-1">
            <img className="w-full  rounded-l-xl" src={banner} alt="" />
          </div>
          
          
          </div>
        </section>
    );
};

export default Home;