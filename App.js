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

const RestaurentCard = () => {
    return (
        <div className="resturent-card">
            <h3>Meghana Food</h3>
        </div>
    )
};

const Body = () => {
    return (
        <div className="body">
                <div className="search">Search</div>
                <div className="restaurent-container">
                    <RestaurentCard />
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

root.render(<AppLayout />);