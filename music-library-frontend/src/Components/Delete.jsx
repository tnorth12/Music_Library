// import React, {useState} from "react";
// import '../Components/Delete.css';
import React from 'react';

// function DeleteSong (props) {
    
//     const [id, setID] = useState('');

//     function handleSubmit(event) {
//         event.preventDefault();
//         // let deleteSong = {
//         //     id: id

//         //     };
//         //     console.log(deleteSong);
//             props.deleteSongs(id);
        
    // }
             
    

function DeleteSong(props){
    
    return(
        // <form onSubmit={handleSubmit} className='form-grid'>
            // <div className='form-group'>
            //     <label>ID</label>
            //     <input type='text' className='form-control' value={id} onChange={(event) => setID(event.target.value)}/>
            // </div>
            

        <td>
            <button type="button" className="delete_button" onClick={() =>
            props.deleteSongs(props.id)}>Delete</button>
        </td>
        // </form>
    )
}


export default DeleteSong;