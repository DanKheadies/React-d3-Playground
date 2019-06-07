import React from 'react'
import * as d3 from 'd3'

class Chart3 extends React.Component {
    state = {
        data: [12, 5, 6, 6, 9, 10],
        width: 425,
        height: 200
    }

    componentDidMount() {
        this.drawChart();
    }

    drawChart() {
        const data = this.state.data;
        const svg = d3.select(".bars")
            .append("svg")
            .attr("width", this.state.width)
            .attr("height", this.state.height);

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => this.state.height - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 10)
            .attr("fill", "green");

        svg.selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .text((d) => d)
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => this.state.height - (10 * d) - 3)
    }

    render() {
        return (
            <div className="bars"></div>
        )
    }
}

export default Chart3