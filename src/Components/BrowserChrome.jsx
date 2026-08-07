import React from 'react'
import TrafficLights from './TrafficLights.jsx'

function BrowserChrome({ url, children }) {
    return (
        <div
            className="rounded-xl overflow-hidden border border-border bg-white"
        >
            {/* Title bar */}
            <div
                className="flex items-center gap-3 px-4 py-2.5 bg-[#f5f5f3] border-b border-border rounded-t-xl"
            >
                <TrafficLights />
                {/* URL bar */}
                <div
                    className="flex-1 flex items-center gap-2 px-3 py-2 rounded-md bg-[#EBEBEA] border border-border"
                >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 1a4 4 0 100 8A4 4 0 005 1zm0 1.2a2.8 2.8 0 110 5.6 2.8 2.8 0 010-5.6z" fill="#8A8D91" />
                    </svg>
                    <span className="font-['IBM_Plex_Mono'] text-xs text-text-muted">
                        {url}
                    </span>
                </div>
            </div>
            {children}
        </div>
    )
}

export default BrowserChrome