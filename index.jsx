import React from "react"
import { render } from "react-dom"
import Preheader from "./src/components/Preheader"
import "./css/style.css"
import Header from "./src/components/Header"
import Banner from "./src/components/Banner"
import AboutSection from "./src/components/About-section"
import ServicesSection from "./src/components/Services-section"
import OfferSection from "./src/components/Offer-section"

class App extends React.Component{
    render(){
        return(
            <div>
                <section className="banner" id="" >
                    <Preheader />
                    <Header />
                    <Banner />
                </section>
                <section id="about" className="about">
                    <AboutSection />
                </section>
                <section id="services" className="services">
                    <ServicesSection />
                </section>
                <section id="offers about" className="offers about">
                    <OfferSection />
                </section>
                
            </div>
        )
    }
}

render(
    <App />,
    document.querySelector(".app")
)