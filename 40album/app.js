///define make_album function
function make_album(artist_Name, album_Title, tracks) {
    var album = {
        artist: artist_Name,
        title: album_Title,
    };
    if (tracks !== undefined) {
        album.track = tracks;
    }
    return album;
}
///calling three fuctions of different value
var album1 = make_album("samina", "Album_title 1");
console.log(album1);
var album2 = make_album("Taha", "Album_title 2", 5);
console.log(album2);
var album3 = make_album("Boys", "Album_title 3", 15);
console.log(album3);
