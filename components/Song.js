import React from 'react'
import { msToMinutesAndSeconds } from '../lib/time'

function Song({ order, track }) {
  return (
    <div className="grid grid-cols-2">
      <div className="flex items-center space-x-4">
        <p>{order + 1}</p>
        <img className="h-10 w-10" src={track.track.album.images[0].url} />
        <div>
          <p>{track.track.name}</p>
          <p>{track.track.artists[0].name}</p>
        </div>
      </div>

      <div className="ml-auto flex items-center justify-between md:ml-0">
        <p className="hidden md:inline">{track.track.album.name}</p>
        <p>{msToMinutesAndSeconds(track.track.duration_ms)}</p>
      </div>
    </div>
  )
}

export default Song