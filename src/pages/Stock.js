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
        <h3>Name: {stock.name}</h3>
        <h3 className="price">Symbol: {stock.symbol}</h3>
        <h3>LastPrice: {stock.lastPrice}</h3>
        <h3>Change: {stock.change}</h3>
        <h3>High: {stock.high}</h3>
        <h3>Low: {stock.low}</h3>
        <h3>Open: {stock.open}</h3>
      </div>
    );

  
    }
