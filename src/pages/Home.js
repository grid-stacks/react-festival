import React from "react";
import CarouselComponent from "../components/CarouselComponent";
import Company from "../components/Company";
import Hero from "../components/Hero";
import Platform from "../components/Platform";

const Home = () => {
    return (
        <div className="App">
            <Hero />
            <Company />
            <CarouselComponent />
            <Platform />
        </div>
    );
};

export default Home;
