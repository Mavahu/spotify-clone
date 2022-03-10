import { useRecoilValue } from 'recoil'
import { playlistState } from '../atoms/playlistAtoms'
import Song from './Song'

function Songs() {
  const playlist = useRecoilValue(playlistState)
  console.log(playlist)
  return (
    <div className="flex-col space-y-1 px-8 pb-28 text-white">
      {playlist?.tracks.items.map((track, i) => (
        <Song key={track.track.id} track={track} order={i} />
      ))}
    </div>
  )
}

export default Songs
