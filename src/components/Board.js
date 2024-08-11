import React, { useState } from 'react'
import Square from './Square'
import './Style.css'
import WinnerBoard from './WinnerBoard';
import PlayAgain from './PlayAgain';
import Turn from './Turn';
import ResetGame from './ResetGame';
import GameDrawn from './GameDrawn';
let  handler = Array(9).fill(null);
export default function Board() {
    const [square , setSquare]= useState(Array(9).fill("_"));
    const [isNextX , setIsNextX] = useState(true);
    const [gameWon , setGameWon] = useState(false);
    const [winner , setWinner]  = useState(null);
    const [turn , setTurn] = useState("X");
    const [gameDrawn , setGameDrawn] = useState(false);
    
    const checkWinner = (sq)=>{
        const winPattern = [
            [0,1,2],
            [0,3,6],
            [0,4,8],
            [1,4,7],
            [2,4,6],
            [2,5,8],
            [3,4,5],
            [6,7,8],
        ];
        console.log(handler);
      
        for(let i = 0 ;i<winPattern.length;i++){
            const [a,b,c] = winPattern[i];
            if(sq[a] && sq[a] === sq[b] && sq[a] === sq[c]){
                
                setWinner(sq[a]);
                setGameWon(true);  
                handler = Array(9).fill(null); 
            }
        }
        console.log(gameWon);
    }

    const CheckGameDrawn = ()=>{
       
            if(!handler.includes(null)){
                
                setGameDrawn(true);
                
                
            }
            
    }
    const handleOnClick = (i)=>{
        const nextSquare = square.slice();
        if(isNextX){
            nextSquare[i] = "X";
            setTurn("O");
            
        }
        else{
           nextSquare[i]="O";
           setTurn("X");
        
        }
        setSquare(nextSquare);
        setIsNextX(!isNextX);
        handler[i] = nextSquare[i];
    
        checkWinner(handler);
        CheckGameDrawn();
    }

    const playAgain = ()=>{
        setSquare(Array(9).fill("_"));
        setGameWon(false);
        setGameDrawn(false);
        setIsNextX(true);
        setWinner(null);
        setTurn("X");
        handler = Array(9).fill(null);
     }
     const resetGame = ()=>{
        setSquare(Array(9).fill("_"));
        setGameWon(false);
        setIsNextX(true);
        setWinner(null);
        setTurn("X");
        setGameDrawn(false);
        handler = Array(9).fill(null);
     }
  return (

    <div className="body">  
        
        <div className="game-display">
            <h1 className='title'>TIC TAC TOE</h1>
            
        <div className="board"> 
            
            <div className="row">
                <Square value={square[0]} handleClick = {() =>handleOnClick(0)}disabled= {square[0] !=="_" || gameWon}/>
                <Square value={square[1]} handleClick = {()=>handleOnClick(1)}disabled= {square[1] !=="_" ||gameWon} />
                <Square value={square[2]} handleClick = {() =>handleOnClick(2)}disabled= {square[2] !=="_" || gameWon} />
            </div>
            <div className="row">
                <Square value={square[3]} handleClick = {() =>handleOnClick(3)}disabled=  {square[3] !=="_"||gameWon}/>
                <Square value={square[4]} handleClick = {() =>handleOnClick(4)}disabled = {square[4] !=="_" ||gameWon}/>
                <Square value={square[5]} handleClick = {() =>handleOnClick(5)}disabled = {square[5] !=="_" ||gameWon}/>
            </div>
            <div className="row">
                <Square value={square[6]} handleClick = {() =>handleOnClick(6)}disabled= {square[6] !=="_" ||gameWon}/>
                <Square value={square[7]} handleClick = {() =>handleOnClick(7)}disabled = {square[7] !=="_" ||gameWon}/>
                <Square value={square[8]} handleClick = {() =>handleOnClick(8)} disabled= {square[8] !=="_" ||gameWon}/>
            </div>
            </div>

        </div>
       <div className="right-Part">
        <div className="game-status">
        <h1 style={{color:'white'}}>{!gameWon  && !gameDrawn && "Game on"}</h1>
        {!gameWon && !gameDrawn && <Turn turn = {turn}/>}
        {!gameWon &&  !gameDrawn &&<ResetGame reset={resetGame}/>}

        {gameWon && <WinnerBoard winner = {winner} /> }
        {gameWon&&<PlayAgain playAgain = {playAgain} />}

        {gameDrawn && <GameDrawn /> }
        {gameDrawn && <PlayAgain playAgain = {playAgain} />}
        </div>
       </div>
    </div>
        
  )
 }
