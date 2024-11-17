import Header from "../Components/Header"
import Navbar from "../Components/Navbar"
import LeftHome from "../Components/LeftHome"
import MidHome from "../Components/MidHome"
import RightHome from "../Components/RightHome"

const HomeLayout = () => {
    return (
        <div className="font-poppins">
           <header>
            <Header></Header>
           </header>
           <nav>
            <Navbar></Navbar>
           </nav>
           <main className="grid grid-cols-12 gap-6 py-4 w-10/12 mx-auto">
            <div className="col-span-3">
            <LeftHome></LeftHome>
            </div>
            <div className="col-span-6">
                <MidHome></MidHome>
            </div>
            <div className="col-span-3">
            <RightHome></RightHome>
            </div>
           </main>
        </div>
    );
};

export default HomeLayout;