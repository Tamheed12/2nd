
//make the album function

function makeAlbum(singer:string,album_title:string,track?:number)
{
    let album:{artist:string,title:string,track?:number}=
        {artist:singer,title:album_title};
        if(track !== undefined)
            {
                album.track=track;
            }

            return album;
}

let call=makeAlbum('Atif Aslam','Sad songs',)
console.log(call);
