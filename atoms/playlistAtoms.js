import { atom } from 'recoil'

// Data of selected playlist
export const playlistState = atom({
  key: 'playlistState',
  default: null,
})

// Selected Playlist ID
export const playlistIdState = atom({
  key: 'playlistIdState',
  default: '6YwAeG4vfqcaBdR2K9BgBk',
})
