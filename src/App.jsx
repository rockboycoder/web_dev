import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Home from "./Service";
import Home from "./About";
import Home from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Switch } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
    return(
        <>
            <Navbar />
            <switch>
            <Route  exact path="/" component={Home} />
            <Route exact path="/service" component={Service} />
            <Route  exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Redirect to="/" />
            
            </switch>
            <Footer />
        </>

    );
};
export default App;
