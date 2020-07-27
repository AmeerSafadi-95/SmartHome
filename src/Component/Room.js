import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import s9 from './/s9.jpg'

export default class Room extends Component {
    
    constructor(props){
        super(props);
        this.state={
            flag:false,
            type:'Lamp',
            condition:'off',
        }
    }
    
    change = ()=>{
        this.setState({flag:!this.state.flag})
    }
    selectType = (e)=>{
        this.setState({type:e.target.value});
    }

    show = ()=>{
        if((this.state.flag === true)&&(this.props.type === 'Bedroom' || this.props.type === 'Kitchen'|| this.props.type === 'Living room')){
            return (
                <div>
                    <select onChange={this.selectType} style={{color:'#2E5894',fontSize:'20px',position:'relative',width:'255px'}}>
                        <option value="Lamp">Lamp</option>
                        <option value="Air condition">Air condition</option>
                        <option value="Stereo">Stereo</option>
                </select>
                <button onClick={()=>{this.props.addProduct(this.props.index,this.state.type)}} style={{color:'#008080',fontSize:'20px',width:'200px'}}> Add Product </button>
                </div>
            )
        } else if((this.state.flag === true)&&(this.props.type === 'Bathroom')){
            return (
                <div>
                    <select onChange={this.selectType} style={{color:'#2E5894',fontSize:'20px',position:'relative',width:'255px'}}>
                        <option value="Lamp">Lamp</option>
                        <option value="Air condition">Air condition</option>
                        <option value="Stereo">Stereo</option>
                        <option value="Boiler">Boiler</option>
                </select>
                <button onClick={()=>{this.props.addProduct(this.props.index,this.state.type)}} style={{color:'#008080',fontSize:'20px',width:'200px'}}> Add Product </button>
                </div>
            )
        }
        else{
            return (
                <div>
                    <br/>
                    <button onClick={this.change} style={{color:'#008080',fontSize:'20px',width:'200px'}}>Add Electrical Items</button>
                </div>
            )
        }
    }
    
    render(){
    return (
        <div>
          <h5 style={{fontSize:'25px',fontFamily:'Times new roman'}} > <span style={{color:'#126180'}} > Room Name: </span> {this.props.name} </h5> 
          <h5 style={{fontSize:'25px',fontFamily:'Times new roman'}} > <span style={{color:'#126180'}} > Room Kind: </span> {this.props.type} </h5>
          {this.props.products.map((element , index)=>{
              let condition = element.condition?'green':'red';
              return(
              <button onClick={()=>{this.props.smartSwitch(this.props.index,index)}} style={{backgroundColor:condition,fontSize:'20px',width:'200px'}} >{element.type}</button>
              ) })}
          {this.show()}
          <Link to='/' ><button style={{background:'#2E5894',color:'white',fontSize:'15px',fontFamily:'David',fontWeight:'bold',width:'70px',height:'50px',position:'relative',right:'300px',top:'70px',borderRadius:'5px'}}> Back </button></Link>
          <img src = {s9} alt='pic' style={{width:'300px',height:'220px',position:'relative',left:'400px',top:'120px'}}></img>
        </div>
        )
    }
}