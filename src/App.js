import './App.css';
import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Menu from './Menu/Menu'
import Cases from './Cases/Cases'
import Clients from './Clients/Clients'
import Snapshot from './Snapshot/Snapshot'
import Service from './Service/Service'
import Footer from './Footer/Footer'

export default class App extends React.Component {
    render() {
        return(
            <div className="App">
                <Menu />
                <Hero />
                <About />
                <Cases />
                <Clients />
                <Snapshot />
                <Service />
                <Footer />
            </div>
        )
    }
}