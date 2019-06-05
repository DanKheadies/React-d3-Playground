import React from 'react'
import Chart from '../Charts/Chart'
import Chart2 from '../Charts/Chart2'
import Chart3 from '../Charts/Chart3'
import Hexagons from '../Charts/Hexagons'

class Main extends React.Component {
    render() {
        return (
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-8 p-lg-8 mx-auto my-8">
                    {/* <h1 className="display-4 font-weight-normal">Punny headline</h1>
                    <p className="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple's marketing pages.</p>
                    <a className="btn btn-outline-secondary" href="#">Coming soon</a> */}
                    <Chart />
                    <br /><br />
                    <Chart2 />
                    <br /><br />
                    <Hexagons />
                    <br /><br />
                    <Chart3 />
                </div>
                <div className="product-device box-shadow d-none d-md-block"></div>
                <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
            </div>
        )
    }
}

export default Main