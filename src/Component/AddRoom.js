import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class AddRoom extends Component {
   
    constructor(props){
        super(props);

        this.state={
            name:'',
            type:'Kitchen',
            color:'white',
            backgroundcolorname:'white'
        }
    }
  
    nameValid = (e)=>{
        this.setState({name:e.target.value});
    }
    colorValid = (e)=>{
        this.setState({color:e.target.value});
    }
    selectType = (e)=>{
        this.setState({type:e.target.value});
    }
    
    render() {
        return (
            <div>
                <h3 style={{color:'#126180',bottom:'20px',fontSize:'25px',position:'relative'}}>Please Add Your Room</h3>
                <input onChange={this.nameValid} type="text" placeholder='Enter your rooms name' style={{color:'#0F52BA',bottom:'20px',fontSize:'20px',position:'relative',width:'250px'}}/>
                <br/>
                <select onChange={this.selectType} style={{color:'#2E5894',fontSize:'20px',position:'relative',width:'255px'}}>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Bedroom">Bedroom</option>
                    <option value="Bathroom">Bathroom</option>
                    <option value="Living room">Living room</option>
                </select>
                <br/>
                <br/>
                <input onChange={this.colorValid} type="color" placeholder='color'  style={{fontSize:'20px',width:'250px'}}/><br/>
                <br/>
               <Link to='/'> <button onClick={()=>{this.props.add(this.state.name,this.state.type,this.state.color)}}  style={{color:'#008080',fontSize:'20px',width:'250px'}}>Create room</button></Link>
            </div>
        )
    }
}