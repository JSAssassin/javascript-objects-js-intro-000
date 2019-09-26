let playlist = {
  avril : 'I will be'
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName){
  Delete playlist[artistName];
}
