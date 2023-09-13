import Head from "next/head";
import OurSpeakers from "../components/OurSpeakers/Index";
import AboutUs from "../components/AboutUs/Index";
import Register from "../components/Register/Index";
import TheyTrustedUs from "../components/TheyTrustedUs/Index";
import OurPartners from "../components/OurPartners/Index";
import Agenda from "../components/Agenda/Index";
import AboutEvent from "../components/AboutEvent/Index";
import Footer from "../components/Footer/Index";
import Hero from "../components/Hero/Index";
export default function Home() {
  return (
    <>
      <Head>
        <title>Even Website</title>
        <link rel="shortcut icon" href="/affinidi.ico" />
      </Head>

      <Hero />
      <main className="font-IBM-Plex">
        <AboutEvent />
        <Register/>
        <AboutUs />
        <OurPartners />
        <OurSpeakers/>
        <TheyTrustedUs />
        <Agenda />
      </main>
      <Footer />
    </>
  );
}
