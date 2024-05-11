///define make_album function
function make_album(artist_Name:string, album_Title:string ,tracks?:number){
let album :{artist:string, title:string, track?:number} ={
    artist: artist_Name,
    title: album_Title,

};
if(tracks !== undefined){
    album.track = tracks;
}
  return album;  
}
///calling three fuctions of different value

let album1 = make_album("samina","Album_title 1")
console.log(album1);

let album2 = make_album("Taha","Album_title 2",5)
console.log(album2);

let album3 =make_album("Boys","Album_title 3",15);
console.log(album3);
