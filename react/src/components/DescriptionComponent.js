import React from 'react';

function About(props) {
    return (
        <div>
            <header className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12">
                            <h2>Fare taxi</h2>
                            <p>What is our project about?</p>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container bodyContent">
                <div className="row rowContent">
                    <div className="col-12">
                        <p>In modern life there is never enough time. And the world with technology is moving towards helping people not to throw it away on the little things. Also, everybody have the desire to save some money, that can definitely help in the future. So our team decided to make a service that will help people save their time and cash.</p>
                        <p>Our project does a simple thing. There are lot of taxi services in your city and all of them have their own prices for a ride. So, we wanted a technology that will compare that fares in a minute. You don't need to go from one application to another to find the cheapest price anymore. All that you need to do is set your pickup location and destination. And we will show you how much it will cost in all popular taxi services in your city.
                    Enjoy your ride!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About; 