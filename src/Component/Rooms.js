import React from 'react'
import {Link} from 'react-router-dom';
import s8 from './/s8.jpg'

export default function Rooms(props) {
    return (
        <div>
            <div>
            {props.rooms.map((element)=>{
                return( 
                <Link to={`/room${element.name}`}><button style={{backgroundColor:element.color,fontSize:'20px',fontFamily:'David',fontWeight:'bold',width:'70px',height:'50px'}}>{element.name}</button></Link>
                ) })}
                 </div>
            <Link to='/addroom'><button style={{fontSize:'30px' , background:'#6495ED',
            width:'130px',height:'200px',textAlign:'center', fontFamily:'david', fontWeight:'bold' , 
            left:'40px',bottom:'110px',position:'relative',outline:'none',color:'white'}}> Add your room </button></Link>
            <img src = {s8} alt='pic' style={{width:'250px',height:'220px',position:'relative',left:'60px',top:'20px'}}></img>

       </div>
    )
}