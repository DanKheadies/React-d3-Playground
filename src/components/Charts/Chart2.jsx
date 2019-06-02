import React from 'react'
import ScatterPlot2 from './ScatterPlot2'

import * as d3 from 'd3'
import cruiseShips from '../Data/Cruise-Ship-Estimates.csv'

var cruiseShipData;
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};
var list = ['h', 'e', 'l', 'l', 'o'];


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
    // console.log(ships[0].LOA)
    // console.log(ships[0].LloydsPAX)
    // console.log(object1)
    // console.log(Object.values(object1))
    // console.log(Object.values(ships))

    // cruiseShipData.map((currElement, index) => {
    //     console.log("The current iteration is: " + index);
    //     console.log("The current element is: " + currElement.IMO);
    //     console.log("\n");
    //     return 'X';
    // });

    // return (
    //     ships.map(ship => {
    //         miniArray = {};
    //         miniArray[ship.LOA] = ship.LOA;
    //         miniArray[ship.LloydsPAX] = ship.LloydsPAX;
    //     })
    // )

    const derp = Array.apply(
        null,
        {
            length: ships.length
        }).map((currentShip, index) => {
            console.log(ships[index].LOA)
            // console.log(currentShip[index].IMO) // won't work this way
        });

    const derp2 = Array.apply(
        null,
        {
            length: ships.length
        }).map((currentShip, index) => [
            ships[index].LloydsPAX,
            ships[index].LOA
        ]);

    console.log(derp2);
    return derp2;


    // ships.map(ship => {
    //     const container = {};

    //     container[ship.LOA] = ship.LOA;
    //     container[ship.LloydsPAX] = ship.LloydsPAX;

    //     console.log(container);
    // })

    // return (
    //     Array.apply(
    //         null,
    //         {
    //             length: ships.length
    //         }).map(() => [
    //             randomNum(),
    //             randomNum()
    //         ])
    // )
}

function getIMO(ship, ind) {
    var imo = ship[ind].iMO;
    return imo;
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