import React from "react";
import Header from './components/header/Header';
import Create from './components/createCard/CreateCard';
import Card from './components/card/Card';
import Footer from './components/footer/Footer';
import './Home.css';

const Home =() => {
    return (
        <div className="main-container">
      
            <Header/>
            <Create/>
            <Card/>
            <Footer/>
      
    
    </div>
    );

}


export default Home ;
