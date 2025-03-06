import React from 'react'
import AccentPrimary from "../components/home/AccentPrimary";
import ClientStories from "../components/home/ClientStories";
import SideBox from "../components/home/SideBox";
import Qans from "../components/home/Qans";
import Header from "../components/home/Header";

const Home = () => {
  return (
    <>
    <Header />
    <div className="bg-accentBorderInverseSecondary full-hero relative">
      <SideBox />
      <AccentPrimary />
      <ClientStories />
      <Qans/>
      
      <hr className="border-t border-strokeDivider my-0 pb-lg" />
    </div>
    </>
  )
}

export default Home