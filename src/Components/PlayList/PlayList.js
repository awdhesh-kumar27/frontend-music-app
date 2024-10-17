import React, { useState,useEffect } from "react";
import './PlayList.css';
import NavigationBar from "../NaviGationBar/NavigationBar";
import PlayListItem from "../PlayListItem/PlayListItem";
import { GetApi,GetSong} from "../../utils/RestApi";
import { useAuth } from "../../utils/AuthContext";
import { useNavigate } from "react-router";
import WaitSpinner from "../Spinners/WaitSpinner";

const PlayList = ()=>{
    // const [token,setToken] = useAuth();
    const [loading, setLoading] = useState(false);

    const token = localStorage.getItem('token');
    const [Playlists,setPlaylists] = useState([]);
    const Navigate = useNavigate();
    useEffect(()=>{
        const getData = async()=>{
            const url = "/playlist";
            // url.searchParams.append('userId','dklfjadlsfkjadlsfasf');
            try{
                setLoading(true);
            const res = await GetSong(url,{},token);
            // console.log(data.files);
            
            if(res && res.data){
                setPlaylists(res.data.files);
                setLoading(false);
            }else{
                Navigate('/Login');
            }
              
            // console.log);
            } catch(error){
                 throw error;
            }
        }
        getData();
    },[]);

    useEffect(()=>{

    },[Playlists]);
    return (

    <div>
   {
   loading ?
   (
        <WaitSpinner></WaitSpinner>
   ) : (
        <div>
            <NavigationBar></NavigationBar>
            <div>
            {(Playlists.length > 0) ? (
                    Playlists.map(({playlistName,_id}) => (
                        <PlayListItem key={_id} playlistName={playlistName} playlistId = {_id} />
                    ))
                ) : (
                    <div className="playlist-name-div">No Playlist available</div>
                )}
            </div>
        </div>
   )}
   </div>
    );
}

export default PlayList;