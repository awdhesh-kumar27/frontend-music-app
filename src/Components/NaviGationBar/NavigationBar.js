import Nav from 'react-bootstrap/Nav';
import './NavigationBar.css';
import { useState,useEffect } from 'react';
import { GetSong } from '../../utils/RestApi';
import { PostApi } from '../../utils/RestApi';
import MusicItem from '../MusicItem/MusicItem';
import { useNavigate } from 'react-router';
import { useAuth } from '../../utils/AuthContext';
import { Button } from 'react-bootstrap';
import WaitSpinner from '../Spinners/WaitSpinner';

function NavigationBar(props) {

  // const {token,setToken} = useAuth();
  // const[token,setToken]= useState(null);
  // setToken(localStorage.getItem('token'));
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('token');
  const [Playlists,setPlaylists] = useState([]);
  const Navigate = useNavigate();

  useEffect(()=>{
      
      const getData = async()=>{
        
          const url = "/playlist";
          // url.searchParams.append('userId','66c9e1219180ec2b1c387c06');
          try{
            setLoading(true);
            const res = await GetSong(url,{},token);
            // console.log(res);
            if(res && res.data){
                setPlaylists(res.data.files);
                setLoading(false);
            }else{
                Navigate('/Login');
            }
          
          }catch(error){
               
          }
      }
      getData();
  },[token,Navigate]);

  useEffect(()=>{

  },[Playlists])
   


    const handleLinkClick = async(event,_id)=>{
            event.preventDefault();
            // const Handler=async()=>{
              // console.log(props.checkedItems,_id);
            try{
              // console.log(props.checkedItems);
              const PlaylistData = {
                 songList : props.checkedItems
              }
              const url = `/AddSongPlaylist/:${_id}`;
                const songtoPlaylist =  await PostApi(PlaylistData,url,token);

            }catch{
               
            }
        
            Navigate("/Playlists");
    }
   const logoutHandler = (event)=>{
       const res = localStorage.removeItem('token');
       Navigate("/")  
   }
  //  console.log(props.checkedItems);
  return (
   <div>
   {
   loading ?
   (
        <WaitSpinner></WaitSpinner>
   ) : ( <div className='nav-bar-div'>
    <Nav variant="" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link href="/Home" style={{ color: 'black' }} className='navi-btn'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link   className='navi-btn' href="/Playlists" style={{ color: 'black' }}>Playlist</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link className='navi-btn' href="/CreatePlaylist" style={{ color: 'black' }}>Create Playlist</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link className='navi-btn' href="/AddSong" style={{ color: 'black' }}>Add Song</Nav.Link>
        </Nav.Item>

        {Playlists.length > 0 && (
                <Nav.Item>
                    <div className="dropdown">
                        <button className="dropbtn">Add to Playlists</button>
                        <div className="dropdown-content">
                            {Playlists.map(({ playlistName, _id }) => (
                                <a key={_id} href={`/AddSongPlaylist/${_id}`} onClick={(event) => handleLinkClick(event, _id)}>
                                    {playlistName}
                                </a>
                            ))}
                        </div>
                    </div>
                </Nav.Item>
            )}

        {/* <Nav.Item>
            <div className="dropdown">
                <button className="dropbtn">Add to Playlist</button>
                      <div className="dropdown-content">
                        {Playlists.map(({ playlistName, _id }) => (
                          <a key={_id} href={`/AddSongPlaylist/${_id}`}  onClick={(event) => handleLinkClick(event, _id) }>{playlistName}</a>
                        ))}
                  </div>
            </div>
        </Nav.Item> */}
        <div className='logout-button'>
            {/* <Button></Button> */}
            <Button onClick={logoutHandler}>Logout</Button>
        </div>
        
    </Nav>
</div>)
}
</div>

  );
}

export default NavigationBar;
