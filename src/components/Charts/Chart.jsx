import React from 'react'
import ScatterPlot from './ScatterPlot'

// const styles = {
//     width: 500,
//     height: 300,
//     padding: 30,
// }

const numDataPoints = 50
const randomNum = () => Math.floor(Math.random() * 1000)
const randomDataSet = () => {
    return (
        Array.apply(
            null,
            {
                length: numDataPoints
            }).map(() => [
                randomNum(),
                randomNum()
            ])
    )
}

class Chart extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         data: randomDataSet()
    //     }
    // }

    styles = {
        width: 420,
        height: 250,
        padding: 30,
    }

    state = {
        data: randomDataSet()
    }

    randomizeData() {
        this.setState({
            data: randomDataSet()
        })
    }

    render() {
        return (
            <div>
                <h1>Play with React and D3</h1>
                <ScatterPlot
                    {...this.state}
                    // {...styles}
                    {...this.styles}
                />
                <div className="controls">
                    <button
                        className="btn btn-primary randomize"
                        onClick={() => this.randomizeData()}
                    >
                        Randomize Data
                    </button>
                </div>
            </div>
        )
    }
}

export default Chart