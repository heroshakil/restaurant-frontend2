import SectionTitle from "../components/SectionTitle";
import img from '../assets/home/featured.jpg'
import '../pages/featured.css'
import { Link } from "react-router-dom";


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
            subHeading={'---Check it out---'}
            heading={'FROM OUR MENU'}
            ></SectionTitle>
              <div className="md:flex justify-center  bg-slate-500 bg-opacity-35 items-center pb-20 pt-12 px-36">
                <div className="">
                    <img className="w-[1920px]" src={img} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20,2029</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dolor ipsum modi in iure iste veniam! Qui voluptatem impedit nemo facilis cum harum optio quos, sed, totam provident reprehenderit error quod perspiciatis non repudiandae sit officia eveniet, at repellat. Quae molestias maxime iste ratione at perspiciatis accusantium vero eligendi dicta.</p>
                    <Link to='/order/salad'><button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button></Link>

                </div>
            </div>
        </div>
    );
};

export default Featured;