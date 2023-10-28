import NavBar from "components/navigation/NavBar";
import Header from "components/careers/Header";
import Footer from "components/navigation/Footer";
import Layouts from "hocs/layouts/Layouts";
import { useEffect } from "react";
import Testimonial from "components/careers/Testimonial";
import Features from "components/careers/Features";
import PositionList from "components/careers/PositionList";
import { Helmet } from "react-helmet-async";

function Careers(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layouts>
      <Helmet>
        <title>Murkiva | Carreras</title>
        <meta
          name="description"
          content="Agencia de software. Servicios de creación de software."
        />
        <meta
          name="keywords"
          content="agencia de software, agencia de marketing, desarrollo de software"
        />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://www.murkiva.com" />
        <meta name="author" content="Murkiva" />
        <meta name="publisher" content="Murkiva" />

        {/* Social Media Tags */}
        <meta property="og:title" content="Murkiva | Software Agency" />
        <meta
          property="og:description"
          content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones."
        />
        <meta property="og:url" content="https://www.murkiva.com/" />
        <meta
          property="og:image"
          content="https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg"
        />

        <meta name="twitter:title" content="Murkiva | Software Agency" />
        <meta
          name="twitter:description"
          content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones."
        />
        <meta
          name="twitter:image"
          content="https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <NavBar />
      <div className="">
        <Header />
        <Testimonial />
        <div className="bg-white">
          <div className="mx-12 pb-12 pt-24">
            <h3 className="text-5xl font-medium leading-6 text-gray-900">
              Working with top notch companies
            </h3>
          </div>

          <div className="mx-12 max-w-full py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                  alt="Tuple"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                  alt="Mirage"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                  alt="StaticKit"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                  alt="Transistor"
                />
              </div>
              <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                  alt="Workcation"
                />
              </div>
            </div>
          </div>
        </div>
        <Features />
        <Features />
        <PositionList />
      </div>
      <Footer />
    </Layouts>
  );
}

export default Careers;
