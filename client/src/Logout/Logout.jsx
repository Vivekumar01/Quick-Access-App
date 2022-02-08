import React,{useEffect,useContext} from 'react'
import { useHistory } from 'react-router-dom';
import {UserContext} from '../App'

const Logout=()=> {
    const {dispatch}  = useContext(UserContext)
    const history = useHistory()

    useEffect(()=>{
        fetch('/logout',{
            method:"GET",
            headers:{
                Accept : "application/json",
                "Content-Type" : "application/json"
            },
            Credential:"include"
        }).then((res)=>{
            dispatch({type:"USER", payload:false})
            history.push('/Login',{replace:true})
            if(res.status !== 200){
                const error=new Error(res.error);
                throw error;
            }
        }).catch((err)=>{console.log(err);}) 
    });
    return (
        <div>
        </div>
    )
}

export default Logout
