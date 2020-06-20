import React, { useState, useEffect } from "react";
import swal from 'sweetalert';
import './App.css';
import Text from './text.js'
let i = 1,remainingChances = 3;

const App = () => {

  const [randomNum,setRandomNum] = useState(0);

  const [changeText,setChangeText] = useState('')

  const [text,setText] = useState('Hello')
  // const [result,setResult] = useState('');
  const handleChange = (e) =>{
    if(e.target.value!==''){
        if(e.target.value===randomNum.toString() && i<4){
          swal({
            title: "WOW",
            text: "You are Lucky",
            icon: "success",
          })
          setTimeout(function(){
            window.location.reload(1);
         }, 2000);
        }else if(i<4){
          swal({
            title: "Oops",
            text:`Try again ,You have ${remainingChances} chances`,
            icon: "warning",
          })
          i++;
          remainingChances--;
        }else if(i>3){
          swal({
            title: "You Lost",
            text:"No chances remaining",
            icon: "warning",
          })
          setTimeout(function(){
            window.location.reload(1);
         }, 2000);
         
        }
    }
  }

  const generateRandomInteger = (min, max) =>{
    setRandomNum(Math.floor(min + Math.random()*(max + 1 - min)));
  }

  const resetInput = () =>{
    generateRandomInteger(1,10);
    i = 1;
    remainingChances = 3;
    // setResult("")
    window.location.reload('true')
  }

  const showAlert=(showText)=>{
    setChangeText(showText)
  }
  useEffect(() => {
    generateRandomInteger(1,10)
  },[]);

  

  return (
    <div className="box">
      <div className="container">
        <span className="text-1">Check your Luck</span>
        <p className="text-2">Guess a number between 1 and 10</p>
        <div>
        <input className="input-type" type="text" onChange={handleChange} placeholder="Enter the number here..."/>
        <br/>
        <br/>
        <button className="play-again-btn" onClick={resetInput}>Play Again</button>
        </div>
      </div>
       <Text text = {text} showAlert={showText=>showAlert(showText)}/>
  <div>{changeText}</div>
    </div>
  );
};
export default App;
