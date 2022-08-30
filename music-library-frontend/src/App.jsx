import axios from 'axios';
import React, { useState,useEffect } from 'react';
import './Components/App.css'
import Entry from './Components/Add';
import Music from './Components/Music';
import SearchBar from './Components/Search';
// import DeleteSong from './Components/Delete';



function App() {

    const [song, setSongs] = useState([{title:'', artist: '', release_date:'', genre:'' }])

    useEffect(() => {
      getAllSongs();
    }, [])

    async function getAllSongs(){
      try{
        let response = await axios.get('http://127.0.0.1:8000/music/');
        console.log(response.data)
        setSongs(response.data);

      } catch(ex) {
        console.log ('Error');
      }
    }
  
  async function addSong(newSong){
    let response = await axios.post('http://127.0.0.1:8000/music/', newSong);
    if(response.status === 201){
      await getAllSongs();


  async function deleteSongs(id) {
    try{    
    await axios.delete(`http://127.0.0.1:8000/music/${id}`)
    if(response.status == 200)
      await getAllSongs()

    }
    catch (ex) {
        console.log(ex);
    }
  }
} 
}
  return (
    <div>
        <div>
        <SearchBar songs={song} setSongs={setSongs} />
        <button className ='getAllSongs' onClick = {getAllSongs}>Access Library</button>
      </div>
      <div className='row-posts'>
        <Music parentMusicTable = {song}/>
      </div>  
      <div className='row-createSong'>
        <Entry addNewSong = {addSong}/>
        </div>      
      
    </div>
    );
  
}

export default App;


