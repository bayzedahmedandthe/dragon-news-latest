import Marquee from "react-fast-marquee";
import logo from "../assets/logo.png"
import moment from "moment";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="flex justify-center pt-8"><img src={logo} alt="" /></div>
            <p className="text-gray-500 text-center pt-5">Journalism Without Fear or Favour</p>
            <p className="text-center pt-2">{moment().format("dddd, MMMM Do YYYY")}</p>
            <div className="bg-base-200 flex items-center gap-4 w-10/12 mx-auto mt-10">
            <p className="bg-[#D72050] py-2 px-4 text-white font-medium m-3">Latest</p>
            <Marquee pauseOnHover={true}>
                <Link><p className="font-medium">Match Highlights: Germany vs Spain — as it happened </p></Link>
            </Marquee>
            </div>
        </div>
    );
};

export default Header;