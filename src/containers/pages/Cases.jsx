import CasesList from "components/cases/CasesList";
import Header from "components/cases/Header";
import Footer from "components/navigation/Footer";
import NavBar from "components/navigation/NavBar";
import Layouts from "hocs/layouts/Layouts";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

function Cases(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layouts>
      <Helmet>
        <title>Murkiva | Casos de Estudio</title>
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
        <CasesList />
      </div>
      <Footer />
    </Layouts>
  );
}

export default Cases;
