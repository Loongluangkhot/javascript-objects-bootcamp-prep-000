var playlist = {'Maroon 5':'She Will Be Loved'}

function updatePlaylist(playlist,artist,song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist,artist) {
  delete playlist[artist]
  return playlist
}

updatePlaylist(playlist,'Coldplay','Yellow')

removeFromPlaylist(playlist,'Maroon 5')