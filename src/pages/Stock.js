import stocks from '../data';
import { useParams } from "react-router-dom";
import React from 'react'
import { Link } from "react-router-dom";

// const Stock = props => {
//     const stock = stocks.filter( d => d.symbol === props.match.params.symbol)[0]
//     return (
//       <div>
//         <h3>Name: {stock.name}</h3>
//         <h3 className="price">Price: {stock.lastPrice}</h3>
//       </div>
//     )
//   }
  
  
//   export default Stock
export default function Stock (props) {
 
    const params = useParams()
    const symbol = params.symbol
    console.log(symbol);

        const stock = stocks.filter( d => d.symbol === symbol)[0]
    return (
      <div>
        <table className="stockdisplay">
            <thead>
                <tr>
                    <td><h2>Name</h2></td>
                    <td> <h2>Symbol</h2></td>
                    <td> <h2>Last Price</h2></td>
                    <td><h2>Change</h2></td>
                    <td><h2>High</h2></td>
                    <td><h2>Low</h2></td>
                    <td><h2>Open</h2></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                   
                    <td><h3> {stock.name}</h3>  </td>
                    <td> <h3 className="price"> {stock.symbol}</h3> </td>
                    <td><h3> {stock.lastPrice}</h3> </td>
                    <td> <h3  style={{color: stock.change > 0 ? "green" : "red"}}>{stock.change}</h3> </td>
                    <td>  <h3>{stock.high}</h3> </td>
                    <td>   <h3> {stock.low}</h3> </td>
                    <td>  <h3>{stock.open}</h3> </td>
                </tr>
            </tbody>
        </table>
       
      </div>
    );

  
    }
