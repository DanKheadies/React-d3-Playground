import React from 'react'
import Axis from './Axis'

function XYAxis(props) {
    const xSettings = {
        translate: `translate(0, ${props.height - props.padding})`,
        scale: props.xScale,
        orient: 'bottom'
    }

    const ySettings = {
        translate: `translate(${props.padding}, 0)`,
        scale: props.yScale,
        orient: 'left'
    }

    return (
        <g className="xy-axis">
            <Axis {...xSettings} {...props} />
            <Axis {...ySettings} {...props} />
        </g>
    )
}

export default XYAxis