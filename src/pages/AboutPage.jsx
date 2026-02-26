import React from 'react'
import AboutSection from '../components/About/AboutSection'
import WhoWeAre from '../components/About/WhoWeAre'
import ChooseUs from '../components/About/ChooseUs'
import YourHome from '../components/About/YourHome'
import OurAchievements from '../components/About/OurAchievements'
import GetStarted from '../components/About/GetStarted'
import Testimonials from "../components/Hero/Testimonials";

function AboutPage() {
  return (
    <>
    <AboutSection />
    <WhoWeAre />
    <ChooseUs />
    <YourHome />
    <OurAchievements />
    <GetStarted />
    <Testimonials />
    </>
  )
}

export default AboutPage