import React from 'react'
import ScatterPlot2 from './ScatterPlot2'
import * as d3 from 'd3'
import cruiseShips from '../Data/Cruise-Ship-Estimates.csv'

var cruiseShipData

function RandomStoredCruiseShip() {
    let randomNum = Math.floor(Math.random() * cruiseShipData.length);
    console.log(cruiseShipData[randomNum])
}

function loadShips(ships) {
    return (
        Array.apply(
            null,
            {
                length: ships.length
            }).map((currentShip, index) => [
                ships[index].LloydsPAX,
                (ships[index].LOA * 3.28084)
            ])
    )
}

class Chart2 extends React.Component {
    styles = {
        width: 500,
        height: 250,
        padding: 45,
    }

    state = {
        data: []
    }

    componentDidMount() {
        d3.csv(cruiseShips)
            .then((data) => {
                data.forEach((d) => {
                    d.IMO = +d.IMO;
                    d.LOA = +d["LOA (m)"];
                    d.LloydsPAX = +d["Lloyd Pax Cap"];
                    d.CustomPAX = +d["Custom Pax Cap"];
                    d.Year = +d["Year Built"];
                });
                cruiseShipData = data; // Save a "global" object of the data
                this.setState({
                    data: loadShips(cruiseShipData) // Set the data to the state
                });
            });
    }

    render() {
        return (
            <div>
                <h1>Cruise Ship Data</h1>
                <ScatterPlot2
                    {...this.state}
                    {...this.styles}
                />
                <div className="controls">
                    <button
                        className="btn btn-primary randomize"
                        onClick={() => RandomStoredCruiseShip()}
                    >
                        Random Cruise Ship
                    </button>
                </div>
            </div>
        )
    }
}

export default Chart2