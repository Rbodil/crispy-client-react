import React from "react";


function Represent(props) {

    console.log("represent",props)
    return (
        <>
            {props.results &&
                props.results.map((rep) => (

                    <tr className="table-row py-5">
                        <td>{rep.party}</td>
                        <td>{rep.name}</td>
                        <td>{rep.district}</td>
                        <td>{rep.phone}</td>
                        <td>{rep.office}</td>
                        <td><a className="weblink" target="_blank" href={rep.link}>{rep.link}</a></td>
                    </tr>

                ))
            }
        </>
    )
}


export default Represent;