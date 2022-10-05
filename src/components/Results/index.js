import React from "react";
import Represent from "../../pages/Represent.js"
import axios from 'axios';
// import { buildURL } from '../../utils/helpers.js';


function Results(props){
 
    console.log(props.results)
    if (!props.results){
        return (
            <div className="w-full text-center pt-5">
                <p >Search for your representatives using the search tool above!!</p>
            </div>
        )
    }

    else {
        
        return (
            <div className="table p-5">
                <tr className="table-head">
                    <td>Party</td>
                    <td>Name</td>
                    <td>District</td>
                    <td>Phone</td>
                    <td>Address</td>
                    <td>Website</td>
                </tr>
                <Represent results={props.results}/>
            </div>
        )
    }

    // return (
    //     <>
    //         <p>Search for your representatives using the search tool above!!</p>
    //     </>
    // )

}

export default Results;