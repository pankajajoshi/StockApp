import stocks from '../data';
import { Link } from "react-router-dom";

export default function Dashboard (props){
    //return <h1>This is stocks list page</h1>;
    return (
        <div className="stocks">
             <h1>This is stocks list page</h1>
             <table border='0'>
                    <thead>
                        <tr>
                            <td width="60%">
                                <strong><h3>Company Name</h3></strong>
                            </td>
                            <td width="15%">
                                <strong><h3>Price</h3></strong>
                            </td>
                            <td width="25%">
                                <strong><h3>Change</h3></strong>
                            </td>
                        </tr>
                    </thead>
          {stocks.map((stock) => {
            const { name, symbol, lastPrice, change } = stock;
    
            return (
                    <tbody>
                        <tr>
                            <td>
                            <Link to={`/stocks/${symbol}`}>
                                <h4>{name}</h4>
                            </Link>
                        </td>
                        <td>
                            <h2>{lastPrice}</h2>
                        </td>
                        <td>
                            <h2  style={{color: change > 0 ? "green" : "red"}}>{change}</h2>
                        </td>
                        </tr>
                    </tbody>
            );
          })}
              </table>
    </div>
      );
  
      
  
  
  
  
  
  
    };




