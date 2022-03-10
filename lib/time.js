export function msToMinutesAndSeconds(ms) {
  const minutes = Math.floor(ms / 60000)
  const seconds = ((ms / 1000) % 60).toFixed(0)
  return seconds == 60
    ? minutes + 1 + ':00'
    : minutes + ':' + (seconds < 10 ? '0' : '') + seconds
}
