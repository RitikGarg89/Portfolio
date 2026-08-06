import React from 'react'

function TrafficLights() {
    return (
        <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full" style={{ background: '#E5594E' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#E5B04E' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#3FAE6B' }} />
        </div>
    )
}

export default TrafficLights