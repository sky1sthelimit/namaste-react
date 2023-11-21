import React from "react";
import ReactDOM from "react-dom/client";

const Logo = () => {
  return (
    <img
      className="logo"
      src="https://logo.com/image-cdn/images/kts928pd/production/11e5681ac3b77c52480a1748abb1950ba40e4884-357x358.png?w=1080&q=72"
    ></img>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <Logo />
      </div>

      <div className="nav-items-container">
        <ul className="nav-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//body and its components

const ResCard = () => {
  return (
    <div className="res-card">
      <div className="res-image-container">
        <img
          className="res-image"
          alt="res-logo"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/86094b1e069bf5f473c4b52a57248db1"
        ></img>
      </div>
      <div className="res-name">RestName</div>
      <div className="star-rating">3.5</div>
      <div className="eta">21 mins</div>
      <div className="cuisines">North Indian</div>
    </div>
  );
};

const ResItems = () => {
  return (
    <div className="res-items">
      <ResCard />
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="searchBar">Search</div>
      <div className="res-items-container">
        <ResItems />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
