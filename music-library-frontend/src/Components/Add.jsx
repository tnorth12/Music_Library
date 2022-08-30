import React, {useState} from "react";
import '../Components/Add.css';

const Entry = (props) => {

    const [id, setID] = useState('');
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release_date, setRelease] = useState('');
    const [genre, setGenre] = useState('');


    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            id: id,
            title: title,
            artist: artist,
            album: album,
            genre: genre,
            release_date: release_date,

        };
        console.log(newSong);
        props.addNewSong(newSong);
    }
    return (  
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
                <label>ID  </label>
                <input type='text' className='form-control' value={id} onChange={(event) => setID(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Title  </label>
                <input type='text' className='form-control' value={title} onChange={(event) => setTitle(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Artist  </label>
                <input type='text' className='form-control' value={artist} onChange={(event) => setArtist(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Album  </label>
                <input type='text' className='form-control' value={album} onChange={(event) => setAlbum(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Genre  </label>
                <input type='text' className='form-control' value={genre} onChange={(event) => setGenre(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Release Date  </label>
                <input type='text' className='form-control' value={release_date} onChange={(event) => setRelease(event.target.value)}/>
            </div>
                <button type='submit' className="add_button" style={{'marginCenter': '1em'}}>Add</button>
                        
            <button type="button" className="delete_button" onClick={() =>
            props.deleteSongs(props.id)}>Delete</button>
        
        </form>
    );
}


    export default Entry;


















// import React, { useState} from 'react';
// import axios from 'axios';


// const CreateSong = (props) => {
//     const [title, setTitle] = useState('');
//     const [artist, setArtist] = useState('');
//     const [album, setAlbum] = useState('')
//     const [release_date, setDate] = useState()
//     const [genre, setGenre] = useState('')    

//     async function handleSubmit(event){
//         event.preventDefault();
//         event.CreateSong();
        
//         const song = {
//             title: title,
//             artist: artist,
//             album: album, 
//             relase_date: release_date,
//             genre: genre
//         };
//         try{
//             console.log("song request") 
//             await axios.post('http://127.0.0.1:8000/music/', song);   //song might not work here
//             props.updateTable();
//             event.useState({
//             });
//         // props.addNewEntry(newEntry);
//         }
//         catch (exception) {
//             console.log(exception);
//         }
        
//     }
//     return ( 
//         <form onSubmit={handleSubmit} className='form-control'>            
//             <div className='form-group'>
//                 <label>Title</label>
//                 <input type='text' className='form-control' value={title} onChange={(event) => setTitle(event.target.value)} />
//             </div>
//             <div className='form-group'>
//                 <label>Artist</label>
//                 <input type='text' className='form-control' value={artist} onChange={(event) => setArtist (event.target.value)} />
//             </div>                   
//             <div className='form-group'>
//                 <label>Album</label>
//                 <input type='text' className='form-control' value={album} onChange={(event) => setAlbum (event.target.value)} />
//             </div>                   
//             <div className='form-group'>
//                 <label>Genre</label>
//                 <input type='text' className='form-control' value={genre} onChange={(event) => setGenre (event.target.value)} />
//             </div>
//             <div className='form-group'>
//                 <label>Release Date</label>
//                 <input type='text' className='release_date' value={this.state.release_date} onChange={(event) => setDate(event.target.date)} />
//                 </div>
//             <div> <button className="btn btn-primary btn-sm" type="submit">Add Song</button>
//                 </div>



        
//         </form>
//     )
// }
 
// export default CreateSong;