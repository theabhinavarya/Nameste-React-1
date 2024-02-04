import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - Logo
 * - Nav Item
 * Body
 * - Search
 * - RestaurantContainer
 *  - ResturentCard
 *   - Img
 *   - Name of Res,  Star Rating, cuisine, Delery tie
 * Footer
 * - Copyright
 * - Links
 * - Adress
 * - Contact
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://i.ibb.co/0MHcZWF/Screenshot-2024-02-04-135623-removebg-preview.png"/>
            </div>
            <div className="nav-item">
                <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact US</li>
                <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const styleCard = {};

const RestaurantCard = () => {
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img
            className="res-logo"
            alt="res-logo"
            src="https://i.ibb.co/jf9Qf6P/Screenshot-2024-02-04-185335.png"/>
            <h3>StarBucks</h3>
            <h4>Baverages,Cafe,Cakes,...</h4>
            <h4><img className="star" src="https://i.ibb.co/7GHq5RZ/star-7-512.png"/>4.2</h4>
            <h4>30 minutes</h4>
        </div>
    )
};

const Body = () => {
    return (
        <div className="body">
                <div className="search">Search</div>
                <div className="res-container">
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                </div>
        </div>
    )
    };

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);