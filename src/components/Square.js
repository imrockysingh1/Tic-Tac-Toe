
import  './Style.css'

export default function Square({value , handleClick , disabled}) {
  return (
    <>
           <button className="btn " onClick={handleClick} disabled={disabled} >{value} </button>
    </>
  )
}
