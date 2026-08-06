import React from 'react'

function TrafficLights() {
    return (
        <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-danger" />
            <span className="w-3 h-3 rounded-full bg-warning" />
            <span className="w-3 h-3 rounded-full bg-success" />
        </div>
    )
}

export default TrafficLights