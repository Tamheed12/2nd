//make the album function
function makeAlbum(singer, album_title, track) {
    var album = { artist: singer, title: album_title };
    if (track !== undefined) {
        album.track = track;
    }
    return album;
}
var call = makeAlbum('Atif Aslam', 'Sad song');
console.log(call);
