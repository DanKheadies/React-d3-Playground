import React from 'react'
import ScatterPlot2 from './ScatterPlot2'

import * as d3 from 'd3'
import cruiseShips from '../Data/Cruise-Ship-Estimates.csv'

var cruiseShipData;

function RandomStoredCruiseShip() {
    let randomNum = Math.floor(Math.random() * cruiseShipData.length);
    console.log(cruiseShipData[randomNum])
}

const randomNum = () => Math.floor(Math.random() * 1000)
function loadShips(ships) {
    // console.log(cruiseShipData[0])
    // console.log(cruiseShipData[0].LOA)
    // console.log(cruiseShipData[0].LloydsPAX)
    console.log(ships)
    console.log(ships[0].LOA)
    console.log(ships[0].LloydsPAX)

    let editedShipsArray = [1];
    editedShipsArray = ships.length;
    editedShipsArray = Array.apply(null, editedShipsArray).map(Number.prototype.valueOf, 5);
    console.log(editedShipsArray);

    // return (
    //     Array.apply(
    //         null,
    //         {
    //             length: ships.length
    //         }).map(() => [
    //             ships,
    //             randomNum()
    //         ])
    // )
}

// function getLOA(ship) {
//     var loa = ship.LOA;
//     return loa;
// }

// function getLloydsPAX(ship) {
//     var lloydsPax = ship.LloydsPAX;
//     console.log(lloydsPax);
//     return lloydsPax;
// }

class Chart extends React.Component {
    styles = {
        width: 420,
        height: 250,
        padding: 30,
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

                    // d["LOA (m)"] = d["LOA (m)"] * 3.28084;
                });
                cruiseShipData = data; // Save a "global" object of the data
                // console.log(cruiseShipData[0]);
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

export default Chart