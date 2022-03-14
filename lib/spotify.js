import SpotifyWebApi from 'spotify-web-api-node'

const scopes = [
  [
    'user-read-email',
    'playlist-read-private',
    'playlist-read-collaborative',
    'streaming',
    'user-read-private',
    'user-library-read',
    'user-top-read',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'user-follow-read',
  ].join(','),
]

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
})

const LOGIN_URL = spotifyApi.createAuthorizeURL(scopes, null, false)

export default spotifyApi

export { LOGIN_URL }
