


export const playAgain = (
    setSquare,
    setGameWon,
    setIsNextX,
    setWinner,
    setHandler,
    setTurn
  ) => {
    return () => {
      setSquare(Array(9).fill("_"));
      setGameWon(false);
      setIsNextX(true);
      setWinner(null);
      setTurn("X");
      setHandler (Array(9).fill(null));
    };
  };