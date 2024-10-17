import axios from "axios";
import {Server_Url}  from "../../src/Assets/backend.js";
import { TbBookmark } from "react-icons/tb";
import { useNavigate } from "react-router";
import { useAccordionButton } from "react-bootstrap";
// import { useAuth } from "./AuthContext.js";
// import {token,setToken}



export const RegisterApi = async(data,url)=>{

   const token = 'your-token-here'; 
   const config = {
       headers: {
           Authorization: `Bearer ${token}`, 
       },
   };
          
        try {
      
            const res = await axios.post(Server_Url + "/Register",data,config);
            return res;
         } catch (error) {
            throw error;
         }
    
}


export const loginApi =async(data,url)=>{
    
   const token = 'your-token-here'; 
   const config = {
       headers: {
           Authorization: `Bearer ${token}`, 
       },
   };
    try {
        const res = await axios.post(Server_Url + "/Login" ,data,config);
        console.log(res);
        return res;
     } catch (error) {
        return error;
     }
}

export const logoutApi = async()=>{
   const token = 'your-token-here'; 

   const config = {
       headers: {
           Authorization: `Bearer ${token}`, 
       },
   };
    try {
        const res = axios.get("/logout",config );
        return res;
     } catch (error) {
        return error;
     }
}

export const PostApi = async( data,url,Token)=>{
   let token = 'your-token-here'; 
     if(Token){
         token = Token;
     }
   const config = {
       headers: {
           Authorization: `Bearer ${token}`, 
       },
   };
     try {
         // console.log(url,data);
        const res = await axios.post(Server_Url+ url,  data, config);
        // console.log(url,data);
        return res;
     } catch (error) {
        // return error;
        const error_res = {
            status : error.response.status,
            message : error.response.data.message
       }
       // console.log(error_res);
       return error_res;
     }
}

export const GetApi = async(url,data,Token)=>{
//    const token = Token; 
let token = 'your-token-here'; 
if(Token){
    token = Token;
}   
const config = {
       headers: {
           Authorization: `Bearer ${token}`, 
       },
   };
    try {
        // console.log(data);
        const res = await axios.get(Server_Url + url,{ params: data, ...config });
        // console.log(res.status);
        return res;
     } catch (error) {
        // console.log(error.response);
        // console.log(error.response.status + "It is error message");
        // return error;
        const error_res = {
            status : error.response.status,
            message : error.response.data.message
       }
       // console.log(error_res);
       return error_res;
     }
}

export const GetSongs = async(url,data,Token)=>{
//    const token = Token; 
//    console.log(token);
let token = 'your-token-here'; 
if(Token){
    token = Token;
}
   const config = {
       headers: {
           Authorization: `Bearer ${token}`, 
       },
   };
    try {

        const res = await axios.get( url,{ params: data, ...config });
        // console.log(res);
        return res;
     } catch (error) {
        // console.log(error.response.status + "It is error message");
        // return error;
        const error_res = {
            status : error.response.status,
            message : error.response.data.message
       }
       // console.log(error_res);
       return error_res;
     }
}
export const GetSong = async(url,data = {},Token)=>{
//    const token = 'your-token-here'; 
    //  const token = Token;
    let token = 'your-token-here'; 
    if(Token){
        token = Token;
    }
   const config = {
       headers: {
           Authorization: `Bearer ${token}`, 
       },
   };
    try {
        // console.log(Server_Url+url);
        const res = await axios.get(Server_Url + url,{ params: data, ...config } );
        // console.log(res);
        return res;
     } catch (error) {
        // console.log(error.response);
        // const Navigate = useNavigate();
        const error_res = {
             status : error.response.status,
             message : error.response.data.message
        }
        // console.log(error_res);
        return error_res;
     }
}

export const PatchApi = async(data,url,Token)=>{
//    const token = 'your-token-here';
// const token = Token; 
let token = 'your-token-here'; 
if(Token){
    token = Token;
}
   const config = {
       headers: {
           Authorization: `Bearer ${token}`, 
       },
   };
    try {
        // console.log(Server_Url+url);
        const res = axios.patch(Server_Url + url, data, config );
        return res;
     } catch (error) {

        // return error;
        const error_res = {
            status : error.response.status,
            message : error.response.data.message
       }
       // console.log(error_res);
       return error_res;
     }
}

export const DeleteApi = async(data={},url,Token)=>{
//    const token = 'your-token-here'; 
    const token = Token;
   const config = {
       headers: {
           Authorization: `Bearer ${token}`, 
       },
   };
    try {
        const res = axios.delete(Server_Url + url,{ params: data, ...config });
        return res;
     } catch (error) {
        // return error;
        const error_res = {
            status : error.response.status,
            message : error.response.data.message
       }
       // console.log(error_res);
       return error_res;
     }
}