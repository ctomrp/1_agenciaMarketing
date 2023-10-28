import BlogList from "components/home/BlogList";
import CTA from "components/home/CTA";
import Features from "components/home/Features";
import Header from "components/home/Header"
import Incentive from "components/home/Incentive";
import LogoCloud from "components/home/LogoCloud";
import UseCases from "components/home/UseCases";
import Footer from "components/navigation/Footer";
import NavBar from "components/navigation/NavBar";
import Layouts from "hocs/layouts/Layouts";
import { useEffect } from "react";

function Home(props){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <Layouts>
            <NavBar />

                <Header />
                <Incentive />
                <UseCases />
                <Features />
                <CTA />
                <LogoCloud />
                <BlogList />
            <Footer />
        </Layouts>
    );
}

export default Home;