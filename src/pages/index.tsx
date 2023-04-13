import type { NextPage } from "next";

import AppHead from "src/components/AppHead";
import Loader from "src/components/Loader";
import SkipToMain from "src/components/SkipToMain";
import Header from "src/components/Header";
import SocialLinks from "src/components/SocialLinks";
import LandingSection from "src/sections/LandingSection";
import AboutSection from "src/sections/AboutSection";
import ContactSection from "src/sections/ContactSection";
import Footer from "src/components/Footer";

import data from 'data.json'

export const meta = {
  description: data.about.brief,
  author: data.account.fullname,
  type: "website",
  ogImage: data.image.og,
  siteName: data.account.fullname,
  imageAlt: data.account.fullname + "'s portfolio website",
};

const Home: NextPage = () => {
  return (
    <>
      <AppHead
        title={data.account.username}
        url={`${process.env.NEXT_PUBLIC_URL}`}
        meta={meta}
      />
      <Loader>{data.account.username}</Loader>
      <div className="bg-bglight dark:bg-bgdark overflow-hidden">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <Header />
          <main id="main">
            <LandingSection />
            <AboutSection />
            <ContactSection />
          </main>
          <SocialLinks page="index" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
