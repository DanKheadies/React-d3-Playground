import React from 'react'
import * as d3 from 'd3'
import DataCircles from './DataCircles'
import XYAxis from './XYAxis'
// import cruiseShips from '../Data/Cruise-Ship-Estimates.csv'

// d3.csv(cruiseShips)
//     .then((data) => console.log(data[0]));

// var cruiseShipData;

// d3.csv(cruiseShips)
//     .then((data) => {
//         data.forEach((d) => {
//             d.IMO = +d.IMO;
//             d["LOA (m)"] = +d["LOA (m)"];
//             d["Lloyd Pax Cap"] = +d["Lloyd Pax Cap"];
//             d["Custom Pax Cap"] = +d["Custom Pax Cap"];
//             d["Year Built"] = +d["Year Built"];

//             // d["LOA (m)"] = d["LOA (m)"] * 3.28084;
//         });
//         cruiseShipData = data; // Stores data
//         ShowCruiseShipData(data); // Immediate calls (for display)
//     });

// function ShowCruiseShipData(CSVdata) {
//     console.log(CSVdata[0]);
// }

// function StoredCruiseData() {
//     console.log(cruiseShipData[0])
// }

const xMax = (data) => d3.max(data, (d) => d[0])
const yMax = (data) => d3.max(data, (d) => d[1])

const xScale = (props) => {
    return d3.scaleLinear()
        .domain([0, xMax(props.data)])
        .range([props.padding, props.width - props.padding * 2])
}

const yScale = (props) => {
    return d3.scaleLinear()
        .domain([0, yMax(props.data)])
        .range([props.height - props.padding, props.padding])
}

function ScatterPlot2(props) {
    const scales = {
        xScale: xScale(props),
        yScale: yScale(props)
    }
    return (
        <div>
            <svg width={props.width} height={props.height}>
                <DataCircles {...props} {...scales} />
                <XYAxis {...props} {...scales} />
            </svg>
            {/* <div className="controls">
                <button
                    className="btn btn-primary randomize"
                    onClick={() => StoredCruiseData()}
                >
                    Show That Cruise Data
                </button>
            </div> */}
        </div>
    )
}

export default ScatterPlot2