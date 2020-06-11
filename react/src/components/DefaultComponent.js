import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formControls: {
                pointA: "",
                pointB: ""
            },
            res: ""
        }
    }

    onChangeInputHandler(e) {
        let name = e.target.name
        let value = e.target.value

        const formControls = { ...this.state.formControls }

        formControls[name] = value

        this.setState({ formControls });
    }

    onSwap() {
        const formControls = { ...this.state.formControls }

        let temp = formControls.pointA
        formControls.pointA = formControls.pointB
        formControls.pointB = temp

        this.setState({ formControls })
    }

    onGetPrice() {
        const formControls = { ...this.state.formControls }

        if (formControls.pointA.length != 0 && formControls.pointB.length != 0) {
            this.setState({res: Math.floor(Math.random() * Math.floor(100))});
        }
        else {
            this.setState({res: ""});
        }
    }

    renderResult() {
        if (this.state.res.length != 0) {
            return (
                <div className="row rowContent">
                    <div className="col-12 text-center">
                        {this.state.res}
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        return (
            <div>
                <header className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12">
                                <h2>Fare taxi</h2>
                                <p>We compare most popular taxi apps' prices</p>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="container bodyContent">
                    <div className="row rowContent">
                        <div className="col-12 col-md-6 d-flex justify-content-center">
                            <div className="form-group">
                                <label for="inputLocA">Location A</label>
                                <input name="pointA" value={this.state.formControls.pointA} onChange={(e) => { this.onChangeInputHandler(e) }} className="form-control" id="inputLocA" placeholder="Enter start location"></input>
                            </div>
                            <button type="button" className="btn btn-loc btn-secondary">
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center">
                            <div className="form-group">
                                <label for="inputLocB">Location B</label>
                                <input name="pointB" value={this.state.formControls.pointB} onChange={(e) => { this.onChangeInputHandler(e) }} className="form-control" id="inputLocB" placeholder="Enter end location"></input>
                            </div>
                            <button type="button" className="btn btn-loc btn-secondary">
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                    <div className="row rowContent justify-content-center">
                        <div className="col-12 col-md-6 d-flex justify-content-center">
                            <button type="button" onClick={() => {this.onSwap()}} className="btn btn-secondary">
                                Swap <i className="fa fa-refresh" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                    <div className="row rowContent justify-content-center">
                        <div className="col-12 col-md-6 d-flex justify-content-center">
                            <button type="button" onClick={() => {this.onGetPrice()}} className="btn btn-primary">
                                Get prices <i className="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                    {this.renderResult()}
                </div>
            </div>
        );
    }
}

export default Home; 