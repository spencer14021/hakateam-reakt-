import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Team from './TeamComponent';


class Main extends Component {
    
    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }

        const AboutPage = () => {
            return (
                <About />
            );
        }

        const TeamPage = () => {
            return (
                <Team />
            );
        }

        return (
            <div className="bg-dark text-white">
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/about' component={AboutPage} />
                    <Route path='/team' component={TeamPage} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;