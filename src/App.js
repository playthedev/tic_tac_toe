
import { useEffect, useState } from 'react';
import './App.css';
import Square from './Components/Square';
import { pattern } from './pattern';
function App() {
 
  const [board,setBoard]=useState(['','','','','','','','','']);
  let [player,setPlayer]=useState('O')
  let [result,setResult]=useState({status:'none'});

  const chooseBoard=(idx)=>{
        setBoard(board.map((value,index)=>{
          if(idx===index && value==''){return player;}
           return value;
        }))
        
   }

   const restartGame=()=>{
    setBoard(['','','','','','','','','']);
    setPlayer('O');
   }

    const checktie=()=>{
      let fill=true;
       board.forEach((value)=>{
        
        if(value===''){
          fill=false;
        }
       })
       if(fill===true){
        setResult({
          status:'tie',
          person:'no one'
         })
       }
    }

   useEffect(()=>{
      pattern.forEach((arr)=>{
        let found=true;
        let val=board[arr[0]];
        if(val=='')return
        arr.forEach((value)=>{
          if(board[value]!=val)found=false;
        })
        if(found===true){
          setResult({
            status:'win',
            person:player
          })
          // console.log(result.status)
        }
      })
      checktie()
     
      if(player==='X')setPlayer('O')
      else  setPlayer('X')
      

   },[board])
   

  useEffect(()=>{
       if(result.status!=='none'){
         alert(`match ${result.status} by player ${result.person}`)
         restartGame();
      }
       
  },[result]);

  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square  chooseBoard={()=>chooseBoard(0)} value={board[0]}/>
          <Square  chooseBoard={()=>chooseBoard(1)} value={board[1]}/>
          <Square  chooseBoard={()=>chooseBoard(2)} value={board[2]}/>
        </div>
        <div className="row">
           <Square  chooseBoard={()=>chooseBoard(3)} value={board[3]}/>
          <Square  chooseBoard={()=>chooseBoard(4)} value={board[4]}/>
          <Square  chooseBoard={()=>chooseBoard(5)} value={board[5]}/>
        </div>
        <div className="row">
           <Square  chooseBoard={()=>chooseBoard(6)} value={board[6]}/>
          <Square  chooseBoard={()=>chooseBoard(7)} value={board[7]}/>
          <Square  chooseBoard={()=>chooseBoard(8)} value={board[8]}/>
        </div>
      </div>
    </div>
  );
}

export default App;
