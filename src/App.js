import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      choice: '',
      lst:[],
    }
    this.remove = this.remove.bind(this);
  }
  
  display = () => {
    
    let newLst = this.state.lst.slice();
    let choice=document.getElementById("choice").value;
    newLst.push(choice);
    this.setState({
      lst:newLst,
    });
   
  };

 remove = (e) => {
    var src=e.target.id;
    var index=document.getElementById(src).parentNode.id;
    let newLst = this.state.lst.slice();
    newLst.splice(index, 1);
    this.setState({
      lst:newLst,
   });
  };
  
  modify = (e) => {

    var src=e.target.id;
    var index=document.getElementById(src).parentNode.id;

    let sourceElement=document.getElementById(index);
    
    let txt=sourceElement.firstChild.nodeValue;
    
    let inp=document.createElement("input");
    inp.id="replacement";
    inp.placeholder=txt;
   
    inp.addEventListener("input", function(){
      sourceElement.firstChild.nodeValue=document.getElementById("replacement").value;
    }.bind());

    
    sourceElement.appendChild(inp);
   
    var btn=document.createElement("button");
    btn.addEventListener("click",function(){ 
        let txt=sourceElement.firstChild.nodeValue;
    
        let newLst=document.getElementById("replacement").value;
        sourceElement.firstChild.nodeValue=document.getElementById("replacement").value;
        let newArrayLst= this.state.lst.slice();
        newArrayLst[index]=newLst;
        //alert(newArrayLst);

        this.setState({
            lst:newArrayLst,
        });
        sourceElement.removeChild(inp);
        sourceElement.removeChild(btn);
        

    }.bind(this));
    btn.textContent="Update";
    sourceElement.appendChild(btn);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Foobee Page to Search for Shopping Partners(Shopping to do)</h1>
        </header>
        <h3 align="left">Shopping for</h3>
        <div align="left">
        <input align="left" type="text" placeholder="Clothings" id="choice"/>
        <button id="shoppingInput" onClick={this.display}> Add </button>
        </div>

        <ul align="left" className="Shoppings">
          {this.state.lst.map((listing, index)=>
            <li key={index} id={index}>
                {listing}
                <button id={index+"1"} onClick={this.remove}>Remove </button>
                <button id={index+"1"} onClick={this.modify}> Modify </button>
          </li>)}
        </ul>
      
      </div>
    );
  }
}

export default App;
