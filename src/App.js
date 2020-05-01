import React, { Component } from "react";
import "./App.css";
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";
import CityCards from "./components/CityCards"

class App extends Component {

  render() {

    return (
      <div>
        <Appbar Title="Ramzan Calender 2020"/>
        <CityCards />
        <Footer />
      </div>
    );
  }
}

export default App;
