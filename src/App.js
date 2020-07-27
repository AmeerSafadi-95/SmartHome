import React, { Component } from 'react'
import { HashRouter as Router , Route , Switch} from 'react-router-dom'
import './App.css';
import AddRoom from './Component/AddRoom'
import Rooms from './Component/Rooms'
import Room from './Component/Room'


export default class App extends Component {
 
  state={
    rooms:[],
    color:'',
  }
 
  addRoom = (n,t,c)=>{
    if (n.length > 5 || n.length === 0){
      alert('Rooms name should be 5 characters or less')
    } else{
    this.setState({rooms:[...this.state.rooms,{name:n,type:t,color:c,products:[]}]});
    }
  }

  addProduct = (index,typeOfProduct)=>{
     if(this.state.rooms[index].products.length < 5 ){
       if(this.checkStereo(index,typeOfProduct) === true){
       let tempProduct = {condition:false,type:typeOfProduct};
       this.state.rooms[index].products.push(tempProduct);
       this.setState({rooms:[...this.state.rooms]});
       }
       else{
         alert('Stereo is alredy exsict')
       } 
      }else{
        alert('you can add only five products')
      }        
  }

  checkStereo = (index,typeOfProduct) =>{
    if(typeOfProduct !== 'Stereo'){
      return true;
    }
    for(let i =0 ; i<this.state.rooms[index].products.length ; i++){
      if(this.state.rooms[index].products[i].type === 'Stereo'){
        return false
      }
    }
    return true
  }


  smartSwitch = (indexOfRoom,indexOfProduct)=>{
    this.state.rooms[indexOfRoom].products[indexOfProduct].condition = !this.state.rooms[indexOfRoom].products[indexOfProduct].condition ; 
    this.setState({rooms:[...this.state.rooms]});
  }
 
  render() {
    return (
      <div className='App'>
        <h1 style={{fontSize:'50px',color:'#004F98',textAlign:'center'}}>Smart House</h1>
        <Router>
          <Switch>
              <Route exact path='/' component={()=>{return <Rooms rooms={this.state.rooms}/>}} />
              <Route exact path='/addroom' component={()=>{return <AddRoom add={this.addRoom} />}} />
              {this.state.rooms.map((element,index)=>{
                return(
                  <Route exact path={`/room${element.name}`} component={()=>{return <Room name={element.name} type={element.type} addProduct={this.addProduct} index={index} products={element.products} smartSwitch={this.smartSwitch}/>}} />
                ) })}          
          </Switch>
        </Router>
      </div>
    )
  }
}