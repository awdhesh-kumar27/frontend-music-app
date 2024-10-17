import React, { useEffect, useState } from "react";
import './SongList.css';
import MusicItem from "../MusicItem/MusicItem";
import { GetApi,GetSong} from "../../utils/RestApi";
import { useAuth } from "../../utils/AuthContext";
import { Navigate } from "react-router";

const SongList = (props)=>{

    // const {token,setToken} = useAuth();
    const token = localStorage.getItem('token');
    const [SongsList,UpdateSongList] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(()=>{
        const getData = async()=>{
            
            const url1 = "/Home";
            // url1.searchParams.append('userId','66c9e1219180ec2b1c387c06');

                try{
                        // console.log(token);
                    const res = await GetSong(url1,{},token);
                    if(res.data)
                      UpdateSongList(res.data.files);
                }catch(error){
                            //  throw error;
                            // throw error;
                            console.log(error);
                    if(error.response){
                
                        if( error.response.status === 401 || error.response.status === 403) {

                            // Navigate('/Login');
                        } else {

                            // Navigate('/Login');
                        }
                        Navigate('/');

                    }
                    // throw error;
                }
        }
        getData();
    },[refresh,token,Navigate]);

    useEffect(()=>{

    },[SongsList]);

    // return (
    //         <div>
                    
    //             {(SongsList.length > 0) ? (
    //                 SongsList.map(({songName,_id}) => (
    //                     <MusicItem key={_id} songName={songName} songId = {_id} refresh={refresh} setRefresh={setRefresh} onCheckboxChange={props.handleCheckboxChange}  />
    //                 ))
    //             ) : (
    //                 <div className="songlist-name-div"> No songs available </div>
    //             )}
            
                    
    //         </div>
    // );
    return (
        <div>
            {SongsList.length > 0 ? (
                SongsList.map(({ songName, _id }) => (
                    <MusicItem 
                        key={_id} 
                        songName={songName} 
                        songId={_id} 
                        refresh={refresh} 
                        setRefresh={setRefresh} 
                        onCheckboxChange={props.handleCheckboxChange} 
                    />
                ))
            ) : (
                <div className="songlist-name-div">No songs available</div>
            )}
        </div>
    );
    
}

export default SongList;